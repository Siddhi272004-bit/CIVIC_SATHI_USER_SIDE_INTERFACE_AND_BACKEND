import React from "react";
import { Card, Badge, Button, Spinner } from "react-bootstrap";
import { AlertTriangle, Clock, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useDashboardData } from "../hooks/use-dashboard-data";

const getPriorityColor = (priority) => {
  switch (priority) {
    case "critical":
    case "high":
      return "danger";
    case "medium":
      return "secondary";
    case "low":
    default:
      return "light";
  }
};

const formatTimeAgo = (date) => {
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));

  if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  } else if (diffInMinutes < 1440) {
    const hours = Math.floor(diffInMinutes / 60);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else {
    const days = Math.floor(diffInMinutes / 1440);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }
};

export default function DashboardAlerts() {
  const { recentAlerts, loading } = useDashboardData();

  if (loading) {
    return (
      <Card className="shadow-sm mb-3">
        <Card.Header className="d-flex align-items-center">
          <AlertTriangle size={18} className="text-danger me-2" />
          <strong>Recent Critical Alerts</strong>
        </Card.Header>
        <Card.Body>
          {[...Array(4)].map((_, index) => (
            <div key={index} className="border rounded p-3 mb-3">
              <div className="placeholder-glow">
                <span className="placeholder col-7 mb-2"></span>
                <span className="placeholder col-12 mb-2"></span>
                <span className="placeholder col-6"></span>
              </div>
            </div>
          ))}
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="shadow-sm mb-3">
      <Card.Header className="d-flex align-items-center">
        <AlertTriangle size={18} className="text-danger me-2" />
        <strong>Recent Critical Alerts</strong>
      </Card.Header>
      <Card.Body>
        {recentAlerts.map((alert) => (
          <div key={alert.id} className="border rounded p-3 mb-3">
            <div className="d-flex justify-content-between align-items-start">
              <div className="flex-grow-1 me-2">
                <div className="d-flex align-items-center mb-1">
                  <h6 className="mb-0 me-2">{alert.title}</h6>
                  <Badge bg={getPriorityColor(alert.priority)}>{alert.priority}</Badge>
                </div>
                <p className="text-muted small mb-2">{alert.description}</p>
                <div className="d-flex text-muted small">
                  <div className="d-flex align-items-center me-3">
                    <MapPin size={12} className="me-1" />
                    {alert.location.address}
                  </div>
                  <div className="d-flex align-items-center">
                    <Clock size={12} className="me-1" />
                    {formatTimeAgo(alert.createdAt)}
                  </div>
                </div>
              </div>
              <Link to={`/issues/${alert.id}`}>
                <Button variant="light" size="sm" className="p-1">
                  <ExternalLink size={14} />
                </Button>
              </Link>
            </div>
          </div>
        ))}
        <Link to="/issues">
          <Button variant="outline-secondary" size="sm" className="w-100">
            View All Alerts
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
