import { COLLEGE_PROGRAMS, PHILIPPINES_SCHOOLS, SCHOLARSHIPS } from "./data-mappings";

export interface QuizAnswer {
  questionId: number;
  text?: string; // For single-select answers, to uniquely identify the answer
  selectedTexts?: string[]; // For multiple-select answers, store all selected answer texts
  categories?: string[];
  category?: string;
  location?: string;
  othersResponse?: string; // For "Others" text input answers
  answerType?: string; // For "Others" answers
}

export interface ResultsData {
  email: string;
  selectedLocation: string;
  topCategories: string[];
  recommendedPrograms: string[];
  recommendedSchools: typeof PHILIPPINES_SCHOOLS[keyof typeof PHILIPPINES_SCHOOLS];
  recommendedScholarships: typeof SCHOLARSHIPS;
}

export function calculateResults(
  email: string,
  answers: QuizAnswer[],
  programs: typeof COLLEGE_PROGRAMS = COLLEGE_PROGRAMS,
  schools: typeof PHILIPPINES_SCHOOLS = PHILIPPINES_SCHOOLS,
  scholarships: typeof SCHOLARSHIPS = SCHOLARSHIPS
): ResultsData {
  // Count category frequencies from all answers
  const categoryCounts: Record<string, number> = {};
  let selectedLocation = "Manila"; // default

  answers.forEach((answer) => {
    // Handle single category
    if (answer.category) {
      categoryCounts[answer.category] =
        (categoryCounts[answer.category] || 0) + 1;
    }
    // Handle multiple categories (for questions 3 and 4)
    if (answer.categories && answer.categories.length > 0) {
      answer.categories.forEach((cat) => {
        categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
      });
    }
    // Get location from question 2
    if (answer.location) {
      selectedLocation = answer.location;
    }
  });

  // Sort categories by frequency and get top 3
  const topCategories = Object.entries(categoryCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([category]) => category)
    .filter((cat) => cat && programs[cat]); // Only include valid categories

  // If no categories found, default to some
  if (topCategories.length === 0) {
    topCategories.push("STEM", "Business");
  }

  // Get recommended programs from top categories (limit to 12)
  const recommendedPrograms = Array.from(
    new Set(
      topCategories.flatMap((category) => programs[category] || [])
    )
  ).slice(0, 12);

  // Get schools in selected location, fallback to Manila
  const schoolKey =
    (selectedLocation as keyof typeof schools) || "Manila";
  const recommendedSchools =
    schools[schoolKey] || schools["Manila"];

  // Get relevant scholarships based on top categories
  const recommendedScholarships = scholarships.filter((scholarship) =>
    scholarship.categories.some((cat) => topCategories.includes(cat))
  ).slice(0, 8);

  return {
    email,
    selectedLocation,
    topCategories,
    recommendedPrograms,
    recommendedSchools,
    recommendedScholarships,
  };
}
