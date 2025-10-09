import React from "react";
import Sidebar from "./Sidebar";
import DashboardHeader from "./Dashboard_header";
import ComplaintDetailView from "./ComplaintDetailView"; // Your detailed complaint component

export default function ComplaintDetailPage({ complaintId }) {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar />

      <div className="flex-grow-1 d-flex flex-column">
        <DashboardHeader />

        <main className="flex-grow-1 p-4 bg-light overflow-auto">
          <div className="container">
            <ComplaintDetailView complaintId={complaintId} />
          </div>
        </main>
      </div>
    </div>
  );
}
