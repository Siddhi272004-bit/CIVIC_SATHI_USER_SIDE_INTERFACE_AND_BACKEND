// src/components/IssuesTable.js
import React, { useState } from "react";
import { Table, Button, Badge, Dropdown } from "react-bootstrap";

// Mock complaints data
const complaints = [
  {
    id: 1,
    category: "pothole",
    location: "Main Street",
    createdAt: "2024-01-15T10:30:00Z",
    status: "open",
    priority: "high",
    department: "Roads & Infrastructure",
    reporter: { name: "John Doe" },
  },
  {
    id: 2,
    category: "streetlight",
    location: "2nd Avenue",
    createdAt: "2024-01-14T14:00:00Z",
    status: "resolved",
    priority: "medium",
    department: "Utilities",
    reporter: { name: "Jane Smith" },
  },
];

const getStatusBadge = (status) => {
  switch (status) {
    case "open":
      return <Badge bg="danger">Open</Badge>;
    case "in-progress":
      return <Badge bg="warning">In Progress</Badge>;
    case "resolved":
      return <Badge bg="success">Resolved</Badge>;
    case "closed":
      return <Badge bg="secondary">Closed</Badge>;
    default:
      return <Badge bg="light">{status}</Badge>;
  }
};

const getPriorityBadge = (priority) => {
  switch (priority) {
    case "critical":
    case "high":
      return <Badge bg="danger">{priority}</Badge>;
    case "medium":
      return <Badge bg="warning">{priority}</Badge>;
    case "low":
      return <Badge bg="secondary">{priority}</Badge>;
    default:
      return <Badge bg="light">{priority}</Badge>;
  }
};

export default function IssuesTable() {
  const [selectedIssues, setSelectedIssues] = useState([]);

  const toggleSelection = (id) => {
    setSelectedIssues((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <h3>All Issues ({complaints.length})</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectedIssues.length === complaints.length}
                onChange={() =>
                  setSelectedIssues(
                    selectedIssues.length === complaints.length
                      ? []
                      : complaints.map((c) => c.id)
                  )
                }
              />
            </th>
            <th>ID</th>
            <th>Category</th>
            <th>Location</th>
            <th>Date</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Department</th>
            <th>Reporter</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((issue) => (
            <tr key={issue.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedIssues.includes(issue.id)}
                  onChange={() => toggleSelection(issue.id)}
                />
              </td>
              <td>{`CMP-${String(issue.id).padStart(3, "0")}`}</td>
              <td>{issue.category}</td>
              <td>{issue.location}</td>
              <td>{new Date(issue.createdAt).toLocaleDateString()}</td>
              <td>{getStatusBadge(issue.status)}</td>
              <td>{getPriorityBadge(issue.priority)}</td>
              <td>{issue.department}</td>
              <td>{issue.reporter.name}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" size="sm">
                    Actions
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">View Details</Dropdown.Item>
                    <Dropdown.Item href="#">Assign</Dropdown.Item>
                    <Dropdown.Item href="#">Resolve</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
