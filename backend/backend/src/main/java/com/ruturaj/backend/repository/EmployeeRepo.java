package com.ruturaj.backend.repository;

// import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ruturaj.backend.modal.EmployeeModal;

@Repository
public interface EmployeeRepo extends JpaRepository<EmployeeModal, Integer> {

    // List<EmployeeModal> findByEmail(String email);

}