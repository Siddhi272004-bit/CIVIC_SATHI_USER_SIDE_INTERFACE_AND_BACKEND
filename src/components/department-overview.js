import React, { useEffect, useState } from "react";
import { Building2 } from "react-bootstrap-icons"; // bootstrap-icons instead of lucide-react
import "bootstrap/dist/css/bootstrap.min.css";

export default function DepartmentOverview() {
  const [departmentPerformance, setDepartmentPerformance] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock fetch (replace with real API call)
  useEffect(() => {
    setTimeout(() => {
      setDepartmentPerformance([
        { name: "Roads & Infra", activeIssues: 23, resolvedThisMonth: 45, avgResolutionTime: 3.2 },
        { name: "Sanitation", activeIssues: 10, resolvedThisMonth: 30, avgResolutionTime: 2.5 },
        { name: "Water Supply", activeIssues: 18, resolvedThisMonth: 20, avgResolutionTime: 4.1 },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const getPerformanceStatus = (avgTime) => {
    if (avgTime <= 2) return { status: "Excellent", color: "success" };
    if (avgTime <= 3) return { status: "Good", color: "primary" };
    if (avgTime <= 4) return { status: "Fair", color: "warning" };
    return { status: "Needs Improvement", color: "danger" };
  };

  if (loading) {
    return (
      <div className="row">
        {[...Array(5)].map((_, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <div className="card p-3">
              <div className="placeholder-glow">
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8 mt-2"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="row">
      {departmentPerformance.map((dept, index) => {
        const performance = getPerformanceStatus(dept.avgResolutionTime);
        return (
          <div className="col-md-3 mb-3" key={index}>
            <div className="card shadow-sm h-100">
              <div className="card-header d-flex align-items-center">
                <Building2 className="me-2 text-primary" />
                <h6 className="mb-0">{dept.name}</h6>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h4 className="mb-0">{dept.activeIssues}</h4>
                  <span className={`badge bg-${performance.color}`}>{performance.status}</span>
                </div>
                <ul className="list-unstyled small text-muted mb-3">
                  <li>Active Issues: <b>{dept.activeIssues}</b></li>
                  <li>Resolved This Month: <b className="text-success">{dept.resolvedThisMonth}</b></li>
                  <li>Avg Resolution: <b className={`text-${performance.color}`}>{dept.avgResolutionTime}d</b></li>
                </ul>
                <button className="btn btn-outline-primary btn-sm w-100">View Details</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
