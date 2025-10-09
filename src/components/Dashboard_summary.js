// src/components/DashboardSummaryCards.js
import React from "react";
import { Card, Badge, Row, Col } from "react-bootstrap";
import { ArrowUp, ArrowDown, Clock, ExclamationTriangle, CheckCircle } from "react-bootstrap-icons";
import { useDashboardData } from "../hooks/use-dashboard-data";

export function DashboardSummaryCards() {
  const { stats, loading } = useDashboardData();

  const summaryData = [
    {
      title: "Total Issues Reported",
      value: loading ? "..." : stats.totalComplaints,
      change: "+12%",
      changeType: "increase",
      description: "from last month",
      icon: <ExclamationTriangle className="me-2" />,
      color: "primary",
    },
    {
      title: "Open Issues",
      value: loading ? "..." : stats.openComplaints,
      change: `+${stats.openComplaints}`,
      changeType: "increase",
      description: "requires attention",
      icon: <ExclamationTriangle className="me-2" />,
      color: "danger",
    },
    {
      title: "Resolved Issues",
      value: loading ? "..." : stats.resolvedComplaints,
      change: `${Math.round((stats.resolvedComplaints / stats.totalComplaints) * 100)}%`,
      changeType: "neutral",
      description: "resolution rate",
      icon: <CheckCircle className="me-2" />,
      color: "success",
    },
    {
      title: "Avg. Response Time",
      value: loading ? "..." : `${stats.avgResolutionTime}d`,
      change: "-15min",
      changeType: "decrease",
      description: "from last week",
      icon: <Clock className="me-2" />,
      color: "info",
    },
  ];

  return (
    <Row className="g-3">
      {summaryData.map((item, index) => (
        <Col xs={12} md={6} lg={3} key={index}>
          <Card className="h-100">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="mb-0 text-muted">{item.title}</h6>
                <span>{item.icon}</span>
              </div>
              <h3 className="fw-bold mb-2">{item.value}</h3>
              <div className="d-flex align-items-center">
                <Badge
                  bg={
                    item.changeType === "increase"
                      ? "danger"
                      : item.changeType === "decrease"
                      ? "secondary"
                      : "light"
                  }
                  className="me-2"
                >
                  {item.changeType === "increase" && <ArrowUp className="me-1" />}
                  {item.changeType === "decrease" && <ArrowDown className="me-1" />}
                  {item.change}
                </Badge>
                <small className="text-muted">{item.description}</small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
