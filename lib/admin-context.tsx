"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  EXAM_QUESTIONS,
  COLLEGE_PROGRAMS,
  PHILIPPINES_SCHOOLS,
  SCHOLARSHIPS,
} from "./data-mappings";

interface AdminContextType {
  isLoggedIn: boolean;
  adminPassword: string;
  setAdminPassword: (password: string) => void;
  login: (password: string) => boolean;
  logout: () => void;

  // Data management
  questions: typeof EXAM_QUESTIONS;
  programs: typeof COLLEGE_PROGRAMS;
  schools: typeof PHILIPPINES_SCHOOLS;
  scholarships: typeof SCHOLARSHIPS;
  isLoading: boolean;

  updateQuestion: (id: number, question: any) => Promise<void>;
  addAnswerToQuestion: (questionId: number, answer: any) => Promise<void>;
  removeAnswerFromQuestion: (questionId: number, answerId: number) => Promise<void>;
  updatePrograms: (programs: typeof COLLEGE_PROGRAMS) => Promise<void>;
  updateSchools: (schools: typeof PHILIPPINES_SCHOOLS) => Promise<void>;
  updateScholarships: (scholarships: typeof SCHOLARSHIPS) => Promise<void>;

  resetToDefaults: () => Promise<void>;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const DEFAULT_PASSWORD = "admin123";

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminPassword] = useState(DEFAULT_PASSWORD);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize data from defaults
  const [questions, setQuestions] = useState(EXAM_QUESTIONS);
  const [programs, setPrograms] = useState(COLLEGE_PROGRAMS);
  const [schools, setSchools] = useState(PHILIPPINES_SCHOOLS);
  const [scholarships, setScholarships] = useState(SCHOLARSHIPS);

  // Load from Supabase on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/api/questions");
        if (response.ok) {
          const data = await response.json();
          if (data && data.length > 0) {
            setQuestions(data);
          }
        }
      } catch (error) {
        console.error("Error loading questions from API:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const login = (password: string) => {
    if (password === DEFAULT_PASSWORD) {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const updateQuestion = async (id: number, updatedQuestion: any) => {
    try {
      const newQuestions = questions.map((q) =>
        q.id === id ? updatedQuestion : q
      );
      setQuestions(newQuestions);

      // Send to API
      await fetch("/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedQuestion),
      });
    } catch (error) {
      console.error("Error updating question:", error);
    }
  };

  const addAnswerToQuestion = async (questionId: number, answer: any) => {
    try {
      const question = questions.find((q) => q.id === questionId);
      if (!question) return;

      const updatedQuestion = {
        ...question,
        answers: [...(question.answers || []), answer],
      };

      // Update local state
      const newQuestions = questions.map((q) =>
        q.id === questionId ? updatedQuestion : q
      );
      setQuestions(newQuestions);

      // Send to API
      await fetch("/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedQuestion),
      });
    } catch (error) {
      console.error("Error adding answer:", error);
    }
  };

  const removeAnswerFromQuestion = async (
    questionId: number,
    answerId: number
  ) => {
    try {
      const question = questions.find((q) => q.id === questionId);
      if (!question) return;

      const updatedQuestion = {
        ...question,
        answers: question.answers?.filter((a: any) => a.id !== answerId) || [],
      };

      // Update local state
      const newQuestions = questions.map((q) =>
        q.id === questionId ? updatedQuestion : q
      );
      setQuestions(newQuestions);

      // Send delete to API
      await fetch(`/api/answers/${answerId}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error removing answer:", error);
    }
  };

  const updatePrograms = async (newPrograms: typeof COLLEGE_PROGRAMS) => {
    setPrograms(newPrograms);
    // TODO: Add API endpoint for programs
  };

  const updateSchools = async (newSchools: typeof PHILIPPINES_SCHOOLS) => {
    setSchools(newSchools);
    // TODO: Add API endpoint for schools
  };

  const updateScholarships = async (newScholarships: typeof SCHOLARSHIPS) => {
    setScholarships(newScholarships);
    // TODO: Add API endpoint for scholarships
  };

  const resetToDefaults = async () => {
    setQuestions(EXAM_QUESTIONS);
    setPrograms(COLLEGE_PROGRAMS);
    setSchools(PHILIPPINES_SCHOOLS);
    setScholarships(SCHOLARSHIPS);
    // TODO: Add API endpoint to reset
  };

  return (
    <AdminContext.Provider
      value={{
        isLoggedIn,
        adminPassword,
        setAdminPassword: () => {},
        login,
        logout,
        questions,
        programs,
        schools,
        scholarships,
        isLoading,
        updateQuestion,
        addAnswerToQuestion,
        removeAnswerFromQuestion,
        updatePrograms,
        updateSchools,
        updateScholarships,
        resetToDefaults,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin must be used within AdminProvider");
  }
  return context;
}
