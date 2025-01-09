package com.ruturaj.backend.service;

import java.util.List;

import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import com.ruturaj.backend.modal.EmployeeModal;

import com.ruturaj.backend.repository.EmployeeRepo;


@Service
public class EmployeeService {

    private final EmployeeRepo employeeRepo;

    public EmployeeService(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    // Get all Employees
    public List<EmployeeModal> getEmployee() {
        return employeeRepo.findAll();
    }

    // Add Employee
    public EmployeeModal addEmployee(EmployeeModal employee) {
        return employeeRepo.save(employee);
    }

    // Edit Employee
    public EmployeeModal editEmployee(int id, EmployeeModal updateEmployee) {
        // Find Employee by ID
        EmployeeModal existingEmployee = employeeRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with id " + id));

        // Update existing Employee details
        existingEmployee.setFirstname(updateEmployee.getFirstname());
        existingEmployee.setLastname(updateEmployee.getLastname());
        existingEmployee.setEmail(updateEmployee.getEmail());
        existingEmployee.setContact(updateEmployee.getContact());

        return employeeRepo.save(existingEmployee);
    }

    // Delete Employee
    public void deleteEmployee(int id) {
        // Find Employee by ID
        EmployeeModal employee = employeeRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with id " + id));

        // Delete Employee
        employeeRepo.delete(employee);
    }
}