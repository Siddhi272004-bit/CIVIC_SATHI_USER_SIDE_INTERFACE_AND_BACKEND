import React from "react";
import { CheckCircle, X, Edit, MessageSquare, Share, Flag } from "lucide-react";

export function ComplaintActions() {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title mb-0">Actions</h5>
      </div>
      <div className="card-body d-grid gap-2">
        <button className="btn btn-success d-flex align-items-center justify-content-center">
          <CheckCircle size={16} className="me-2" />
          Mark as Resolved
        </button>

        <button className="btn btn-outline-primary d-flex align-items-center justify-content-center">
          <Edit size={16} className="me-2" />
          Edit Complaint
        </button>

        <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center">
          <MessageSquare size={16} className="me-2" />
          Add Comment
        </button>

        <button className="btn btn-outline-info d-flex align-items-center justify-content-center">
          <Share size={16} className="me-2" />
          Share with Team
        </button>

        <hr />

        <button className="btn btn-outline-warning text-warning d-flex align-items-center justify-content-center">
          <Flag size={16} className="me-2" />
          Escalate Issue
        </button>

        <button className="btn btn-outline-danger text-danger d-flex align-items-center justify-content-center">
          <X size={16} className="me-2" />
          Close Complaint
        </button>
      </div>
    </div>
  );
}
