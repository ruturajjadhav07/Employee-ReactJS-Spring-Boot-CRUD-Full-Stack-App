import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const EmployeeList = () => {
  const [employee, setEmployee] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/employee")
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((e) => {
        setError(e.message || "An error occurred");
      });
  }, []);

  const handleDelete = (id, firstname, lastname) => {
    const isConfirmed = window.confirm(
      `Are you sure you want to delete employee ${firstname} ${lastname}?`
    );

    if (isConfirmed) {
      axios
        .delete(`http://localhost:8080/api/delete/${id}`)
        .then(() => {
          alert(`Employee ${firstname} ${lastname} deleted`);
          setEmployee((prev) => prev.filter((emp) => emp.id !== id));
        })
        .catch((e) => setError(e.message || "Failed to delete employee"));
    }
  };

  return (
    <div className="container mt-4">
      <div className="sticky-top bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
        <h2 className="m-0">Employee List</h2>
        <a className="btn btn-primary" href="/add">
          Add Employee
        </a>
      </div>

      {error && <div className="alert alert-danger mt-3">{error}</div>}
      <table className="table table-striped table-bordered text-center">
        <thead>
          <tr>
            <th scope="col">Sr No</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {employee.length > 0 ? (
            employee.map((emp, index) => (
              <tr key={emp.id}>
                <th scope="row">{index + 1}</th>
                <td>{emp.firstname}</td>
                <td>{emp.lastname}</td>
                <td>{emp.email}</td>
                <td>{emp.contact}</td>
                <td>
                  <a href={`/edit/${emp.id}`} className="btn btn-warning">
                    Edit
                  </a>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      handleDelete(emp.id, emp.firstname, emp.lastname)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No employees found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
