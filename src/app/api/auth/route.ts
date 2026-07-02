import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    
    // Auth skeleton verification
    if (username === "admin" && password === "admin123") {
      return NextResponse.json({
        success: true,
        token: "mock-jwt-admin-token-xyz",
        user: { name: "Admin", role: "superadmin" },
      });
    }

    return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Authentication failed" }, { status: 500 });
  }
}
