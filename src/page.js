import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardSidebar from "./components/DashboardSidebar";
import DashboardHeader from "./components/DashboardHeader";

export default function DashboardLayout() {
  return (
    <div className="d-flex vh-100 bg-light">
      <DashboardSidebar />
      <div className="flex-grow-1 d-flex flex-column overflow-auto">
        <DashboardHeader />
        <main className="flex-grow-1 p-4">
          <div className="container-fluid">
            <h1 className="h3 mb-3">Municipal Dashboard</h1>
            <p className="text-muted">Track citizen complaints</p>

            {/* Example Bootstrap Card */}
            <div className="row g-3">
              <div className="col-md-4">
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title">Total Issues</h5>
                    <p className="card-text">12</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title">Open Issues</h5>
                    <p className="card-text">3</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="row g-3 mt-3">
              <div className="col-lg-8">
                <div className="card">
                  <div className="card-body">Map View Here</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">Top Categories</div>
                </div>
              </div>
            </div>

            {/* Alerts */}
            <div className="mt-4">
              <div className="card">
                <div className="card-body">Recent Alerts</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
