import React from 'react'
import { Card, Button } from "react-bootstrap";

function RecordItem({ record, onEdit, onDelete }) {
  return (
    <div>
        <Card className="mb-3">
      <Card.Body className="d-flex justify-content-between align-items-center">
        <div>
          <Card.Title>{record.name}</Card.Title>
          <Card.Text>Age: {record.age}</Card.Text>
        </div>
        <div>
          <Button variant="info" size="sm" className="me-2" onClick={() => onEdit(record)} >
            Edit
          </Button>
          <Button variant="danger" size="sm" onClick={() => onDelete(record.id)}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default RecordItem