import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  return NextResponse.json({ status: 200, message: "oke bos mau login gak?" });
}
