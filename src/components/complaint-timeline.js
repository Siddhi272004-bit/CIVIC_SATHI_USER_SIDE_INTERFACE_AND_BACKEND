import React from "react";
import { Clock, CheckCircle, AlertTriangle, User, Building2 } from "lucide-react";

// Helper: pick icon by status
const getStatusIcon = (status) => {
  switch (status) {
    case "reported":
      return <AlertTriangle size={16} className="text-warning" />;
    case "acknowledged":
      return <CheckCircle size={16} className="text-primary" />;
    case "assigned":
      return <Building2 size={16} className="text-purple" />;
    case "in-progress":
      return <Clock size={16} className="text-warning" />;
    case "resolved":
      return <CheckCircle size={16} className="text-success" />;
    default:
      return <Clock size={16} className="text-muted" />;
  }
};

export function ComplaintTimeline({ timeline }) {
  if (!timeline || timeline.length === 0) {
    return null;
  }

  return (
    <div className="card">
      <div className="card-header d-flex align-items-center">
        <Clock size={20} className="me-2" />
        <h5 className="mb-0">Timeline</h5>
      </div>
      <div className="card-body">
        {timeline.map((item, index) => (
          <div key={item.id} className="d-flex mb-4">
            {/* Timeline left column (icon + connector) */}
            <div className="d-flex flex-column align-items-center me-3">
              <div className="d-flex align-items-center justify-content-center rounded-circle bg-light border" style={{ width: "32px", height: "32px" }}>
                {getStatusIcon(item.status)}
              </div>
              {index < timeline.length - 1 && (
                <div className="flex-grow-1" style={{ width: "2px", backgroundColor: "#dee2e6", minHeight: "20px" }}></div>
              )}
            </div>

            {/* Timeline content */}
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <h6 className="mb-0">{item.action}</h6>
                <span className="badge bg-light text-dark text-capitalize">
                  {item.status}
                </span>
              </div>
              <p className="text-muted small mb-2">{item.description}</p>
              <div className="d-flex flex-wrap gap-3 small text-muted">
                <div className="d-flex align-items-center">
                  <User size={12} className="me-1" />
                  <span>{item.user}</span>
                </div>
                <div className="d-flex align-items-center">
                  <Clock size={12} className="me-1" />
                  <span>
                    {new Date(item.timestamp).toLocaleDateString()} at{" "}
                    {new Date(item.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
