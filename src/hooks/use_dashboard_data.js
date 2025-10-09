import { useState, useEffect } from "react";
import { getDashboardStats, getCategoryStats, getRecentAlerts, mockComplaints } from "../lib/data";

const monthlyTrends = [
  { month: "Jan", reported: 45, resolved: 38 },
  { month: "Feb", reported: 52, resolved: 41 },
  { month: "Mar", reported: 38, resolved: 35 },
  { month: "Apr", reported: 61, resolved: 48 },
  { month: "May", reported: 55, resolved: 52 },
  { month: "Jun", reported: 67, resolved: 58 },
];

const departmentPerformance = [
  { name: "Public Works", avgResolutionTime: 3.2, activeIssues: 12, resolvedThisMonth: 28 },
  { name: "Sanitation", avgResolutionTime: 1.8, activeIssues: 8, resolvedThisMonth: 35 },
  { name: "Electrical", avgResolutionTime: 2.5, activeIssues: 5, resolvedThisMonth: 18 },
  { name: "Water Dept", avgResolutionTime: 4.1, activeIssues: 7, resolvedThisMonth: 15 },
  { name: "Parks & Rec", avgResolutionTime: 2.9, activeIssues: 4, resolvedThisMonth: 12 },
];

export function useDashboardData() {
  const [stats, setStats] = useState(getDashboardStats());
  const [categoryStats, setCategoryStats] = useState(getCategoryStats());
  const [recentAlerts, setRecentAlerts] = useState(getRecentAlerts());
  const [complaints, setComplaints] = useState(mockComplaints); // removed TypeScript type
  const [loading, setLoading] = useState(false);

  const refreshData = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setStats(getDashboardStats());
      setCategoryStats(getCategoryStats());
      setRecentAlerts(getRecentAlerts());
      setComplaints(mockComplaints);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    refreshData();
  }, []);

  return {
    stats,
    categoryStats,
    recentAlerts,
    complaints,
    monthlyTrends,
    departmentPerformance,
    loading,
    refreshData,
  };
}
