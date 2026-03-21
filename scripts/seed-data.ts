import { createClient } from "@supabase/supabase-js";
import { EXAM_QUESTIONS, COLLEGE_PROGRAMS, PHILIPPINES_SCHOOLS, SCHOLARSHIPS } from "@/lib/data-mappings";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function seedData() {
  try {
    console.log("[v0] Starting data seed...");

    // Check if questions already exist
    const { count, error: countError } = await supabase
      .from("questions")
      .select("*", { count: "exact", head: true });

    if (countError) {
      console.error("[v0] Error checking questions:", countError);
      return;
    }

    if (count && count > 0) {
      console.log("[v0] Data already seeded, skipping...");
      return;
    }

    // Seed questions and answers
    console.log("[v0] Seeding questions...");
    for (const question of EXAM_QUESTIONS) {
      const { data: questionData, error: questionError } = await supabase
        .from("questions")
        .insert({
          id: question.id,
          question: question.question,
          type: question.type,
        })
        .select();

      if (questionError) {
        console.error("[v0] Error inserting question:", questionError);
        continue;
      }

      // Seed answers for this question
      if (question.answers && question.answers.length > 0) {
        const answersToInsert = question.answers.map((answer: any) => ({
          question_id: question.id,
          text: answer.text,
          category: answer.category || null,
          location: answer.location || null,
          answer_type: answer.answerType || "standard",
        }));

        const { error: answersError } = await supabase
          .from("answers")
          .insert(answersToInsert);

        if (answersError) {
          console.error("[v0] Error inserting answers:", answersError);
        }
      }
    }

    // Seed programs
    console.log("[v0] Seeding programs...");
    const allPrograms = Object.values(COLLEGE_PROGRAMS).flat();
    for (const program of allPrograms) {
      const { error } = await supabase.from("programs").insert({
        name: program,
        description: "College program",
      });

      if (error && !error.message.includes("duplicate")) {
        console.error("[v0] Error inserting program:", error);
      }
    }

    // Seed schools
    console.log("[v0] Seeding schools...");
    for (const [location, schools] of Object.entries(PHILIPPINES_SCHOOLS)) {
      for (const school of schools) {
        const { error } = await supabase.from("schools").insert({
          name: school.name,
          location: location,
          programs: school.programs || [],
        });

        if (error) {
          console.error("[v0] Error inserting school:", error);
        }
      }
    }

    // Seed scholarships
    console.log("[v0] Seeding scholarships...");
    for (const scholarship of SCHOLARSHIPS) {
      const { error } = await supabase.from("scholarships").insert({
        name: scholarship.name,
        description: scholarship.description,
        requirements: scholarship.requirements,
        categories: scholarship.categories || [],
      });

      if (error && !error.message.includes("duplicate")) {
        console.error("[v0] Error inserting scholarship:", error);
      }
    }

    console.log("[v0] Data seeding complete!");
  } catch (error) {
    console.error("[v0] Seed error:", error);
  }
}

seedData();
