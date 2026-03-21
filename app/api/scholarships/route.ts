import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("scholarships")
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
    const scholarships = Array.isArray(body) ? body : [body];

    // Validate scholarships data
    for (const scholarship of scholarships) {
      if (!scholarship.name || typeof scholarship.name !== "string") {
        throw new Error("Scholarship name is required and must be a string");
      }
    }

    // Upsert scholarships
    const { data, error } = await supabase
      .from("scholarships")
      .upsert(
        scholarships.map((s: any) => ({
          name: s.name,
          description: s.description || null,
          requirements: s.requirements || null,
          categories: Array.isArray(s.categories) ? s.categories : [],
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

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, name, description, requirements, categories } = body;

    if (!id || !name) {
      throw new Error("ID and name are required");
    }

    const { data, error } = await supabase
      .from("scholarships")
      .update({
        name,
        description: description || null,
        requirements: requirements || null,
        categories: Array.isArray(categories) ? categories : [],
      })
      .eq("id", id)
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
      throw new Error("Scholarship ID is required");
    }

    const { error } = await supabase
      .from("scholarships")
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
