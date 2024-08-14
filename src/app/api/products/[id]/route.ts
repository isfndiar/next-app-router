import { NextRequest, NextResponse } from "next/server";

type Params = {
  id: string;
};
export async function GET(req: NextResponse, context: { params: Params }) {
  const id = context.params.id;
  const { searchParams } = new URL(req.url);
  return NextResponse.json({ status: "oke bos", id });
}
