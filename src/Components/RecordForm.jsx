import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

function RecordForm({ onAddRecord, onUpdateRecord, editableRecord }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    if (editableRecord) {
      setName(editableRecord.name);
      setAge(editableRecord.age);
    } else {
      setName("");
      setAge("");
    }
  }, [editableRecord]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editableRecord) {
      onUpdateRecord({ ...editableRecord, name, age });
    }
    else {
      onAddRecord({ name, age });
    }
    setName("");
    setAge("");
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control size="sm" type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control size="sm"type="number" placeholder="Enter age" value={age} onChange={(e) => setAge(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" size="sm">
        {editableRecord ? "Update Record" : "Add Record"}
      </Button>
    </Form>
  );
}

export default RecordForm;
