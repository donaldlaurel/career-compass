import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("programs")
      .select("*")
      .order("id", { ascending: true });

    if (error) throw error;
    return NextResponse.json(data || []);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const programs = Array.isArray(body) ? body : [body];

    // Validate programs data
    for (const program of programs) {
      if (!program.name || typeof program.name !== "string") {
        throw new Error("Program name is required and must be a string");
      }
    }

    // Upsert programs
    const { data, error } = await supabase
      .from("programs")
      .upsert(
        programs.map((p: any) => ({
          name: p.name,
          description: p.description || null,
        })),
        { onConflict: "name" }
      )
      .select();

    if (error) throw error;
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      throw new Error("Program ID is required");
    }

    const { error } = await supabase
      .from("programs")
      .delete()
      .eq("id", parseInt(id));

    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
