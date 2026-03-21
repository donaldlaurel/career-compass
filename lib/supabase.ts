import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase environment variables. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Question {
  id: number;
  question: string;
  type: string;
  answers?: Answer[];
}

export interface Answer {
  id: number;
  question_id: number;
  text: string;
  category: string;
  answer_type: "standard" | "others";
}

export interface Program {
  id: number;
  name: string;
}

export interface School {
  id: number;
  name: string;
}

export interface Scholarship {
  id: number;
  name: string;
}
