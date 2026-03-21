"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useAdmin } from "@/lib/admin-context";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Edit2, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function AdminQuestionsEditor() {
  const { questions, updateQuestion, addAnswerToQuestion, removeAnswerFromQuestion } = useAdmin();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editData, setEditData] = useState<any>(null);
  const [addingAnswerTo, setAddingAnswerTo] = useState<number | null>(null);
  const [newAnswerData, setNewAnswerData] = useState({
    text: "",
    category: "",
    answerType: "standard", // "standard" or "others"
  });

  const handleEdit = (question: any) => {
    setEditingId(question.id);
    setEditData({ ...question });
  };

  const handleSave = () => {
    if (editData) {
      updateQuestion(editData.id, editData);
      setEditingId(null);
      setEditData(null);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditData(null);
  };

  const updateAnswerText = (index: number, text: string) => {
    const newAnswers = [...editData.answers];
    newAnswers[index] = { ...newAnswers[index], text };
    setEditData({ ...editData, answers: newAnswers });
  };

  const updateAnswerType = (index: number, type: string) => {
    const newAnswers = [...editData.answers];
    newAnswers[index] = { ...newAnswers[index], answerType: type };
    setEditData({ ...editData, answers: newAnswers });
  };

  const updateAnswerCategory = (index: number, category: string) => {
    const newAnswers = [...editData.answers];
    newAnswers[index] = { ...newAnswers[index], category };
    setEditData({ ...editData, answers: newAnswers });
  };

  const handleAddAnswer = (questionId: number) => {
    if (newAnswerData.text.trim() && newAnswerData.category.trim()) {
      // If we're in edit mode, add to editData instead
      if (editingId === questionId && editData) {
        setEditData({
          ...editData,
          answers: [
            ...editData.answers,
            {
              text: newAnswerData.text,
              category: newAnswerData.category,
              answerType: newAnswerData.answerType,
            },
          ],
        });
      } else {
        // Otherwise add directly to the question
        addAnswerToQuestion(questionId, {
          text: newAnswerData.text,
          category: newAnswerData.category,
          answerType: newAnswerData.answerType,
        });
      }
      setNewAnswerData({ text: "", category: "", answerType: "standard" });
      setAddingAnswerTo(null);
    }
  };

  const handleRemoveAnswer = (questionId: number, index: number) => {
    // If we're in edit mode, remove from editData
    if (editingId === questionId && editData) {
      setEditData({
        ...editData,
        answers: editData.answers.filter((_: any, idx: number) => idx !== index),
      });
    } else {
      // Otherwise remove directly from the question
      removeAnswerFromQuestion(questionId, index);
    }
  };

  return (
    <div className="space-y-4">
      {questions.map((question) => (
        <Card key={question.id} className="border-border">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-lg">Question {question.id}</CardTitle>
                {editingId === question.id ? (
                  <Input
                    value={editData.question}
                    onChange={(e) =>
                      setEditData({ ...editData, question: e.target.value })
                    }
                    className="mt-2 bg-background"
                  />
                ) : (
                  <p className="text-foreground mt-2">{question.question}</p>
                )}
              </div>
              <Badge variant="secondary">{question.type}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {editingId === question.id ? (
              <>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Answers:</h4>
                  {editData.answers.map((answer: any, idx: number) => (
                    <div key={idx} className="p-3 bg-secondary rounded-lg space-y-2 border border-border">
                      <div className="flex gap-2 items-start">
                        <Input
                          value={answer.text}
                          onChange={(e) => updateAnswerText(idx, e.target.value)}
                          placeholder="Answer text"
                          className="flex-1 bg-background"
                        />
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleRemoveAnswer(question.id, idx)}
                          className="text-destructive hover:text-destructive"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Select
                          value={answer.answerType || "standard"}
                          onValueChange={(value) => updateAnswerType(idx, value)}
                        >
                          <SelectTrigger className="bg-background">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="standard">Standard</SelectItem>
                            <SelectItem value="others">Others (Text Input)</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input
                          value={answer.category}
                          onChange={(e) => updateAnswerCategory(idx, e.target.value)}
                          placeholder="Category"
                          className="bg-background"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {addingAnswerTo === question.id ? (
                  <div className="p-3 bg-muted rounded-lg space-y-2 border-2 border-primary">
                    <h5 className="font-semibold text-sm">Add New Answer</h5>
                    <Input
                      value={newAnswerData.text}
                      onChange={(e) =>
                        setNewAnswerData({ ...newAnswerData, text: e.target.value })
                      }
                      placeholder="Answer text"
                      className="bg-background"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <Select
                        value={newAnswerData.answerType}
                        onValueChange={(value) =>
                          setNewAnswerData({ ...newAnswerData, answerType: value })
                        }
                      >
                        <SelectTrigger className="bg-background">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="others">Others (Text Input)</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        value={newAnswerData.category}
                        onChange={(e) =>
                          setNewAnswerData({
                            ...newAnswerData,
                            category: e.target.value,
                          })
                        }
                        placeholder="Category"
                        className="bg-background"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => handleAddAnswer(question.id)}
                        className="bg-primary"
                      >
                        Add Answer
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setAddingAnswerTo(null)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setAddingAnswerTo(question.id)}
                    className="gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Add Answer
                  </Button>
                )}

                <div className="flex gap-2 pt-2">
                  <Button size="sm" onClick={handleSave} className="bg-primary">
                    Save
                  </Button>
                  <Button size="sm" variant="outline" onClick={handleCancel}>
                    Cancel
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  {question.answers.map((answer, idx) => (
                    <div
                      key={idx}
                      className="p-2 bg-secondary rounded text-sm flex justify-between items-center"
                    >
                      <div className="flex-1">
                        <p>{answer.text}</p>
                        <p className="text-xs text-muted-foreground">
                          {answer.category}
                          {answer.answerType === "others" && (
                            <span className="ml-2 inline-block px-2 py-0.5 bg-accent/20 text-accent rounded text-xs">
                              Text Input
                            </span>
                          )}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleRemoveAnswer(question.id, idx)}
                        className="text-destructive hover:text-destructive ml-2"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleEdit(question)}
                  className="gap-2"
                >
                  <Edit2 className="h-4 w-4" />
                  Edit
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
