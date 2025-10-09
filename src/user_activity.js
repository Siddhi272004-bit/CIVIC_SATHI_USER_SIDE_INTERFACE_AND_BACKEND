<div className="card">
  <div className="card-header d-flex align-items-center">
    <Activity className="me-2" />
    <span>Recent User Activity</span>
  </div>
  <div className="card-body" style={{ maxHeight: "24rem", overflowY: "auto" }}>
    {activityData.map((activity) => (
      <div key={activity.id} className="d-flex mb-3">
        {/* Icon */}
        <div className="d-flex flex-column align-items-center me-3">
          <div className="bg-light rounded-circle d-flex justify-content-center align-items-center" style={{ width: "32px", height: "32px" }}>
            {getActivityIcon(activity.type)}
          </div>
          {/* Optional timeline line */}
        </div>

        {/* Activity Info */}
        <div className="flex-grow-1">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <div className="d-flex align-items-center">
              <div className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center me-2" style={{ width: "24px", height: "24px", fontSize: "0.75rem" }}>
                {activity.user.split(" ").map((n) => n[0]).join("")}
              </div>
              <span className="fw-bold">{activity.user}</span>
            </div>
            {getActivityBadge(activity.type)}
          </div>
          <h6>{activity.action}</h6>
          <p className="mb-1 text-muted">{activity.description}</p>
          {activity.details && <p className="mb-1 fst-italic text-muted">{activity.details}</p>}
          <small className="text-muted">
            {new Date(activity.timestamp).toLocaleDateString()} at {new Date(activity.timestamp).toLocaleTimeString()}
            {activity.ip && ` | IP: ${activity.ip}`}
          </small>
        </div>
      </div>
    ))}
  </div>
</div>
