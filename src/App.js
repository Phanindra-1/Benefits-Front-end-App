import React, { useState, useEffect } from "react";
import "./App.css";
import employeeData from "./employee-data";
import EmployeeList from "./EmployeeList";
import AddEmployeeForm from "./AddEmployeeForm";
import BenefitsPreview from "./BenefitsPreview";

function App() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    // Fetch employee data from employee-data.js -- mocking API
    setEmployees(employeeData);
  }, []);

  const calculateBenefitsCost = () => {
    let benefitsData = [];

    employees.forEach((employee) => {
      let totalCost = 0;
      let employeeCost = 1000; // Base cost for employee

      // Apply discount for names starting with 'A'
      if (employee.name.startsWith("A")) {
        employeeCost *= 0.9;
      }

      let dependentCost = employee.dependents.reduce((total, dependent) => {
        let cost = 500; // Base cost for dependent

        // Apply discount for names starting with 'A'
        if (dependent.name.startsWith("A")) {
          cost *= 0.9;
        }

        return total + cost;
      }, 0);

      totalCost += employeeCost + dependentCost;

      benefitsData.push({
        id: employee.id,
        name: employee.name,
        cost: totalCost / 26,
      });
    });

    return benefitsData; // Calculate cost per paycheck
  };

  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
  };

  const handleUpdateEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    );
    setEmployees(updatedEmployees);
    setEditingEmployee(null);
  };

  const handleCancelEdit = () => {
    setEditingEmployee(null);
  };

  const benefitsCostPerPaycheck = calculateBenefitsCost();

  return (
    <div>
      <h1>Healthcare Benefits Calculator</h1>
      <AddEmployeeForm onAddEmployee={handleAddEmployee} />
      <EmployeeList
        employees={employees}
        onEditEmployee={handleEditEmployee}
        editingEmployee={editingEmployee}
        onUpdateEmployee={handleUpdateEmployee}
        onCancelEdit={handleCancelEdit}
      />
      <BenefitsPreview benefitsCostPerPaycheck={benefitsCostPerPaycheck} />
    </div>
  );
}

export default App;
