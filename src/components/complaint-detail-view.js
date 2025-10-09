// src/components/ComplaintDetailView.js
import React, { useState } from "react";
import { Card, Button, Badge, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

// Mock complaint data
const complaintData = {
  id: "CMP-001",
  title: "Large pothole causing traffic issues",
  category: "Pothole",
  description:
    "There is a large pothole on Main Street near the intersection with 1st Avenue. It's causing vehicles to swerve and creating a safety hazard. The pothole appears to be about 3 feet wide and 6 inches deep.",
  location: "Main Street & 1st Ave, Ward 5",
  status: "open",
  priority: "high",
  dateReported: "2024-01-15T10:30:00Z",
  reporter: {
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    anonymous: false,
  },
  assignedDepartment: "Roads & Infrastructure",
  assignedTo: "Mike Wilson",
  tags: ["traffic-hazard", "main-street", "urgent-repair"],
};

export function ComplaintDetailView() {
  const [resolutionNotes, setResolutionNotes] = useState("");

  const getStatusBadge = (status) => {
    switch (status) {
      case "open":
        return <Badge bg="danger">Open</Badge>;
      case "assigned":
        return <Badge bg="secondary">Assigned</Badge>;
      case "in-progress":
        return <Badge bg="warning">In Progress</Badge>;
      case "resolved":
        return <Badge bg="success">Resolved</Badge>;
      case "closed":
        return <Badge bg="dark">Closed</Badge>;
      default:
        return <Badge bg="light">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "critical":
        return <Badge bg="danger">Critical</Badge>;
      case "high":
        return <Badge bg="danger">High</Badge>;
      case "medium":
        return <Badge bg="warning">Medium</Badge>;
      case "low":
        return <Badge bg="secondary">Low</Badge>;
      default:
        return <Badge bg="light">{priority}</Badge>;
    }
  };

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="d-flex align-items-center mb-4">
        <Link to="/issues">
          <Button variant="outline-secondary" size="sm" className="me-2">
            <ArrowLeft /> Back
          </Button>
        </Link>
        <div>
          <h2>{complaintData.id}</h2>
          <p className="text-muted">{complaintData.title}</p>
        </div>
      </div>

      <div className="row">
        {/* Main Content */}
        <div className="col-lg-8">
          {/* Complaint Details */}
          <Card className="mb-3">
            <Card.Header>Complaint Details</Card.Header>
            <Card.Body>
              <p>{complaintData.description}</p>
              <p>
                <strong>Category: </strong>
                <Badge bg="info">{complaintData.category}</Badge>
              </p>
              <p>
                <strong>Location: </strong>
                {complaintData.location}
              </p>
              <p>
                <strong>Tags: </strong>
                {complaintData.tags.map((tag, idx) => (
                  <Badge key={idx} bg="secondary" className="me-1">
                    {tag}
                  </Badge>
                ))}
              </p>
            </Card.Body>
          </Card>

          {/* Resolution Notes */}
          <Card className="mb-3">
            <Card.Header>Resolution Notes</Card.Header>
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Add resolution notes..."
                  value={resolutionNotes}
                  onChange={(e) => setResolutionNotes(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" className="me-2">
                Save Notes
              </Button>
              <Button variant="outline-secondary">Upload Photo</Button>
            </Card.Body>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          {/* Status & Priority */}
          <Card className="mb-3">
            <Card.Header>Status & Priority</Card.Header>
            <Card.Body>
              <p>
                <strong>Status: </strong>
                {getStatusBadge(complaintData.status)}
              </p>
              <p>
                <strong>Priority: </strong>
                {getPriorityBadge(complaintData.priority)}
              </p>
            </Card.Body>
          </Card>

          {/* Assignment */}
          <Card className="mb-3">
            <Card.Header>Assignment</Card.Header>
            <Card.Body>
              <p>
                <strong>Department: </strong>
                {complaintData.assignedDepartment}
              </p>
              <p>
                <strong>Assigned To: </strong>
                {complaintData.assignedTo}
              </p>
            </Card.Body>
          </Card>

          {/* Reporter Info */}
          <Card className="mb-3">
            <Card.Header>Reporter</Card.Header>
            <Card.Body>
              <p>{complaintData.reporter.name}</p>
              {!complaintData.reporter.anonymous && (
                <>
                  <p>Email: {complaintData.reporter.email}</p>
                  <p>Phone: {complaintData.reporter.phone}</p>
                </>
              )}
              <p>
                Reported on:{" "}
                {new Date(complaintData.dateReported).toLocaleDateString()} at{" "}
                {new Date(complaintData.dateReported).toLocaleTimeString()}
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
