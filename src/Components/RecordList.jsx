import React from "react";
import { Table, Button } from "react-bootstrap";
import EmptyState from "./EmptyState";

function RecordList({ records, onEditRecord, onDeleteRecord }) {
  return (
    <div>
        
      <h2 className="text-center text-primary">Records</h2>
      {records.length > 0 ? (
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th className="text-success"> sl No</th>
              <th className="text-success">Name</th>
              <th className="text-success">Age</th>
              <th className="text-success">Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={record.id}>
                <td>{index + 1}</td>
                <td>{record.name}</td>
                <td>{record.age}</td>
                <td>
                  <Button variant="info"size="sm"onClick={() => onEditRecord(record)}className="me-2"  >
                    Edit
                  </Button>
                  <Button  variant="danger"  size="sm"  onClick={() => onDeleteRecord(record.id)} >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <EmptyState onAddClick={() => alert("Redirect to Add Record Form")} />
      )}
    </div>
  );
}

export default RecordList;
