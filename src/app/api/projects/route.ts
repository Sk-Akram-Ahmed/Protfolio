import { NextResponse } from "next/server";
import { Project } from "@/types";

const mockProjects: Project[] = [
  {
    id: "proj-1",
    title: "AI Powered Cloud Studio",
    description: "Enterprise SaaS platform built with Next.js, WebGL, and microservices architecture.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
    image: "/images/project1.png",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    createdAt: new Date().toISOString(),
  },
];

export async function GET() {
  return NextResponse.json({ success: true, data: mockProjects });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newProject: Project = {
      id: `proj-${Date.now()}`,
      ...body,
      createdAt: new Date().toISOString(),
    };
    return NextResponse.json({ success: true, data: newProject }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Invalid request data" }, { status: 400 });
  }
}
