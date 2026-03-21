import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { answerId: string } }
) {
  try {
    const answerId = parseInt(params.answerId);
    const { error } = await supabase
      .from("answers")
      .delete()
      .eq("id", answerId);

    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
