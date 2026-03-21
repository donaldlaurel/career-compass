-- Create questions table
CREATE TABLE IF NOT EXISTS questions (
  id BIGINT PRIMARY KEY,
  question TEXT NOT NULL,
  type TEXT NOT NULL,
  answers JSONB NOT NULL DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create college programs table
CREATE TABLE IF NOT EXISTS college_programs (
  id BIGINT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  fields TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create schools table
CREATE TABLE IF NOT EXISTS schools (
  id BIGINT PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT,
  location TEXT,
  website TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create scholarships table
CREATE TABLE IF NOT EXISTS scholarships (
  id BIGINT PRIMARY KEY,
  name TEXT NOT NULL,
  criteria TEXT,
  amount TEXT,
  url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create quiz results table for tracking student responses
CREATE TABLE IF NOT EXISTS quiz_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  answers JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_questions_id ON questions(id);
CREATE INDEX IF NOT EXISTS idx_college_programs_id ON college_programs(id);
CREATE INDEX IF NOT EXISTS idx_schools_id ON schools(id);
CREATE INDEX IF NOT EXISTS idx_scholarships_id ON scholarships(id);
CREATE INDEX IF NOT EXISTS idx_quiz_results_email ON quiz_results(email);
