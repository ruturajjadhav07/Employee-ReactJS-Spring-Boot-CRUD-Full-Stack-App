import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importing React Router components
import EmployeeList from "./Employee/EmployeeList";
import EmployeeAdd from "./Employee/EmployeeAdd";
import EmployeeEdit from "./Employee/EmployeeEdit";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<EmployeeAdd />} />
          <Route path="/edit/:id" element={<EmployeeEdit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
