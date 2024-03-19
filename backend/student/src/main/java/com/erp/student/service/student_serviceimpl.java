package com.erp.student.service;

import com.erp.student.model.student;
import com.erp.student.repository.student_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class student_serviceimpl implements student_service{
    @Autowired
    private student_repository studentRepository;
    @Override
    public student saveStudent(student s1) {

        return studentRepository.save(s1);
    }

    @Override
    public List<student> getallstudents() {
        return studentRepository.findAll();
    }
}
