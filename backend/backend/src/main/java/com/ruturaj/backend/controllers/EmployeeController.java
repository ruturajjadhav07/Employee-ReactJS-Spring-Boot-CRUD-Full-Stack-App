package com.ruturaj.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ruturaj.backend.modal.EmployeeModal;
import com.ruturaj.backend.service.EmployeeService;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000/")
public class EmployeeController {

    @Autowired

    public EmployeeService employeeService;

    // Employee list
    @GetMapping("/employee")
    public List<EmployeeModal> getEmployee() {
        return employeeService.getEmployee();
    }

    // Add Employee
    @PostMapping("/add")
    public EmployeeModal add(@RequestBody EmployeeModal modal) {
        return employeeService.addEmployee(modal);
    }

    // Edit Employee
    @PutMapping("/edit/{id}")
    public EmployeeModal edit(@PathVariable int id, @RequestBody EmployeeModal modal) {
        return employeeService.editEmployee(id, modal);
    }

    // Delete Employee
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable int id) {
        employeeService.deleteEmployee(id);
    }
}
