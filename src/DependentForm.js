import React, { useState } from "react";

const DependentForm = ({ dependent, onDependentChange, onRemoveDependent }) => {
  const [name, setName] = useState(dependent.name);
  const [relationship, setRelationship] = useState(dependent.relationship);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedDependent = { name, relationship };
    onDependentChange(updatedDependent);
  };

  const handleRemove = () => {
    onRemoveDependent(dependent);
  };

  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Relationship:
        <input
          type="text"
          value={relationship}
          onChange={(e) => setRelationship(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Save</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default DependentForm;
