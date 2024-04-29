package com.project.todo.controller;


import org.springframework.boot.actuate.web.exchanges.HttpExchange;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.todo.dto.HelloWorld;

@RestController
@RequestMapping("/api")
public class HelloWorlController {

    HelloWorld helloWorld = new HelloWorld("Hello World");


    @GetMapping("/hello")
    public ResponseEntity<HelloWorld> getHello() {
        return ResponseEntity.ok().body(helloWorld);
    }

}
