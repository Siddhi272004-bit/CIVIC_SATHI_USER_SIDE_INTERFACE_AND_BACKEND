import React from "react";
import { Card } from "react-bootstrap";
import {
  Construction,
  Trash2,
  Lightbulb,
  Car,
  TreePine,
  Droplets,
} from "lucide-react";
import { useDashboardData } from "@/hooks/use-dashboard-data";

const categoryIcons = {
  Pothole: Construction,
  Garbage: Trash2,
  Streetlight: Lightbulb,
  Water: Droplets,
  Noise: Car,
  Other: TreePine,
};

const categoryColors = {
  Pothole: "text-danger",
  Garbage: "text-warning",
  Streetlight: "text-warning",
  Water: "text-info",
  Noise: "text-primary",
  Other: "text-success",
};

export default function DashboardCategories() {
  const { categoryStats, loading } = useDashboardData();

  if (loading) {
    return (
      <Card className="mb-3 shadow-sm">
        <Card.Header>
          <h6 className="mb-0">Top Issue Categories</h6>
        </Card.Header>
        <Card.Body>
          {[...Array(6)].map((_, index) => (
            <div key={index} className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <div className="placeholder-glow w-25">
                  <span className="placeholder col-6"></span>
                </div>
                <div className="placeholder-glow w-25 text-end">
                  <span className="placeholder col-4"></span>
                </div>
              </div>
              <div className="placeholder-glow">
                <span className="placeholder col-12" style={{ height: "8px" }}></span>
              </div>
            </div>
          ))}
        </Card.Body>
      </Card>
    );
  }

  const totalCount = categoryStats.reduce((sum, cat) => sum + cat.count, 0);
  const sortedCategories = categoryStats
    .map((cat) => ({
      ...cat,
      percentage: totalCount > 0 ? Math.round((cat.count / totalCount) * 100) : 0,
      icon: categoryIcons[cat.name] || TreePine,
      color: categoryColors[cat.name] || "text-secondary",
    }))
    .sort((a, b) => b.count - a.count);

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Header>
        <h6 className="mb-0">Top Issue Categories</h6>
      </Card.Header>
      <Card.Body>
        {sortedCategories.map((category, index) => (
          <div key={index} className="mb-3">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <div className="d-flex align-items-center">
                <category.icon size={16} className={`${category.color} me-2`} />
                <span className="fw-medium">{category.name}</span>
              </div>
              <div className="text-end">
                <strong>{category.count}</strong>
                <small className="text-muted ms-1">
                  ({category.percentage}%)
                </small>
              </div>
            </div>
            <div className="progress" style={{ height: "6px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${category.percentage}%` }}
                aria-valuenow={category.percentage}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}
