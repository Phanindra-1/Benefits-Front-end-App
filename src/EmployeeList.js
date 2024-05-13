import React from "react";
import EditEmployeeForm from "./EditEmployeeForm";

const EmployeeList = ({
  employees,
  onEditEmployee,
  editingEmployee,
  onUpdateEmployee,
  onCancelEdit,
}) => {
  return (
    <div>
      <h2>Employees</h2>
      {employees.map((employee) => (
        <div key={employee.id}>
          <h3>{employee.name}</h3>
          {editingEmployee && editingEmployee.id === employee.id ? (
            <EditEmployeeForm
              employee={editingEmployee}
              onUpdateEmployee={onUpdateEmployee}
              onCancel={onCancelEdit}
            />
          ) : (
            <>
              <button onClick={() => onEditEmployee(employee)}>Edit</button>
              <h4>Dependents</h4>
              <ul>
                {employee.dependents.map((dependent, index) => (
                  <li key={index}>
                    {dependent.name} ({dependent.relationship})
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
