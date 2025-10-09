import React from "react";
import { ImageIcon, Volume2, Play, Download } from "lucide-react";

export function ComplaintMedia({ media }) {
  if (!media || media.length === 0) {
    return null;
  }

  return (
    <div className="card">
      <div className="card-header d-flex align-items-center">
        <ImageIcon size={20} className="me-2" />
        <h5 className="mb-0">Media & Evidence</h5>
      </div>
      <div className="card-body">
        {media.map((item, index) => (
          <div key={index} className="border rounded p-3 mb-3">
            {/* IMAGE */}
            {item.type === "image" && (
              <>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="badge bg-secondary d-flex align-items-center">
                    <ImageIcon size={14} className="me-1" />
                    Photo
                  </span>
                  <button className="btn btn-sm btn-light">
                    <Download size={16} />
                  </button>
                </div>
                <img
                  src={item.url || "/placeholder.svg"}
                  alt={item.caption || "Complaint evidence"}
                  className="img-fluid rounded mb-2"
                  style={{ maxHeight: "200px", objectFit: "cover", width: "100%" }}
                />
                {item.caption && (
                  <p className="text-muted small">{item.caption}</p>
                )}
              </>
            )}

            {/* AUDIO */}
            {item.type === "audio" && (
              <>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="badge bg-secondary d-flex align-items-center">
                    <Volume2 size={14} className="me-1" />
                    Audio {item.duration && `(${item.duration})`}
                  </span>
                  <div>
                    <button className="btn btn-sm btn-light me-2">
                      <Play size={16} />
                    </button>
                    <button className="btn btn-sm btn-light">
                      <Download size={16} />
                    </button>
                  </div>
                </div>
                <div className="bg-light p-3 rounded">
                  <h6 className="small mb-2">Audio Transcription:</h6>
                  <p className="text-muted fst-italic small">
                    "{item.transcription || "No transcription available"}"
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
