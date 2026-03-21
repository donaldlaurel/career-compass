"use client";

import { useState } from "react";
import { EmailEntry } from "@/components/email-entry";
import { QuizFlow } from "@/components/quiz-flow";
import { ResultsPage } from "@/components/results-page";
import { AdminLogin } from "@/components/admin-login";
import { AdminDashboard } from "@/components/admin-dashboard";
import { useAdmin } from "@/lib/admin-context";
import { calculateResults, QuizAnswer, ResultsData } from "@/lib/quiz-engine";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

type AppState = "email" | "quiz" | "results" | "admin-login" | "admin-dashboard";

function HomeContent() {
  const [appState, setAppState] = useState<AppState>("email");
  const [email, setEmail] = useState("");
  const [results, setResults] = useState<ResultsData | null>(null);
  const { isLoggedIn, logout, programs, schools, scholarships } = useAdmin();

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

  const handleAdminLogout = () => {
    logout();
    setAppState("email");
  };

  return (
    <>
      {/* Admin button (always visible) */}
      {appState !== "admin-login" && appState !== "admin-dashboard" && (
        <div className="fixed bottom-4 right-4 z-50">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setAppState("admin-login")}
            className="gap-2"
          >
            <Lock className="h-4 w-4" />
            Admin
          </Button>
        </div>
      )}

      {/* Student views */}
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

      {/* Admin views */}
      {appState === "admin-login" && (
        <AdminLogin
          onLoginSuccess={() => setAppState("admin-dashboard")}
        />
      )}
      {appState === "admin-dashboard" && isLoggedIn && (
        <AdminDashboard onLogout={handleAdminLogout} />
      )}
    </>
  );
}

export default function Home() {
  return <HomeContent />;
}
