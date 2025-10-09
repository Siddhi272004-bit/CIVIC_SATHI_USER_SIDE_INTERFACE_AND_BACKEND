import React from "react";
import { ArrowLeft, Users, Clock, CheckCircle, AlertTriangle, Settings, UserPlus } from "lucide-react";

const departmentData = {
  id: "roads-infrastructure",
  name: "Roads & Infrastructure",
  description: "Responsible for maintaining city roads, bridges, and infrastructure systems",
  manager: "Mike Wilson",
  totalStaff: 12,
  activeIssues: 23,
  resolvedThisMonth: 45,
  avgResolutionTime: 3.2,
  performance: 87,
  staff: [
    { name: "Mike Wilson", role: "Department Manager", active: 8, resolved: 45, status: "available", email: "m.wilson@city.gov" },
    { name: "Sarah Chen", role: "Senior Engineer", active: 12, resolved: 38, status: "busy", email: "s.chen@city.gov" },
    { name: "David Rodriguez", role: "Field Supervisor", active: 5, resolved: 52, status: "available", email: "d.rodriguez@city.gov" },
    { name: "Jennifer Kim", role: "Maintenance Tech", active: 7, resolved: 29, status: "available", email: "j.kim@city.gov" },
    { name: "Robert Taylor", role: "Equipment Operator", active: 3, resolved: 31, status: "offline", email: "r.taylor@city.gov" },
  ],
  recentIssues: [
    { id: "CMP-001", title: "Large pothole on Main Street", priority: "high", status: "in-progress", assignedTo: "Sarah Chen" },
    { id: "CMP-015", title: "Bridge inspection required", priority: "medium", status: "open", assignedTo: null },
    { id: "CMP-023", title: "Road marking restoration", priority: "low", status: "assigned", assignedTo: "David Rodriguez" },
  ],
};

const getStatusBadge = (status) => {
  switch (status) {
    case "available":
      return <span className="badge bg-success">Available</span>;
    case "busy":
      return <span className="badge bg-warning text-dark">Busy</span>;
    case "offline":
      return <span className="badge bg-secondary">Offline</span>;
    default:
      return <span className="badge bg-light text-dark">{status}</span>;
  }
};

const getPriorityBadge = (priority) => {
  switch (priority) {
    case "high":
      return <span className="badge bg-danger">High</span>;
    case "medium":
      return <span className="badge bg-warning text-dark">Medium</span>;
    case "low":
      return <span className="badge bg-info text-dark">Low</span>;
    default:
      return <span className="badge bg-light text-dark">{priority}</span>;
  }
};

export function DepartmentDetailView() {
  return (
    <div className="container my-4">
      {/* Header */}
      <div className="d-flex align-items-center mb-4">
        <a href="/departments" className="btn btn-outline-secondary btn-sm me-3">
          <ArrowLeft size={16} className="me-1" />
          Back
        </a>
        <div className="flex-grow-1">
          <h2 className="mb-1">{departmentData.name}</h2>
          <p className="text-muted">{departmentData.description}</p>
        </div>
        <button className="btn btn-primary btn-sm">
          <Settings size={16} className="me-1" />
          Manage
        </button>
      </div>

      {/* Overview Cards */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card p-3">
            <div className="d-flex align-items-center">
              <Users size={18} className="me-2 text-primary" />
              <span>Total Staff</span>
            </div>
            <h4 className="mt-2">{departmentData.totalStaff}</h4>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3">
            <div className="d-flex align-items-center">
              <AlertTriangle size={18} className="me-2 text-warning" />
              <span>Active Issues</span>
            </div>
            <h4 className="mt-2">{departmentData.activeIssues}</h4>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3">
            <div className="d-flex align-items-center">
              <CheckCircle size={18} className="me-2 text-success" />
              <span>Resolved This Month</span>
            </div>
            <h4 className="mt-2">{departmentData.resolvedThisMonth}</h4>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3">
            <div className="d-flex align-items-center">
              <Clock size={18} className="me-2 text-info" />
              <span>Avg Resolution</span>
            </div>
            <h4 className="mt-2">{departmentData.avgResolutionTime}d</h4>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Staff */}
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0 d-flex align-items-center">
                <Users size={18} className="me-2" />
                Department Staff
              </h5>
              <button className="btn btn-outline-primary btn-sm">
                <UserPlus size={14} className="me-1" />
                Add Staff
              </button>
            </div>
            <div className="card-body">
              {departmentData.staff.map((m, i) => (
                <div key={i} className="d-flex justify-content-between align-items-center border rounded p-3 mb-2">
                  <div>
                    <strong>{m.name}</strong>
                    <div className="text-muted small">{m.role}</div>
                    <div className="text-muted small">{m.email}</div>
                  </div>
                  <div className="text-end">
                    <div className="text-muted small">
                      <Clock size={12} className="me-1" /> {m.active} active
                    </div>
                    <div className="text-muted small">
                      <CheckCircle size={12} className="me-1" /> {m.resolved} resolved
                    </div>
                    {getStatusBadge(m.status)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Issues */}
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header d-flex align-items-center">
              <AlertTriangle size={18} className="me-2" />
              Recent Issues
            </div>
            <div className="card-body">
              {departmentData.recentIssues.map((issue, i) => (
                <div key={i} className="border rounded p-2 mb-2">
                  <div className="d-flex justify-content-between">
                    <strong>{issue.id}</strong>
                    {getPriorityBadge(issue.priority)}
                  </div>
                  <p className="small mb-1">{issue.title}</p>
                  <div className="d-flex justify-content-between small text-muted">
                    <span>{issue.status}</span>
                    <span>{issue.assignedTo ? `Assigned to ${issue.assignedTo}` : "Unassigned"}</span>
                  </div>
                </div>
              ))}
              <button className="btn btn-outline-secondary btn-sm w-100 mt-2">View All</button>
            </div>
          </div>
        </div>
      </div>

      {/* Performance */}
      <div className="card mt-4">
        <div className="card-header">Performance Metrics</div>
        <div className="card-body row g-4">
          <div className="col-md-4">
            <div className="d-flex justify-content-between small mb-1">
              <span>Resolution Rate</span>
              <span>
                {Math.round((departmentData.resolvedThisMonth / (departmentData.resolvedThisMonth + departmentData.activeIssues)) * 100)}%
              </span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-success" role="progressbar"
                style={{ width: `${Math.round((departmentData.resolvedThisMonth / (departmentData.resolvedThisMonth + departmentData.activeIssues)) * 100)}%` }}></div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="d-flex justify-content-between small mb-1">
              <span>Staff Utilization</span>
              <span>78%</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-info" style={{ width: "78%" }}></div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="d-flex justify-content-between small mb-1">
              <span>Overall Performance</span>
              <span>{departmentData.performance}%</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-primary" style={{ width: `${departmentData.performance}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
