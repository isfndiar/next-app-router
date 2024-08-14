import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
export async function POST(req: NextRequest) {
  const tags = req.nextUrl.searchParams.get("tags");
  const password = req.nextUrl.searchParams.get("password");
  if (tags == "products" && password == "ireng123") {
    revalidateTag(tags);
    return NextResponse.json({ status: 201, message: "berhasil revalidate" });
  } else {
    return NextResponse.json({
      status: 400,
      message: "reavalidate failed or password wrong",
    });
  }
}
