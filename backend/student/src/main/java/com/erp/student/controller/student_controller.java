package com.erp.student.controller;

import com.erp.student.model.student;
import com.erp.student.service.student_service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
public class student_controller {
    @Autowired
    private student_service studentService;

    @PostMapping("/add")
    public String add(@RequestBody student s1){
        studentService.saveStudent(s1);
        return "Registration successful";
    }
    @GetMapping("/getAll")
    public List<student> getallstudents(){
        return studentService.getallstudents();
    }
}
