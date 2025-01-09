import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    setError(null);

    axios
      .post("http://localhost:8080/api/add", form)
      .then((res) => {
        alert("Employee added successfully!");
        setForm({ firstname: "", lastname: "", email: "", contact: "" });
        navigate("/"); 
      })
      .catch((e) => setError(e.message));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="border p-4 rounded shadow" onSubmit={submit}>
            <h1 className="text-center mb-2">Add Employee</h1>

            {error && <div className="alert alert-danger">{error}</div>}

            <div className="form-group mb-3">
              <input
                type="text"
                placeholder="First Name"
                id="firstname"
                className="form-control"
                onChange={handleChange}
                value={form.firstname}
                required
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                placeholder="Last Name"
                id="lastname"
                className="form-control"
                onChange={handleChange}
                value={form.lastname}
                required
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="email"
                placeholder="Email"
                id="email"
                className="form-control"
                onChange={handleChange}
                value={form.email}
                required
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                placeholder="Contact"
                id="contact"
                className="form-control"
                onChange={handleChange}
                value={form.contact}
                required
              />
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <a href="/" className="btn btn-secondary mx-2">Back</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
