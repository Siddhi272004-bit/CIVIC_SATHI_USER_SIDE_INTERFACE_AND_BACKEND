import React from "react";
import {
  People,
  PersonPlus,
  Clock,
  CheckCircle,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const staffData = [
  {
    department: "Roads & Infrastructure",
    staff: [
      { name: "Mike Wilson", role: "Senior Engineer", active: 8, resolved: 45, status: "available" },
      { name: "Sarah Chen", role: "Field Supervisor", active: 12, resolved: 38, status: "busy" },
      { name: "David Rodriguez", role: "Maintenance Tech", active: 5, resolved: 52, status: "available" },
    ],
  },
  {
    department: "Sanitation",
    staff: [
      { name: "Lisa Johnson", role: "Operations Manager", active: 6, resolved: 67, status: "available" },
      { name: "Tom Anderson", role: "Route Supervisor", active: 9, resolved: 43, status: "busy" },
      { name: "Maria Garcia", role: "Waste Coordinator", active: 3, resolved: 29, status: "available" },
    ],
  },
  {
    department: "Utilities",
    staff: [
      { name: "James Park", role: "Utilities Manager", active: 7, resolved: 34, status: "available" },
      { name: "Emma Thompson", role: "Water Systems Tech", active: 4, resolved: 28, status: "available" },
    ],
  },
];

const getStatusBadge = (status) => {
  switch (status) {
    case "available":
      return <span className="badge bg-success">Available</span>;
    case "busy":
      return <span className="badge bg-secondary">Busy</span>;
    case "offline":
      return <span className="badge bg-outline-secondary">Offline</span>;
    default:
      return <span className="badge bg-light text-dark">{status}</span>;
  }
};

export default function DepartmentStaffing() {
  return (
    <div className="card shadow-sm">
      {/* Header */}
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0 d-flex align-items-center">
          <People className="me-2" /> Department Staffing
        </h5>
        <button className="btn btn-outline-primary btn-sm">
          <PersonPlus className="me-1" /> Add Staff
        </button>
      </div>

      {/* Body */}
      <div className="card-body">
        {staffData.map((dept, deptIndex) => (
          <div key={deptIndex} className="mb-4">
            <h6 className="text-muted mb-3">{dept.department}</h6>
            {dept.staff.map((member, memberIndex) => (
              <div
                key={memberIndex}
                className="d-flex justify-content-between align-items-center border rounded p-3 mb-2"
              >
                {/* Left: Avatar + Info */}
                <div className="d-flex align-items-center">
                  <div
                    className="bg-light border rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: "36px", height: "36px", fontSize: "12px" }}
                  >
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="fw-medium small">{member.name}</div>
                    <div className="text-muted small">{member.role}</div>
                  </div>
                </div>

                {/* Right: Stats + Status */}
                <div className="d-flex align-items-center gap-3">
                  <div className="text-end small text-muted">
                    <div className="d-flex align-items-center mb-1">
                      <Clock className="me-1" size={12} /> {member.active} active
                    </div>
                    <div className="d-flex align-items-center">
                      <CheckCircle className="me-1" size={12} /> {member.resolved} resolved
                    </div>
                  </div>
                  {getStatusBadge(member.status)}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
