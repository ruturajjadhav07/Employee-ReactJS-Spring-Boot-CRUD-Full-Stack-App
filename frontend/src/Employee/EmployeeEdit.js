import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EmployeeEdit = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/employee/${id}`)
      .then((response) => setEmployee(response.data))
      .catch((e) => setError(e.message || "Error fetching employee data"));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/api/edit/${id}`, employee)
      .then(() => {
        alert("Employee updated successfully!");
        navigate("/");
      })
      .catch((e) => setError(e.message));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* {error && <div className="alert alert-danger">{error}</div>} */}
          <form className="border p-4 rounded shadow" onSubmit={handleSubmit}>
            <h1 className="text-center mb-2">Edit Employee</h1>
            <div className="form-group mb-3">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstname"
                value={employee.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastname"
                value={employee.lastname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={employee.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>Contact</label>
              <input
                type="text"
                className="form-control"
                name="contact"
                value={employee.contact}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
            <a href="/" className="btn btn-secondary mx-2">
              Back
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeEdit;
