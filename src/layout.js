import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "./globals.css"; // Any custom CSS

export default function RootLayout({ children }) {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* You can add a Sidebar component here if needed */}
      <div className="flex-grow-1">
        {children}
      </div>
    </div>
  );
}
