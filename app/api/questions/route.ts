import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("[v0] Fetching questions from Supabase...");
    const { data, error } = await supabase
      .from("questions")
      .select("*, answers(*)")
      .order("id", { ascending: true });

    if (error) throw error;
    
    // Transform Supabase data to match the expected format
    const transformedData = data?.map((question: any) => ({
      id: question.id,
      question: question.question,
      type: question.type,
      answers: question.answers?.map((answer: any) => ({
        id: answer.id,
        text: answer.text,
        category: answer.category,
        location: answer.location,
        answerType: answer.answer_type,
      })) || [],
    })) || [];

    console.log("[v0] Transformed questions:", transformedData);
    return NextResponse.json(transformedData);
  } catch (error) {
    console.error("[v0] Error fetching questions:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] Saving question to Supabase...");
    const body = await request.json();
    const { id, question, type, answers } = body;

    console.log("[v0] Request body:", body);

    // Insert question
    const { data: questionData, error: questionError } = await supabase
      .from("questions")
      .upsert({ id, question, type })
      .select();

    if (questionError) throw questionError;

    console.log("[v0] Question saved:", questionData);

    // Delete existing answers
    const { error: deleteError } = await supabase
      .from("answers")
      .delete()
      .eq("question_id", id);

    if (deleteError) throw deleteError;

    // Insert new answers
    if (answers && answers.length > 0) {
      const answersToInsert = answers.map((answer: any) => ({
        question_id: id,
        text: answer.text,
        category: answer.category,
        location: answer.location,
        answer_type: answer.answerType || "standard",
      }));

      console.log("[v0] Inserting answers:", answersToInsert);

      const { error: answersError } = await supabase
        .from("answers")
        .insert(answersToInsert);

      if (answersError) throw answersError;
    }

    return NextResponse.json(questionData);
  } catch (error) {
    console.error("[v0] Error saving question:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
