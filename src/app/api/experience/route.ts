import { NextResponse } from "next/server";
import { Experience } from "@/types";

const mockExperiences: Experience[] = [
  {
    id: "exp-1",
    role: "Lead Full Stack Engineer",
    company: "Nexus Tech Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: [
      "Architected real-time dashboard monitoring system using WebSockets and Next.js App Router.",
      "Optimized Core Web Vitals resulting in 45% increase in conversion rates.",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "GraphQL"],
  },
];

export async function GET() {
  return NextResponse.json({ success: true, data: mockExperiences });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newExperience: Experience = {
      id: `exp-${Date.now()}`,
      ...body,
    };
    return NextResponse.json({ success: true, data: newExperience }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Invalid payload" }, { status: 400 });
  }
}
