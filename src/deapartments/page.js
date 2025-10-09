import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardHeader from "./Dashboard_header";

// Dummy data for demonstration
const dummyIssues = [
  {
    id: "001",
    category: "Potholes",
    location: "Street 12, City",
    date: "2025-09-17",
    status: "Open",
    priority: "High",
    department: "Roads & Infrastructure",
    reporter: "John Doe",
  },
  {
    id: "002",
    category: "Garbage",
    location: "Street 7, City",
    date: "2025-09-16",
    status: "In Progress",
    priority: "Medium",
    department: "Sanitation",
    reporter: "Jane Smith",
  },
];

export default function IssuesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredIssues = dummyIssues.filter((issue) => {
    return (
      (categoryFilter === "all" || issue.category === categoryFilter) &&
      (statusFilter === "all" || issue.status === statusFilter) &&
      (issue.id.includes(searchTerm) || issue.location.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar />

      <div className="flex-grow-1 d-flex flex-column">
        <DashboardHeader />

        <main className="flex-grow-1 p-4 bg-light">
          <div className="container-fluid">
            <h1 className="mb-2">Issues & Complaints</h1>
            <p className="text-muted mb-4">Manage and track all citizen complaints and issues</p>

            {/* Filters */}
            <div className="row mb-3">
              <div className="col-md-4 mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by ID or location"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="col-md-4 mb-2">
                <select
                  className="form-select"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="Potholes">Potholes</option>
                  <option value="Garbage">Garbage Collection</option>
                  <option value="Streetlights">Streetlights</option>
                </select>
              </div>
              <div className="col-md-4 mb-2">
                <select
                  className="form-select"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Statuses</option>
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
            </div>

            {/* Issues Table */}
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Department</th>
                    <th>Reporter</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredIssues.map((issue) => (
                    <tr key={issue.id}>
                      <td>{issue.id}</td>
                      <td>{issue.category}</td>
                      <td>{issue.location}</td>
                      <td>{issue.date}</td>
                      <td>{issue.status}</td>
                      <td>{issue.priority}</td>
                      <td>{issue.department}</td>
                      <td>{issue.reporter}</td>
                    </tr>
                  ))}
                  {filteredIssues.length === 0 && (
                    <tr>
                      <td colSpan="8" className="text-center">
                        No issues found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
