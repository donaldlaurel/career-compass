import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("questions")
      .select("*, answers(*)")
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
    const { id, question, type, answers } = body;

    // Insert question
    const { data: questionData, error: questionError } = await supabase
      .from("questions")
      .upsert({ id, question, type })
      .select();

    if (questionError) throw questionError;

    // Delete existing answers and insert new ones
    await supabase.from("answers").delete().eq("question_id", id);

    if (answers && answers.length > 0) {
      const { error: answersError } = await supabase
        .from("answers")
        .insert(
          answers.map((answer: any) => ({
            question_id: id,
            text: answer.text,
            category: answer.category,
            answer_type: answer.answerType || "standard",
          }))
        );

      if (answersError) throw answersError;
    }

    return NextResponse.json(questionData);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
