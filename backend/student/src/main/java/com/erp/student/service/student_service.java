package com.erp.student.service;

import com.erp.student.model.student;

import java.util.List;

public interface student_service {
    public student saveStudent(student s1);
    public List<student> getallstudents();
}
