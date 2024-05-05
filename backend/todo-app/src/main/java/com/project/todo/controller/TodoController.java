package com.project.todo.controller;


import com.project.todo.dto.TodoDto;
import com.project.todo.service.TodoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/api/users/{username}/todos")
    public ResponseEntity<List<TodoDto>> getAllTodos(@PathVariable String username) {
        return ResponseEntity.ok().body(todoService.findByUsername(username));
    }

    @GetMapping("/api/users/{username}/todos/{id}")
    public ResponseEntity<TodoDto> getTodoById(@PathVariable String username, @PathVariable long id) {
        TodoDto todo = todoService.findById(id);
        if (todo == null){
            return ResponseEntity.notFound().build();
        }else{
            return ResponseEntity.ok().body(todo);
        }
    }

    @DeleteMapping("/api/users/user/todos/{id}")
    public ResponseEntity<Void> deleteTodoById(@PathVariable long id) {
        todoService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}
