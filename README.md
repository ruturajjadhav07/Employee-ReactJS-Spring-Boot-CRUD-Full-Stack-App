# Employee Management System - Step-by-Step Guide

This guide will walk you through the process of setting up both the backend (Spring Boot) and frontend (React), accessing the database, and running the application.

If you get error just check your source path and set it.
## Prerequisites

Before we begin, make sure you have the following installed:

- **Java 8+** (for the backend Spring Boot application)
- **Node.js** (for the frontend React application)
- **MySQL** (or any other SQL database supported by Spring Boot)
- **Maven** (for building the Spring Boot project)
- **IDE** (e.g., IntelliJ IDEA, VS Code)

---

## Dependencies
**Backend Dependencies**
Spring Web: For creating RESTful APIs.

Spring Boot DevTools: For enhanced development experience (auto-reloading).

Spring Data JPA: For interacting with MySQL and other databases.

MySQL Driver: To connect Spring Boot with MySQL.

Lombok: To reduce boilerplate code (e.g., getters, setters).

**Frontend Dependencies**
Axios: For making HTTP requests to the backend.
React Router DOM: For handling routing in the React app.

---
## 1. **Setting Up the Backend (Spring Boot)**

### Step 1: Clone the Backend Repository

Clone the backend repository from your GitHub (or use the provided backend code):

```bash
git clone https://github.com/ruturajjadhav07/Employee-ReactJS-Spring-Boot-CRUD-Full-Stack-App.git
```
Navigate to the backend folder:
```
cd backend
```

### Step 2: Configure MySQL Database
Ensure that MySQL is installed and running on your machine.
Log in to MySQL and create a database for your application:
```
mysql -u root -p
```
Create a database for your application:
sql
```
CREATE DATABASE spring_employee;
```
### Step 3: Update the application.properties
In your Spring Boot project, navigate to src/main/resources/application.properties and configure your MySQL connection settings:
```
spring.application.name=backend

spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/spring_employee
spring.datasource.username=name
spring.datasource.password=password
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=update
```
### Step 4: Build and Run the Backend
Navigate to the backend folder and run the application:
```
./mvnw spring-boot:run
```

## 2. Setting Up the Frontend (React)
### Step 1: Clone the Frontend Repository
Clone the frontend repository from your GitHub (or use the provided frontend code):
```
git clone https://github.com/ruturajjadhav07/Employee-ReactJS-Spring-Boot-CRUD-Full-Stack-App.git
```
Navigate to the frontend folder:
```
cd frontend
```
### Step 2: Install Dependencies
Install the required Node.js dependencies:
```
npm install
```
### Step 3: Start the Frontend Application
Start the React development server:
```
npm start
```
This will start the frontend on http://localhost:3000.

### Step 4: Verify Frontend
Once the frontend is running, navigate to http://localhost:3000 in your browser. 

You should see the Employee Management System UI, and you can interact with the employee list (add, edit, delete employees).

## 3. Verify Backend and Frontend Integration
Once both the backend and frontend are running, they should be able to communicate with each other:

### **Backend API**: The backend API is accessible at http://localhost:8080/api/employee.
**Frontend**: The frontend will send requests to the backend and display the data in the UI.

Ensure the CORS configuration is correct in the backend.

## API Endpoints
Fetches a list of all employees.
```
GET /api/employee
```
Fetches an employee by ID.
```
GET /api/employee/{id} 
```
Adds a new employee.
```
POST /api/add 
```
Updates an existing employee.
```
POST /api/edit/{id} 
```
Deletes an employee by ID.
```
DELETE /api/delete/{id}
```

## Screenshot
**Employee List**
![image](https://github.com/user-attachments/assets/838104ff-248e-406c-9770-5b8b9e5ce244)

**Add Employee**
![image](https://github.com/user-attachments/assets/70680f4e-2dd0-45f2-8beb-84f697a9104d)

**Edit Employee**
![image](https://github.com/user-attachments/assets/21aedd5c-fc8e-42f9-bcc6-cc267808a8df)

**Delete Employee**
![image](https://github.com/user-attachments/assets/2fb6ca45-0f45-435c-a2b9-eed6d325023f)

**If network not found**
![image](https://github.com/user-attachments/assets/3ccbb821-7759-46d4-8beb-bc0c21ffe2de)

