// src/components/ExportReports.js
import React, { useState } from "react";
import { Card, Button, Form, Dropdown } from "react-bootstrap";
import { Download, Calendar, FileText, FileSpreadsheet } from "react-bootstrap-icons";

export default function ExportReports() {
  const reportTypes = [
    { value: "summary", label: "Monthly Summary Report" },
    { value: "department", label: "Department Performance Report" },
    { value: "category", label: "Issues by Category Report" },
    { value: "resolution", label: "Resolution Time Analysis" },
    { value: "hotspots", label: "Geographic Hotspots Report" },
    { value: "trends", label: "Trend Analysis Report" },
  ];

  const timeRanges = [
    { value: "last-week", label: "Last Week" },
    { value: "last-month", label: "Last Month" },
    { value: "last-quarter", label: "Last Quarter" },
    { value: "last-year", label: "Last Year" },
    { value: "custom", label: "Custom Range" },
  ];

  const formats = [
    { value: "pdf", label: "PDF", icon: FileText },
    { value: "csv", label: "CSV", icon: FileSpreadsheet },
    { value: "excel", label: "Excel", icon: FileSpreadsheet },
  ];

  const [selectedReport, setSelectedReport] = useState("");
  const [selectedTimeRange, setSelectedTimeRange] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("");

  const handleExport = (report = selectedReport, range = selectedTimeRange, format = selectedFormat) => {
    if (!report || !range || !format) {
      alert("Please select report type, time range, and format");
      return;
    }
    alert(`Exporting ${report} (${range}) as ${format.toUpperCase()}`);
    console.log("Exporting report:", { report, range, format });
  };

  return (
    <Card className="p-3 mb-3">
      <h5 className="mb-3"><Download /> Export Reports</h5>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Report Type</Form.Label>
          <Form.Select value={selectedReport} onChange={(e) => setSelectedReport(e.target.value)}>
            <option value="">Select report type</option>
            {reportTypes.map((r) => (
              <option key={r.value} value={r.value}>{r.label}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Time Range</Form.Label>
          <Form.Select value={selectedTimeRange} onChange={(e) => setSelectedTimeRange(e.target.value)}>
            <option value="">Select time range</option>
            {timeRanges.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Export Format</Form.Label>
          <Form.Select value={selectedFormat} onChange={(e) => setSelectedFormat(e.target.value)}>
            <option value="">Select format</option>
            {formats.map((f) => (
              <option key={f.value} value={f.value}>{f.label}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button
          onClick={() => handleExport()}
          disabled={!selectedReport || !selectedTimeRange || !selectedFormat}
        >
          <Download className="me-2" />
          Generate Report
        </Button>
      </Form>

      <hr />

      <h6>Quick Exports</h6>
      <Button variant="outline-primary" className="mb-2 w-100 text-start" onClick={() => handleExport("summary","last-month","pdf")}>
        <Calendar className="me-2" /> This Month's Summary (PDF)
      </Button>
      <Button variant="outline-primary" className="mb-2 w-100 text-start" onClick={() => handleExport("category","last-year","csv")}>
        <FileSpreadsheet className="me-2" /> All Issues Data (CSV)
      </Button>
      <Button variant="outline-primary" className="mb-2 w-100 text-start" onClick={() => handleExport("department","last-quarter","pdf")}>
        <FileText className="me-2" /> Department Performance (PDF)
      </Button>
    </Card>
  );
}
