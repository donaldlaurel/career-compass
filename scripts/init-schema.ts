import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not set");
}

const pool = new Pool({ connectionString });

async function initializeSchema() {
  const client = await pool.connect();
  try {
    console.log("[v0] Creating questions table...");
    await client.query(`
      CREATE TABLE IF NOT EXISTS questions (
        id SERIAL PRIMARY KEY,
        question TEXT NOT NULL,
        type VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("[v0] Questions table created");

    console.log("[v0] Creating answers table...");
    await client.query(`
      CREATE TABLE IF NOT EXISTS answers (
        id SERIAL PRIMARY KEY,
        question_id INTEGER NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
        text TEXT NOT NULL,
        category VARCHAR(100),
        location VARCHAR(100),
        answer_type VARCHAR(50) DEFAULT 'standard',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("[v0] Answers table created");

    console.log("[v0] Creating programs table...");
    await client.query(`
      CREATE TABLE IF NOT EXISTS programs (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL UNIQUE,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("[v0] Programs table created");

    console.log("[v0] Creating schools table...");
    await client.query(`
      CREATE TABLE IF NOT EXISTS schools (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        location TEXT NOT NULL,
        programs TEXT[] DEFAULT '{}',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("[v0] Schools table created");

    console.log("[v0] Creating scholarships table...");
    await client.query(`
      CREATE TABLE IF NOT EXISTS scholarships (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL UNIQUE,
        description TEXT,
        requirements TEXT,
        categories TEXT[] DEFAULT '{}',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("[v0] Scholarships table created");

    console.log("[v0] Schema initialization complete!");
  } catch (error) {
    console.error("[v0] Error initializing schema:", error);
    throw error;
  } finally {
    client.release();
    await pool.end();
  }
}

initializeSchema();
