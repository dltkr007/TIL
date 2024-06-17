package com.example.demo_virmuda.board.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/main")
public class BoardController {

    @GetMapping
    public String mainPage() {
        return "연동 됐냐??!?!?!?!??!";
    }
}
