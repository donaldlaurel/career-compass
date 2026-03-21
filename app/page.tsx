"use client";

import { useState } from "react";
import { EmailEntry } from "@/components/email-entry";
import { QuizFlow } from "@/components/quiz-flow";
import { ResultsPage } from "@/components/results-page";
import { AdminDashboard } from "@/components/admin-dashboard";
import { useAdmin } from "@/lib/admin-context";
import { calculateResults, QuizAnswer, ResultsData } from "@/lib/quiz-engine";
import { Button } from "@/components/ui/button";
import { Lock, X } from "lucide-react";

type AppState = "email" | "quiz" | "results" | "admin-dashboard";

function HomeContent() {
  const [appState, setAppState] = useState<AppState>("email");
  const [email, setEmail] = useState("");
  const [results, setResults] = useState<ResultsData | null>(null);
  const [showAdmin, setShowAdmin] = useState(false);
  const { programs, schools, scholarships } = useAdmin();

  const handleEmailSubmit = (submittedEmail: string) => {
    setEmail(submittedEmail);
    setAppState("quiz");
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
    setAppState("results");
  };

  const handleRetake = () => {
    setAppState("email");
    setEmail("");
    setResults(null);
  };

  const handleAdminClose = () => {
    setShowAdmin(false);
    setAppState("email");
  };

  return (
    <>
      {/* Admin button (always visible when not in admin mode) */}
      {!showAdmin && (
        <div className="fixed bottom-4 right-4 z-50">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setShowAdmin(true)}
            className="gap-2"
          >
            <Lock className="h-4 w-4" />
            Admin
          </Button>
        </div>
      )}

      {/* Admin close button */}
      {showAdmin && (
        <div className="fixed top-4 right-4 z-50">
          <Button
            size="sm"
            variant="ghost"
            onClick={handleAdminClose}
            className="gap-2"
          >
            <X className="h-4 w-4" />
            Close
          </Button>
        </div>
      )}

      {/* Student views */}
      {!showAdmin && (
        <>
          {appState === "email" && <EmailEntry onSubmit={handleEmailSubmit} />}
          {appState === "quiz" && (
            <QuizFlow
              email={email}
              onComplete={handleQuizComplete}
              onBack={handleRetake}
            />
          )}
          {appState === "results" && results && (
            <ResultsPage data={results} onRetake={handleRetake} />
          )}
        </>
      )}

      {/* Admin view */}
      {showAdmin && (
        <AdminDashboard onLogout={handleAdminClose} />
      )}
    </>
  );
}

export default function Home() {
  return <HomeContent />;
}
