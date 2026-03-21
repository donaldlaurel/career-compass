import { supabase } from "@/lib/supabase";
import { EXAM_QUESTIONS } from "@/lib/data-mappings";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    console.log("[v0] Initializing database...");

    // Check if questions already exist
    const { data: existingQuestions, error: checkError } = await supabase
      .from("questions")
      .select("id")
      .limit(1);

    if (checkError && checkError.code !== "PGRST116") {
      console.error("[v0] Error checking questions:", checkError);
    }

    if (existingQuestions && existingQuestions.length > 0) {
      console.log("[v0] Questions already exist, skipping initialization");
      return NextResponse.json({ message: "Database already initialized" });
    }

    console.log("[v0] Inserting default questions and answers...");

    // Insert all questions with their answers
    for (const question of EXAM_QUESTIONS) {
      // Insert question
      const { error: questionError } = await supabase
        .from("questions")
        .insert({
          id: question.id,
          question: question.question,
          type: question.type,
        });

      if (questionError) {
        console.error(
          `[v0] Error inserting question ${question.id}:`,
          questionError
        );
        continue;
      }

      // Insert answers if any
      if (question.answers && question.answers.length > 0) {
        const answersToInsert = question.answers.map((answer: any) => ({
          question_id: question.id,
          text: answer.text,
          category: answer.category || answer.location,
          answer_type: answer.answerType || "standard",
        }));

        const { error: answersError } = await supabase
          .from("answers")
          .insert(answersToInsert);

        if (answersError) {
          console.error(
            `[v0] Error inserting answers for question ${question.id}:`,
            answersError
          );
        }
      }
    }

    console.log("[v0] Database initialization complete!");
    return NextResponse.json({ message: "Database initialized successfully" });
  } catch (error) {
    console.error("[v0] Database initialization failed:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
