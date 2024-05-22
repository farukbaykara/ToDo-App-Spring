package com.project.todo.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import com.project.todo.dto.TodoDto;
import com.project.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    private static List<TodoDto> todos = new ArrayList<>();

    private static long todosCount = 0;

    static {
        todos.add(new TodoDto(++todosCount, "user","Get AWS Certified",
                LocalDate.now().plusYears(10), false ));
        todos.add(new TodoDto(++todosCount, "user","Learn DevOps",
                LocalDate.now().plusYears(11), false ));
        todos.add(new TodoDto(++todosCount, "user","Learn Full Stack Development",
                LocalDate.now().plusYears(12), false ));
    }

    public List<TodoDto> findByUsername(String username){

        
        Predicate<? super TodoDto> predicate =
                todo -> todo.getUsername().equalsIgnoreCase(username);
        return todos.stream().filter(predicate).toList();

        //return todoRepository.findByUsername(username);
    }


    public TodoDto addTodo(String username, String description, LocalDate targetDate, boolean done) {
        TodoDto todo = new TodoDto(++todosCount,username,description,targetDate,done);
        todos.add(todo);
        return todo;
    }

    public void deleteById(long id) {
        Predicate<? super TodoDto> predicate = todo -> todo.getId() == id;
        todos.removeIf(predicate);
    }

    public TodoDto findById(long id) {
        Predicate<? super TodoDto> predicate = todo -> todo.getId() == id;
        TodoDto todo = todos.stream().filter(predicate).findFirst().orElse(null);
        return todo;
    }

    public void updateTodo(TodoDto todo) {
        deleteById(todo.getId());
        todos.add(todo);
    }
}