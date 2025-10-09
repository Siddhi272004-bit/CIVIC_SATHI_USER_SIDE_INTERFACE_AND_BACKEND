import React from "react";
import { Building, Clock, CheckCircle, ExclamationTriangle } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const departmentData = [
  {
    name: "Roads & Infrastructure",
    totalIssues: 342,
    resolved: 298,
    avgResolutionTime: 3.2,
    performance: 87,
    status: "good",
  },
  {
    name: "Sanitation",
    totalIssues: 267,
    resolved: 245,
    avgResolutionTime: 1.8,
    performance: 92,
    status: "excellent",
  },
  {
    name: "Utilities",
    totalIssues: 189,
    resolved: 156,
    avgResolutionTime: 2.4,
    performance: 83,
    status: "good",
  },
  {
    name: "Traffic Management",
    totalIssues: 134,
    resolved: 98,
    avgResolutionTime: 4.1,
    performance: 73,
    status: "needs-improvement",
  },
  {
    name: "Parks & Recreation",
    totalIssues: 98,
    resolved: 89,
    avgResolutionTime: 2.9,
    performance: 91,
    status: "excellent",
  },
];

const getStatusBadge = (status) => {
  switch (status) {
    case "excellent":
      return <span className="badge bg-success">Excellent</span>;
    case "good":
      return <span className="badge bg-primary">Good</span>;
    case "needs-improvement":
      return <span className="badge bg-danger">Needs Improvement</span>;
    default:
      return <span className="badge bg-secondary">{status}</span>;
  }
};

export default function DepartmentPerformance() {
  return (
    <div className="card shadow-sm">
      <div className="card-header d-flex align-items-center">
        <Building className="me-2" />
        <h5 className="mb-0">Department Performance</h5>
      </div>
      <div className="card-body">
        {departmentData.map((dept, index) => (
          <div key={index} className="border rounded p-3 mb-4">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="mb-0">{dept.name}</h6>
              {getStatusBadge(dept.status)}
            </div>

            {/* Stats Grid */}
            <div className="row text-center mb-3">
              <div className="col-md-3">
                <div className="d-flex justify-content-center align-items-center mb-1 text-muted small">
                  <ExclamationTriangle className="me-1" /> Total Issues
                </div>
                <h5>{dept.totalIssues}</h5>
              </div>
              <div className="col-md-3">
                <div className="d-flex justify-content-center align-items-center mb-1 text-muted small">
                  <CheckCircle className="me-1" /> Resolved
                </div>
                <h5 className="text-success">{dept.resolved}</h5>
              </div>
              <div className="col-md-3">
                <div className="d-flex justify-content-center align-items-center mb-1 text-muted small">
                  <Clock className="me-1" /> Avg Time
                </div>
                <h5>{dept.avgResolutionTime}h</h5>
              </div>
              <div className="col-md-3">
                <div className="text-muted small mb-1">Performance</div>
                <h5>{dept.performance}%</h5>
              </div>
            </div>

            {/* Progress Bar */}
            <div>
              <div className="d-flex justify-content-between small">
                <span>Resolution Rate</span>
                <span>{Math.round((dept.resolved / dept.totalIssues) * 100)}%</span>
              </div>
              <div className="progress" style={{ height: "6px" }}>
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: `${(dept.resolved / dept.totalIssues) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
