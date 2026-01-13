import { NextResponse } from "next/server";

const DEPARTMENT_KEYWORDS: Record<string, string[]> = {
  'Pollution Control Board': ['pollution', 'smoke', 'emission', 'factory', 'industrial', 'air quality'],
  'Transport Department (RTO)': ['bus', 'auto', 'traffic', 'transport', 'vehicle', 'driving'],
  'Animal Control': ['animal', 'dog', 'stray', 'cow', 'monkey', 'bite'],
  'Public Works Department (PWD)': ['road', 'pothole', 'pavement', 'bridge', 'street'],
  'Water Supply': ['water', 'pipe', 'leak', 'sewage', 'drainage'],
  'Health & Sanitation': ['garbage', 'waste', 'cleanliness', 'hygiene', 'trash'],
  'Street Light Dept': ['street light', 'lamp', 'dark', 'lighting'],
  'Parks Dept': ['tree', 'park', 'garden', 'grass'],
  'Electricity Dept': ['power', 'electricity', 'wire', 'pole', 'current']
};

export async function POST(request: Request) {
  try {
    const { tags } = await request.json();
    if (!tags) return NextResponse.json({ error: "Tags required" }, { status: 400 });

    const generatedTags = tags.split(',').map((t: string) => t.trim().toLowerCase());
    let assignedDepartment = "General Grievance Cell";

    // Logic to match tags to departments
    outerLoop:
    for (const [dept, keywords] of Object.entries(DEPARTMENT_KEYWORDS)) {
      for (const keyword of keywords) {
        for (const tag of generatedTags) {
          if (tag.includes(keyword)) {
            assignedDepartment = dept;
            break outerLoop;
          }
        }
      }
    }

    return NextResponse.json({ assigned_department: assignedDepartment });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
