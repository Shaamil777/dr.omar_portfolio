import { NextResponse } from "next/server";
import { getAdminSession, ADMIN_USERNAME } from "@/lib/auth";

export async function GET() {
  const isAuth = await getAdminSession();
  if (!isAuth) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({
    authenticated: true,
    user: { username: ADMIN_USERNAME },
  });
}
