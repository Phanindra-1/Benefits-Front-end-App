import React, { useState } from "react";
import DependentForm from "./DependentForm";

const AddEmployeeForm = ({ onAddEmployee }) => {
  const [name, setName] = useState("");
  const [dependents, setDependents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: Date.now(), // Generate a unique ID for the new employee
      name,
      dependents,
    };
    onAddEmployee(newEmployee);
    setName("");
    setDependents([]);
  };

  const handleAddDependent = () => {
    setDependents([...dependents, { name: "", relationship: "" }]);
  };

  const handleDependentChange = (index, updatedDependent) => {
    const updatedDependents = [...dependents];
    updatedDependents[index] = updatedDependent;
    setDependents(updatedDependents);
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <h4>Dependents</h4>
        {dependents.map((dependent, index) => (
          <DependentForm
            key={index}
            dependent={dependent}
            onDependentChange={(updatedDependent) =>
              handleDependentChange(index, updatedDependent)
            }
          />
        ))}
        <button type="button" onClick={handleAddDependent}>
          Add Dependent
        </button>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;
