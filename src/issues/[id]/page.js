import React from "react";
import Sidebar from "./Sidebar";
import DashboardHeader from "./Dashboard_header";
import ComplaintDetailView from "./ComplaintDetailView"; // Your detail component

// React Router will pass params via useParams
import { useParams } from "react-router-dom";

export default function ComplaintDetailPage() {
  const { id } = useParams(); // Get complaint ID from URL

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar />

      <div className="flex-grow-1 d-flex flex-column">
        <DashboardHeader />

        <main className="flex-grow-1 p-4 bg-light overflow-auto">
          <div className="container">
            <ComplaintDetailView complaintId={id} />
          </div>
        </main>
      </div>
    </div>
  );
}
