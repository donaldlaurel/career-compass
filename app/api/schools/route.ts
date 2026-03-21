import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("schools")
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
    const schools = Array.isArray(body) ? body : [body];

    // Validate schools data
    for (const school of schools) {
      if (!school.name || typeof school.name !== "string") {
        throw new Error("School name is required and must be a string");
      }
      if (!school.location || typeof school.location !== "string") {
        throw new Error("School location is required and must be a string");
      }
    }

    // Insert schools
    const { data, error } = await supabase
      .from("schools")
      .insert(
        schools.map((s: any) => ({
          name: s.name,
          location: s.location,
          programs: Array.isArray(s.programs) ? s.programs : [],
        }))
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
    const { id, name, location, programs } = body;

    if (!id || !name || !location) {
      throw new Error("ID, name, and location are required");
    }

    const { data, error } = await supabase
      .from("schools")
      .update({
        name,
        location,
        programs: Array.isArray(programs) ? programs : [],
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
      throw new Error("School ID is required");
    }

    const { error } = await supabase
      .from("schools")
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
