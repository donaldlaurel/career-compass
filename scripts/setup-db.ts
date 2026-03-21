import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Missing Supabase environment variables. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY."
  );
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function setupDatabase() {
  console.log("[v0] Starting database setup...");

  try {
    // Create questions table
    console.log("[v0] Creating questions table...");
    await supabase.from("questions").select("*").limit(1);
    console.log("[v0] Questions table already exists");
  } catch {
    console.log("[v0] Creating questions table...");
    const { error } = await supabase.rpc("exec", {
      sql: `
        CREATE TABLE IF NOT EXISTS questions (
          id INTEGER PRIMARY KEY,
          question TEXT NOT NULL,
          type TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `,
    });
    if (error) console.error("[v0] Error creating questions table:", error);
  }

  // Create answers table
  try {
    console.log("[v0] Creating answers table...");
    const { error } = await supabase.rpc("exec", {
      sql: `
        CREATE TABLE IF NOT EXISTS answers (
          id SERIAL PRIMARY KEY,
          question_id INTEGER NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
          text TEXT NOT NULL,
          category TEXT,
          answer_type TEXT DEFAULT 'standard',
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `,
    });
    if (error) console.error("[v0] Error creating answers table:", error);
  } catch (error) {
    console.log(
      "[v0] Answers table already exists or error:",
      (error as Error).message
    );
  }

  // Create programs table
  try {
    console.log("[v0] Creating programs table...");
    const { error } = await supabase.rpc("exec", {
      sql: `
        CREATE TABLE IF NOT EXISTS programs (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL UNIQUE,
          description TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `,
    });
    if (error) console.error("[v0] Error creating programs table:", error);
  } catch (error) {
    console.log(
      "[v0] Programs table already exists or error:",
      (error as Error).message
    );
  }

  // Create schools table
  try {
    console.log("[v0] Creating schools table...");
    const { error } = await supabase.rpc("exec", {
      sql: `
        CREATE TABLE IF NOT EXISTS schools (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          location TEXT NOT NULL,
          programs TEXT[] DEFAULT '{}',
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `,
    });
    if (error) console.error("[v0] Error creating schools table:", error);
  } catch (error) {
    console.log(
      "[v0] Schools table already exists or error:",
      (error as Error).message
    );
  }

  // Create scholarships table
  try {
    console.log("[v0] Creating scholarships table...");
    const { error } = await supabase.rpc("exec", {
      sql: `
        CREATE TABLE IF NOT EXISTS scholarships (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL UNIQUE,
          description TEXT,
          requirements TEXT,
          categories TEXT[] DEFAULT '{}',
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `,
    });
    if (error) console.error("[v0] Error creating scholarships table:", error);
  } catch (error) {
    console.log(
      "[v0] Scholarships table already exists or error:",
      (error as Error).message
    );
  }

  console.log("[v0] Database setup complete!");
}

setupDatabase().catch((err) => {
  console.error("[v0] Database setup failed:", err);
  process.exit(1);
});
