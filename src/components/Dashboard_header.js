import React, { useState } from "react";
import { Navbar, Form, FormControl, Button, Dropdown, Badge } from "react-bootstrap";
import { Search, Bell, User } from "lucide-react";
import { Link } from "react-router-dom";

// Mock hook replacement (replace with your own data hook)
const useDashboardData = () => {
  return {
    recentAlerts: [
      {
        id: 1,
        title: "Water leakage reported",
        location: { address: "Main Street 42" },
        createdAt: new Date(),
      },
      {
        id: 2,
        title: "Garbage not collected",
        location: { address: "Park Avenue 12" },
        createdAt: new Date(),
      },
    ],
  };
};

export default function DashboardHeader() {
  const [searchQuery, setSearchQuery] = useState("");
  const { recentAlerts } = useDashboardData();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/issues?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <Navbar bg="light" expand="lg" className="px-3 border-bottom shadow-sm">
      {/* Search Bar */}
      <Form className="d-flex flex-grow-1 me-auto" onSubmit={handleSearch}>
        <div className="position-relative w-100" style={{ maxWidth: "400px" }}>
          <Search
            size={16}
            className="position-absolute"
            style={{ top: "50%", left: "10px", transform: "translateY(-50%)", color: "#6c757d" }}
          />
          <FormControl
            type="search"
            placeholder="Search by complaint ID, location, tags, reporter..."
            className="ps-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </Form>

      {/* Right Side - Notifications + Profile */}
      <div className="d-flex align-items-center ms-3">
        {/* Notifications */}
        <Dropdown align="end" className="me-3">
          <Dropdown.Toggle variant="light" className="position-relative">
            <Bell size={18} />
            <Badge
              bg="danger"
              pill
              className="position-absolute top-0 start-100 translate-middle"
              style={{ fontSize: "0.7rem" }}
            >
              {recentAlerts.length}
            </Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ width: "300px" }}>
            <Dropdown.Header>Notifications</Dropdown.Header>
            {recentAlerts.slice(0, 3).map((alert) => (
              <Dropdown.Item as={Link} to={`/issues/${alert.id}`} key={alert.id}>
                <div>
                  <p className="mb-0 fw-semibold">{alert.title}</p>
                  <small className="text-muted">
                    {alert.location.address} – {alert.createdAt.toLocaleTimeString()}
                  </small>
                </div>
              </Dropdown.Item>
            ))}
            <Dropdown.Divider />
            <Dropdown.Item as={Link} to="/issues" className="text-center">
              View all notifications
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Profile */}
        <Dropdown align="end">
          <Dropdown.Toggle variant="light" className="d-flex align-items-center">
            <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: "32px", height: "32px" }}>
              <User size={16} />
            </div>
            <span className="d-none d-md-inline">Admin User</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Header>My Account</Dropdown.Header>
            <Dropdown.Item>Profile Settings</Dropdown.Item>
            <Dropdown.Item>Preferences</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Navbar>
  );
}
