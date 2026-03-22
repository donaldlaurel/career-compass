"use client";

import { useState } from "react";
import { EmailEntry } from "@/components/email-entry";
import { QuizFlow } from "@/components/quiz-flow";
import { ResultsPage } from "@/components/results-page";
import { useAdmin } from "@/lib/admin-context";
import { calculateResults, QuizAnswer, ResultsData } from "@/lib/quiz-engine";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type AssessmentState = "email" | "quiz" | "results";

export default function AssessmentPage() {
  const [state, setState] = useState<AssessmentState>("email");
  const [email, setEmail] = useState("");
  const [results, setResults] = useState<ResultsData | null>(null);
  const { programs, schools, scholarships } = useAdmin();

  const handleEmailSubmit = (submittedEmail: string) => {
    setEmail(submittedEmail);
    setState("quiz");
  };

  const handleQuizComplete = (answers: QuizAnswer[]) => {
    const calculatedResults = calculateResults(
      email,
      answers,
      programs,
      schools,
      scholarships
    );
    setResults(calculatedResults);
    setState("results");
  };

  const handleRetake = () => {
    setState("email");
    setEmail("");
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Back button */}
      <div className="absolute top-4 left-4 z-40">
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </Link>
      </div>

      {/* Assessment flow */}
      {state === "email" && <EmailEntry onSubmit={handleEmailSubmit} />}
      {state === "quiz" && (
        <QuizFlow
          email={email}
          onComplete={handleQuizComplete}
          onBack={handleRetake}
        />
      )}
      {state === "results" && results && (
        <ResultsPage data={results} onRetake={handleRetake} />
      )}
    </div>
  );
}
