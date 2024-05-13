import React, { useState } from "react";
import DependentForm from "./DependentForm";

const EditEmployeeForm = ({ employee, onUpdateEmployee, onCancel }) => {
  const [name, setName] = useState(employee.name);
  const [dependents, setDependents] = useState(employee.dependents);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEmployee = { ...employee, name, dependents };
    onUpdateEmployee(updatedEmployee);
  };

  const handleCancel = () => {
    onCancel();
  };

  const handleAddDependent = () => {
    setDependents([...dependents, { name: "", relationship: "" }]);
  };

  const handleDependentChange = (index, updatedDependent) => {
    const updatedDependents = [...dependents];
    updatedDependents[index] = updatedDependent;
    setDependents(updatedDependents);
  };

  const handleRemoveDependent = (dependentToRemove) => {
    const updatedDependents = dependents.filter(
      (dependent) => dependent !== dependentToRemove
    );
    setDependents(updatedDependents);
  };

  return (
    <div>
      <h3>Edit Employee</h3>
      <div>
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
            onRemoveDependent={handleRemoveDependent}
          />
        ))}

        <div>
          <button onClick={handleAddDependent}>Add Dependent</button>
          <button onClick={handleSubmit}>Save Changes</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditEmployeeForm;
