package com.project.todo.mapper;


import com.project.todo.dto.TodoDto;
import com.project.todo.model.Todo;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.ApplicationScope;

import java.util.List;

@Component
@Mapper(componentModel = "spring")
public interface TodoMapper {


    @Mapping(target = "id", source = "id")
    @Mapping(target = "username", source = "username")
    @Mapping(target = "description", source = "description")
    @Mapping(target = "targetDate", source = "targetDate")
    @Mapping(target = "done", source = "done")
    TodoDto todoToTodoDto(Todo todo);

    List<TodoDto> todosToTodoDtos(List<Todo> todos);
}
