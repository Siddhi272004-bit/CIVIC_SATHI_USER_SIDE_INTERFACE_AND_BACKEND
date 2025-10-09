"use client"

import { useState } from "react"

// Mock data
export const mockComplaints = [
  {
    id: "1",
    title: "Large pothole on Main Street",
    description: "There is a large pothole causing damage to vehicles near the intersection of Main St and Oak Ave.",
    category: "pothole",
    status: "open",
    priority: "high",
    location: { address: "123 Main Street, Downtown", coordinates: [40.7128, -74.006] },
    reporter: { name: "John Smith", email: "john.smith@email.com", phone: "(555) 123-4567" },
    department: "Public Works",
    createdAt: new Date("2024-01-15T10:30:00"),
    updatedAt: new Date("2024-01-15T10:30:00"),
    media: [{ type: "image", url: "/street-pothole.png" }],
    timeline: [{ id: "1", action: "Created", description: "Complaint submitted by citizen", user: "John Smith", timestamp: new Date("2024-01-15T10:30:00") }],
  },
  {
    id: "2",
    title: "Overflowing garbage bin",
    description: "Garbage bin at Central Park entrance is overflowing and attracting pests.",
    category: "garbage",
    status: "in-progress",
    priority: "medium",
    location: { address: "Central Park Entrance, Park Ave", coordinates: [40.7589, -73.9851] },
    reporter: { name: "Sarah Johnson", email: "sarah.j@email.com" },
    assignedTo: "Mike Wilson",
    department: "Sanitation",
    createdAt: new Date("2024-01-14T14:20:00"),
    updatedAt: new Date("2024-01-15T09:15:00"),
    timeline: [
      { id: "1", action: "Created", description: "Complaint submitted by citizen", user: "Sarah Johnson", timestamp: new Date("2024-01-14T14:20:00") },
      { id: "2", action: "Assigned", description: "Assigned to Mike Wilson from Sanitation Department", user: "Admin", timestamp: new Date("2024-01-15T09:15:00") },
    ],
  },
]

// Dashboard stats helper
export function getDashboardStats() {
  const total = mockComplaints.length
  const open = mockComplaints.filter(c => c.status === "open").length
  const inProgress = mockComplaints.filter(c => c.status === "in-progress").length
  const resolved = mockComplaints.filter(c => c.status === "resolved").length
  const critical = mockComplaints.filter(c => c.priority === "critical").length

  const resolvedComplaints = mockComplaints.filter(c => c.resolvedAt)
  const avgResolutionTime =
    resolvedComplaints.length > 0
      ? resolvedComplaints.reduce((acc, c) => acc + (c.resolvedAt - c.createdAt) / (1000 * 60 * 60 * 24), 0) / resolvedComplaints.length
      : 0

  return {
    totalComplaints: total,
    openComplaints: open,
    inProgressComplaints: inProgress,
    resolvedComplaints: resolved,
    avgResolutionTime: Math.round(avgResolutionTime * 10) / 10,
    criticalIssues: critical,
  }
}

// Custom hook for complaints
export function useComplaints() {
  const [complaints, setComplaints] = useState(mockComplaints)
  const [loading, setLoading] = useState(false)

  const updateComplaint = (id, updates) => {
    setComplaints(prev =>
      prev.map(c => (c.id === id ? { ...c, ...updates, updatedAt: new Date() } : c))
    )
  }

  const addComplaint = complaint => {
    const newComplaint = {
      ...complaint,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
      timeline: [{ id: "1", action: "Created", description: "Complaint submitted", user: complaint.reporter.name, timestamp: new Date() }],
    }
    setComplaints(prev => [newComplaint, ...prev])
  }

  const deleteComplaint = id => {
    setComplaints(prev => prev.filter(c => c.id !== id))
  }

  return { complaints, loading, updateComplaint, addComplaint, deleteComplaint }
}
