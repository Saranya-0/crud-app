import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import RecordForm from "./Components/RecordForm";
import RecordList from "./Components/RecordList";

function App() {
  const [records, setRecords] = useState([]);
  const [editableRecord, setEditableRecord] = useState(null);

  const handleAddRecord = (record) => {
    setRecords([...records, { id: Date.now(), ...record }]);
  };

  const handleUpdateRecord = (updatedRecord) => {
    setRecords(
      records.map((record) =>
        record.id === updatedRecord.id ? updatedRecord : record
      )
    );
    setEditableRecord(null);
  };

  const handleDeleteRecord = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  const handleEditRecord = (record) => {
    setEditableRecord(record);
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow p-4">
            <h1 className="text-center text-primary mb-4">Record Manager</h1>
            <RecordForm
              onAddRecord={handleAddRecord}
              onUpdateRecord={handleUpdateRecord}
              editableRecord={editableRecord}
            />
            <RecordList
              records={records}
              onEditRecord={handleEditRecord}
              onDeleteRecord={handleDeleteRecord}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
