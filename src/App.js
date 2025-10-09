// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard_header";
import Issues from "./components/issues-filters";

// Placeholder pages for unmatched routes
function MapPage() {
  return <div className="p-3">Map Page</div>;
}
function DepartmentsPage() {
  return <div className="p-3">Departments Page</div>;
}
function AnalyticsPage() {
  return <div className="p-3">Analytics Page</div>;
}
function SettingsPage() {
  return <div className="p-3">Settings Page</div>;
}
function NotFoundPage() {
  return <div className="p-3">404 - Page Not Found</div>;
}

function App() {
  return (
    <Router>
      <div className="d-flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-grow-1 bg-light" style={{ minHeight: "100vh" }}>
          <div className="p-3">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/issues" element={<Issues />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/departments" element={<DepartmentsPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
