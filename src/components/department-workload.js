import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  BarChartFill,
  GraphUp,
  People,
  ExclamationTriangle,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const workloadData = [
  { department: "Roads", active: 12, capacity: 20, utilization: 60 },
  { department: "Sanitation", active: 18, capacity: 25, utilization: 72 },
  { department: "Utilities", active: 8, capacity: 15, utilization: 53 },
  { department: "Traffic", active: 15, capacity: 18, utilization: 83 },
  { department: "Parks", active: 6, capacity: 12, utilization: 50 },
];

const priorityDistribution = [
  { name: "Critical", value: 8, color: "#ef4444" },
  { name: "High", value: 23, color: "#f97316" },
  { name: "Medium", value: 35, color: "#eab308" },
  { name: "Low", value: 19, color: "#22c55e" },
];

const getUtilizationStatus = (utilization) => {
  if (utilization >= 80) return { text: "Overloaded", className: "bg-danger" };
  if (utilization >= 60) return { text: "High Load", className: "bg-warning text-dark" };
  return { text: "Normal", className: "bg-secondary" };
};

export default function DepartmentWorkload() {
  return (
    <div className="row g-4">
      {/* Workload Distribution */}
      <div className="col-lg-8">
        <div className="card shadow-sm">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0 d-flex align-items-center">
              <BarChartFill className="me-2" /> Department Workload Distribution
            </h5>
            <button className="btn btn-outline-primary btn-sm">
              <GraphUp className="me-1" /> Rebalance
            </button>
          </div>
          <div className="card-body">
            {/* Progress Bars */}
            <div className="mb-4">
              {workloadData.map((dept, i) => {
                const status = getUtilizationStatus(dept.utilization);
                return (
                  <div key={i} className="mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <div>
                        <strong className="me-2">{dept.department}</strong>
                        <span className={`badge ${status.className}`}>
                          {status.text}
                        </span>
                      </div>
                      <small className="text-muted">
                        {dept.active}/{dept.capacity} ({dept.utilization}%)
                      </small>
                    </div>
                    <div className="progress" style={{ height: "6px" }}>
                      <div
                        className={`progress-bar ${status.className}`}
                        role="progressbar"
                        style={{ width: `${dept.utilization}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bar Chart */}
            <div style={{ height: "260px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={workloadData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="department" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="active" fill="#0d6efd" name="Active Issues" />
                  <Bar dataKey="capacity" fill="#dee2e6" name="Capacity" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Priority Distribution */}
      <div className="col-lg-4">
        <div className="card shadow-sm">
          <div className="card-header">
            <h5 className="mb-0 d-flex align-items-center">
              <ExclamationTriangle className="me-2" /> Priority Distribution
            </h5>
          </div>
          <div className="card-body">
            <div style={{ height: "200px" }} className="mb-3">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={priorityDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {priorityDistribution.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <ul className="list-unstyled small">
              {priorityDistribution.map((item, i) => (
                <li
                  key={i}
                  className="d-flex justify-content-between align-items-center mb-1"
                >
                  <span className="d-flex align-items-center">
                    <span
                      className="rounded-circle me-2"
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: item.color,
                        display: "inline-block",
                      }}
                    />
                    {item.name}
                  </span>
                  <strong>{item.value}</strong>
                </li>
              ))}
            </ul>

            {/* Total */}
            <div className="bg-light rounded p-2 mt-3">
              <div className="d-flex align-items-center mb-1">
                <People className="me-2 text-muted" size={16} />
                <span className="fw-medium">Total Active Issues</span>
              </div>
              <h4 className="fw-bold mb-0">
                {priorityDistribution.reduce((sum, item) => sum + item.value, 0)}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
