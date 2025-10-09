import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import {
  LayoutDashboard,
  AlertTriangle,
  Map,
  Building2,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Issues / Complaints", href: "/issues", icon: AlertTriangle },
  { name: "Map View", href: "/map", icon: Map },
  { name: "Departments", href: "/departments", icon: Building2 },
  { name: "Analytics & Reports", href: "/analytics", icon: BarChart3 },
  { name: "Settings / Alerts", href: "/settings", icon: Settings },
];

export default function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`d-flex flex-column bg-light border-end transition-all`}
      style={{ width: collapsed ? "70px" : "250px", height: "100vh" }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center border-bottom p-2">
        {!collapsed && (
          <div className="d-flex align-items-center">
            <div className="bg-primary text-white rounded p-2 me-2 d-flex align-items-center justify-content-center">
              <Building2 size={20} />
            </div>
            <div>
              <h6 className="mb-0">Municipal</h6>
              <small className="text-muted">Dashboard</small>
            </div>
          </div>
        )}
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Navigation */}
      <Nav className="flex-column p-2 overflow-auto">
        {navigation.map((item) => (
          <Nav.Item key={item.name}>
            <Link
              to={item.href}
              className={`nav-link d-flex align-items-center ${
                window.location.pathname === item.href ? "active bg-primary text-white" : ""
              }`}
            >
              <item.icon size={18} className={collapsed ? "mx-auto" : "me-2"} />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
}
