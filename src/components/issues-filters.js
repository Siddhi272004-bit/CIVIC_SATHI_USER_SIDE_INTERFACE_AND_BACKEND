// "use client"

// import { useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// // import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"
// // import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// // import { Badge } from "@/components/ui/badge"
// import { Search, X } from "lucide-react"
// // import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// // import { Select } from "@/components/ui/select";
// import { Badge } from "@/components/ui/badge";


// const categories = [
//   { value: "all", label: "All Categories" },
//   { value: "pothole", label: "Potholes" },
//   { value: "garbage", label: "Garbage Collection" },
//   { value: "streetlight", label: "Streetlights" },
//   { value: "traffic", label: "Traffic Issues" },
//   { value: "parks", label: "Parks & Trees" },
//   { value: "water", label: "Water & Drainage" },
// ]

// const statuses = [
//   { value: "all", label: "All Statuses" },
//   { value: "open", label: "Open" },
//   { value: "assigned", label: "Assigned" },
//   { value: "in-progress", label: "In Progress" },
//   { value: "resolved", label: "Resolved" },
//   { value: "closed", label: "Closed" },
// ]

// const priorities = [
//   { value: "all", label: "All Priorities" },
//   { value: "critical", label: "Critical" },
//   { value: "high", label: "High" },
//   { value: "medium", label: "Medium" },
//   { value: "low", label: "Low" },
// ]

// const departments = [
//   { value: "all", label: "All Departments" },
//   { value: "roads", label: "Roads & Infrastructure" },
//   { value: "sanitation", label: "Sanitation" },
//   { value: "utilities", label: "Utilities" },
//   { value: "parks", label: "Parks & Recreation" },
//   { value: "traffic", label: "Traffic Management" },
// ]

// export function IssuesFilters() {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [selectedCategory, setSelectedCategory] = useState("all")
//   const [selectedStatus, setSelectedStatus] = useState("all")
//   const [selectedPriority, setSelectedPriority] = useState("all")
//   const [selectedDepartment, setSelectedDepartment] = useState("all")

//   const activeFilters = [
//     selectedCategory !== "all" && {
//       type: "category",
//       value: selectedCategory,
//       label: categories.find((c) => c.value === selectedCategory)?.label,
//     },
//     selectedStatus !== "all" && {
//       type: "status",
//       value: selectedStatus,
//       label: statuses.find((s) => s.value === selectedStatus)?.label,
//     },
//     selectedPriority !== "all" && {
//       type: "priority",
//       value: selectedPriority,
//       label: priorities.find((p) => p.value === selectedPriority)?.label,
//     },
//     selectedDepartment !== "all" && {
//       type: "department",
//       value: selectedDepartment,
//       label: departments.find((d) => d.value === selectedDepartment)?.label,
//     },
//   ].filter(Boolean)

//   const clearFilter = (type) => {
//     switch (type) {
//       case "category":
//         setSelectedCategory("all")
//         break
//       case "status":
//         setSelectedStatus("all")
//         break
//       case "priority":
//         setSelectedPriority("all")
//         break
//       case "department":
//         setSelectedDepartment("all")
//         break
//       default:
//         break
//     }
//   }

//   const clearAllFilters = () => {
//     setSearchTerm("")
//     setSelectedCategory("all")
//     setSelectedStatus("all")
//     setSelectedPriority("all")
//     setSelectedDepartment("all")
//   }

//   return (
//     <Card>
//       <CardContent className="p-6">
//         <div className="space-y-4">
//           {/* Search Bar */}
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
//             <Input
//               placeholder="Search by complaint ID, location, tags, reporter..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-10"
//             />
//           </div>

//           {/* Filter Controls */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//             <div className="space-y-2">
//               <Label>Category</Label>
//               <Select value={selectedCategory} onValueChange={setSelectedCategory}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {categories.map((category) => (
//                     <SelectItem key={category.value} value={category.value}>
//                       {category.label}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             <div className="space-y-2">
//               <Label>Status</Label>
//               <Select value={selectedStatus} onValueChange={setSelectedStatus}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select status" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {statuses.map((status) => (
//                     <SelectItem key={status.value} value={status.value}>
//                       {status.label}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             <div className="space-y-2">
//               <Label>Priority</Label>
//               <Select value={selectedPriority} onValueChange={setSelectedPriority}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select priority" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {priorities.map((priority) => (
//                     <SelectItem key={priority.value} value={priority.value}>
//                       {priority.label}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             <div className="space-y-2">
//               <Label>Department</Label>
//               <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select department" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {departments.map((department) => (
//                     <SelectItem key={department.value} value={department.value}>
//                       {department.label}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>

//           {/* Active Filters */}
//           {activeFilters.length > 0 && (
//             <div className="flex items-center space-x-2 flex-wrap">
//               <span className="text-sm text-muted-foreground">Active filters:</span>
//               {activeFilters.map((filter, index) => (
//                 <Badge key={index} variant="secondary" className="flex items-center space-x-1">
//                   <span>{filter.label}</span>
//                   <Button
//                     variant="ghost"
//                     size="sm"
//                     className="h-4 w-4 p-0 hover:bg-transparent"
//                     onClick={() => clearFilter(filter.type)}
//                   >
//                     <X className="h-3 w-3" />
//                   </Button>
//                 </Badge>
//               ))}
//               <Button variant="ghost" size="sm" onClick={clearAllFilters}>
//                 Clear all
//               </Button>
//             </div>
//           )}
//         </div>
//       </CardContent>
//     </Card>
//   )
// }


import { useState } from "react";

export default function IssuesFilters() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  return (
    <div className="container mt-4">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="pothole">Potholes</option>
          <option value="garbage">Garbage</option>
          <option value="streetlight">Streetlights</option>
        </select>
      </div>
      <button className="btn btn-primary">Apply Filters</button>
    </div>
  );
}

