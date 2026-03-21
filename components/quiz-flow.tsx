"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { EXAM_QUESTIONS } from "@/lib/data-mappings";
import { QuizAnswer } from "@/lib/quiz-engine";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useAdmin } from "@/lib/admin-context";

interface QuizFlowProps {
  email: string;
  onComplete: (answers: QuizAnswer[]) => void;
  onBack: () => void;
}

export function QuizFlow({ email, onComplete, onBack }: QuizFlowProps) {
  const { questions } = useAdmin();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [othersText, setOthersText] = useState<Record<number, string>>({}); // Store "Others" text responses

  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;
  const isMultipleSelect = question.type === "multiple";

  const handleAnswerSelect = (selectedAnswer: any) => {
    const newAnswers = [...answers];

    if (isMultipleSelect) {
      // For multiple select questions, track by answer text to avoid duplicates with same category
      const currentMultiple = newAnswers[currentQuestion]?.selectedTexts || [];
      const isSelected = currentMultiple.includes(selectedAnswer.text);

      if (isSelected) {
        // Remove if already selected
        newAnswers[currentQuestion] = {
          questionId: question.id,
          selectedTexts: currentMultiple.filter(
            (text) => text !== selectedAnswer.text
          ),
          categories: currentMultiple
            .map((text) => {
              const ans = question.answers.find((a) => a.text === text);
              return ans?.category;
            })
            .filter(Boolean) as string[],
        };
      } else {
        // Add if not selected
        const newSelectedTexts = [...currentMultiple, selectedAnswer.text];
        newAnswers[currentQuestion] = {
          questionId: question.id,
          selectedTexts: newSelectedTexts,
          categories: newSelectedTexts
            .map((text) => {
              const ans = question.answers.find((a) => a.text === text);
              return ans?.category;
            })
            .filter(Boolean) as string[],
        };
      }
    } else {
      // For single select questions
      newAnswers[currentQuestion] = {
        questionId: question.id,
        ...selectedAnswer,
      };
    }

    setAnswers(newAnswers);
  };

  const handleOthersTextChange = (text: string) => {
    setOthersText({ ...othersText, [currentQuestion]: text });
  };

  const getAnswerForOthers = (): QuizAnswer | null => {
    const textValue = othersText[currentQuestion];
    if (!textValue?.trim()) return null;

    // Find the "Others" answer option
    const othersAnswer = question.answers.find(
      (a) => a.answerType === "others"
    );

    if (!othersAnswer) return null;

    return {
      questionId: question.id,
      category: othersAnswer.category,
      othersResponse: textValue.trim(),
    };
  };

  const handleNext = () => {
    const currentAnswer = answers[currentQuestion];
    const othersAnswer = getAnswerForOthers();
    
    // Check if question has "Others" option and if we need it answered
    const hasOthersOption = question.answers.some(
      (a) => a.answerType === "others"
    );
    
    let isAnswered = false;
    if (isMultipleSelect) {
      isAnswered =
        currentAnswer?.categories && currentAnswer.categories.length > 0;
    } else {
      isAnswered = !!currentAnswer;
    }

    // If "Others" is an option and it's selected, we need the text
    if (hasOthersOption && isAnswered) {
      const isOthersSelected = isMultipleSelect
        ? currentAnswer?.categories?.some((cat) =>
            question.answers
              .filter((a) => a.answerType === "others")
              .some((a) => a.category === cat)
          )
        : currentAnswer?.category ===
          question.answers.find((a) => a.answerType === "others")?.category;

      if (isOthersSelected && !othersAnswer) {
        return; // Don't proceed if Others is selected but no text provided
      }

      // If Others was selected, add the response to the answer
      if (isOthersSelected && othersAnswer) {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = othersAnswer;
        setAnswers(newAnswers);
      }
    }

    if (isAnswered) {
      if (isLastQuestion) {
        onComplete(answers);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const currentAnswer = answers[currentQuestion];
  const isAnswered =
    isMultipleSelect
      ? currentAnswer?.categories && currentAnswer.categories.length > 0
      : !!currentAnswer;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-background px-4 py-8">
      <Card className="w-full max-w-2xl shadow-xl border-0 bg-card/95 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-semibold text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <div className="h-2 flex gap-1">
              {questions.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-full flex-1 rounded-full transition-all duration-300 ${
                    idx < currentQuestion
                      ? "bg-primary"
                      : idx === currentQuestion
                        ? "bg-accent"
                        : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
          <CardTitle className="text-2xl md:text-3xl leading-tight">
            {question.question}
          </CardTitle>
          {isMultipleSelect && (
            <p className="text-sm text-muted-foreground mt-3">
              Select all that apply
            </p>
          )}
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-3">
            {question.answers.map((answer, idx) => {
              let isSelected = false;
              
              if (isMultipleSelect) {
                // For multiple select, check if answer text is in the selected texts array
                isSelected = currentAnswer?.selectedTexts?.includes(answer.text) || false;
              } else {
                // For single select, check the exact text match to identify the selected answer
                isSelected = currentAnswer?.text === answer.text;
              }

              // Handle "Others" answer type
              if (answer.answerType === "others") {
                return (
                  <div key={idx} className="space-y-2">
                    <button
                      onClick={() => handleAnswerSelect(answer)}
                      className={`w-full p-5 rounded-xl border-2 transition-all text-left font-medium text-base md:text-lg ${
                        isSelected
                          ? "border-primary bg-primary/5 text-primary shadow-md"
                          : "border-border hover:border-primary/50 hover:bg-secondary"
                      }`}
                    >
                      {answer.text}
                    </button>
                    {isSelected && (
                      <Input
                        type="text"
                        placeholder="Please specify your answer..."
                        value={othersText[currentQuestion] || ""}
                        onChange={(e) => handleOthersTextChange(e.target.value)}
                        className="bg-background border-primary/50 focus:border-primary"
                      />
                    )}
                  </div>
                );
              }

              return (
                <div key={idx}>
                  {isMultipleSelect ? (
                    <div
                      onClick={() => handleAnswerSelect(answer)}
                      className={`w-full p-4 rounded-xl border-2 transition-all text-left font-medium cursor-pointer flex items-center gap-3 ${
                        isSelected
                          ? "border-primary bg-primary/5 text-primary shadow-md"
                          : "border-border hover:border-primary/50 hover:bg-secondary"
                      }`}
                    >
                      <Checkbox
                        checked={isSelected || false}
                        onChange={() => handleAnswerSelect(answer)}
                        className="h-5 w-5"
                      />
                      <span>{answer.text}</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleAnswerSelect(answer)}
                      className={`w-full p-5 rounded-xl border-2 transition-all text-left font-medium text-base md:text-lg ${
                        isSelected
                          ? "border-primary bg-primary/5 text-primary shadow-md"
                          : "border-border hover:border-primary/50 hover:bg-secondary active:bg-secondary"
                      }`}
                    >
                      {answer.text}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex gap-3 pt-6">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex-1 h-11"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={!isAnswered}
              className="flex-1 h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg"
            >
              {isLastQuestion ? "Submit" : "Next"}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <Button
            variant="ghost"
            onClick={onBack}
            className="w-full text-muted-foreground hover:text-foreground"
          >
            ← Back to Start
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
