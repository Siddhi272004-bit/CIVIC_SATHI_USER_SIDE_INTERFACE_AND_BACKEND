import React from "react";
import Sidebar from "./Sidebar";
import DashboardHeader from "./Dashboard_header";
import IssuesTable from "./IssuesTable";
import IssuesFilters from "./IssuesFilters";

export default function IssuesPage() {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* Header */}
        <DashboardHeader />

        {/* Page Body */}
        <main className="flex-grow-1 p-4 bg-light overflow-auto">
          <div className="container">
            {/* Page Title */}
            <div className="mb-4">
              <h1 className="h3 mb-1">Issues & Complaints</h1>
              <p className="text-muted">Manage and track all citizen complaints and issues</p>
            </div>

            {/* Filters */}
            <div className="mb-3">
              <IssuesFilters />
            </div>

            {/* Issues Table */}
            <div>
              <IssuesTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
