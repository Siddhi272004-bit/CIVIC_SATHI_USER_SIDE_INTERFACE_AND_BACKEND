"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "/components/ui/badge"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Icon } from "leaflet"
import { Navigation } from "lucide-react"

// Sample user data with lat/lng
const mapIssues = [
  { id: 1, type: "pothole", status: "open", location: "Main St & 1st Ave", priority: "high", lat: 40.7128, lng: -74.0060 },
  { id: 2, type: "garbage", status: "assigned", location: "Park Avenue", priority: "medium", lat: 40.7138, lng: -74.0010 },
  { id: 3, type: "streetlight", status: "resolved", location: "Oak Street", priority: "low", lat: 40.7100, lng: -74.0090 },
]

const getStatusColor = (status) => {
  switch (status) {
    case "open":
      return "red"
    case "assigned":
      return "orange"
    case "resolved":
      return "green"
    default:
      return "gray"
  }
}

const getStatusBadge = (status) => {
  switch (status) {
    case "open":
      return "destructive"
    case "assigned":
      return "secondary"
    case "resolved":
      return "outline"
    default:
      return "outline"
  }
}

// Leaflet custom marker icon
const getMarkerIcon = (color) =>
  new Icon({
    iconUrl: `https://chart.googleapis.com/chart?chst=d_map_pin_icon&chld=pin|${color}`,
    iconSize: [30, 50],
    iconAnchor: [15, 45],
  })

export function DashboardMapView() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Navigation className="h-5 w-5" />
          <span>Live Map View</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Interactive map */}
        <MapContainer
          center={[40.7128, -74.0060]} // Default to NYC for demo
          zoom={13}
          scrollWheelZoom={false}
          className="h-64 w-full rounded-lg z-0"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {mapIssues.map((issue) => (
            <Marker
              key={issue.id}
              position={[issue.lat, issue.lng]}
              icon={getMarkerIcon(getStatusColor(issue.status))}
            >
              <Popup>
                <div className="text-sm">
                  <p className="font-medium capitalize">{issue.type}</p>
                  <p className="text-xs text-muted-foreground">{issue.location}</p>
                  <Badge variant={getStatusBadge(issue.status)} className="text-xs mt-1">
                    {issue.status}
                  </Badge>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Recent issues list */}
        <div className="space-y-3 mt-4">
          <h4 className="text-sm font-medium">Recent Issues</h4>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {mapIssues.slice(0, 3).map((issue) => (
              <div key={issue.id} className="flex items-center justify-between text-sm">
                <span className="capitalize">
                  {issue.type} <span className="text-muted-foreground">at {issue.location}</span>
                </span>
                <Badge variant={getStatusBadge(issue.status)} className="text-xs">
                  {issue.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

