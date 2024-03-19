package com.erp.student.repository;

import com.erp.student.model.student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface student_repository extends JpaRepository<student, Integer> {
    // No need to implement methods here, JpaRepository provides them
}

