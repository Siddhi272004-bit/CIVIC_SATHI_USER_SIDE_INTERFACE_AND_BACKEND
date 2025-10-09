import { useState } from "react";
import { Shield, Users, Settings, Plus } from "lucide-react";

const rolesData = [
  {
    name: "System Administrator",
    description: "Full system access and user management",
    userCount: 2,
    permissions: ["Full System Access", "User Management", "System Configuration", "Data Export", "Security Settings"],
    color: "danger",
  },
  {
    name: "Department Manager",
    description: "Manage department staff and issues",
    userCount: 5,
    permissions: ["Department Access", "Staff Management", "Issue Management", "Report Generation"],
    color: "primary",
  },
  {
    name: "Field Supervisor",
    description: "Supervise field operations and staff",
    userCount: 8,
    permissions: ["Department Access", "Issue Management", "Staff Coordination", "Field Reports"],
    color: "secondary",
  },
  {
    name: "Staff Member",
    description: "Handle assigned issues and tasks",
    userCount: 15,
    permissions: ["Basic Access", "Issue Updates", "Time Tracking", "Report Submission"],
    color: "light",
  },
  {
    name: "Analyst",
    description: "Generate reports and analyze data",
    userCount: 3,
    permissions: ["Analytics Access", "Report Generation", "Data Visualization", "Export Data"],
    color: "light",
  },
];

const totalUsers = rolesData.reduce((sum, role) => sum + role.userCount, 0);

export function UserRoles() {
  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Shield className="me-2" />
          <span>User Roles & Permissions</span>
        </div>
        <button className="btn btn-outline-secondary btn-sm d-flex align-items-center">
          <Plus className="me-2" />
          Create Role
        </button>
      </div>
      <div className="card-body">
        {rolesData.map((role, index) => (
          <div key={index} className="border rounded p-3 mb-3">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div className="d-flex align-items-center">
                <span className={`badge bg-${role.color} me-2`}>{role.name}</span>
                <div className="d-flex align-items-center small text-muted">
                  <Users className="me-1" />
                  {role.userCount} users
                </div>
              </div>
              <button className="btn btn-light btn-sm">
                <Settings />
              </button>
            </div>

            <p className="small text-muted">{role.description}</p>

            {/* User distribution */}
            <div className="d-flex justify-content-between small mb-1">
              <span>User Distribution</span>
              <span>{Math.round((role.userCount / totalUsers) * 100)}%</span>
            </div>
            <div className="progress mb-2" style={{ height: "8px" }}>
              <div
                className={`progress-bar bg-${role.color}`}
                role="progressbar"
                style={{ width: `${(role.userCount / totalUsers) * 100}%` }}
              />
            </div>

            {/* Key permissions */}
            <div>
              <h6 className="small mb-1">Key Permissions:</h6>
              <div className="d-flex flex-wrap gap-1">
                {role.permissions.slice(0, 3).map((perm, i) => (
                  <span key={i} className="badge bg-light text-dark small">
                    {perm}
                  </span>
                ))}
                {role.permissions.length > 3 && (
                  <span className="badge bg-light text-dark small">
                    +{role.permissions.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
