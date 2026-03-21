"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAdmin } from "@/lib/admin-context";
import { Trash2, Plus, Edit2 } from "lucide-react";

export function AdminScholarshipsEditor() {
  const { scholarships, updateScholarships } = useAdmin();
  const [editingIdx, setEditingIdx] = useState<number | null>(null);
  const [editData, setEditData] = useState<any>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newScholarship, setNewScholarship] = useState({
    name: "",
    description: "",
    requirements: "",
    categories: "",
  });

  const handleEdit = (index: number) => {
    setEditingIdx(index);
    setEditData({ ...scholarships[index] });
  };

  const handleSave = () => {
    if (editingIdx !== null && editData) {
      const updated = [...scholarships];
      updated[editingIdx] = editData;
      updateScholarships(updated);
      setEditingIdx(null);
      setEditData(null);
    }
  };

  const handleAddScholarship = () => {
    if (newScholarship.name && newScholarship.description && newScholarship.requirements) {
      const categories = newScholarship.categories
        .split(",")
        .map((c) => c.trim())
        .filter((c) => c);
      const updated = [
        ...scholarships,
        {
          name: newScholarship.name,
          description: newScholarship.description,
          requirements: newScholarship.requirements,
          categories,
        },
      ];
      updateScholarships(updated);
      setNewScholarship({
        name: "",
        description: "",
        requirements: "",
        categories: "",
      });
      setShowAddForm(false);
    }
  };

  const handleDelete = (index: number) => {
    const updated = scholarships.filter((_, i) => i !== index);
    updateScholarships(updated);
    if (editingIdx === index) {
      setEditingIdx(null);
      setEditData(null);
    }
  };

  return (
    <div className="space-y-4">
      {scholarships.map((scholarship, idx) => (
        <Card key={idx} className="border-border">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <CardTitle className="text-lg">{scholarship.name}</CardTitle>
              {editingIdx !== idx && (
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleEdit(idx)}
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDelete(idx)}
                    className="text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {editingIdx === idx ? (
              <>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-semibold">Name</label>
                    <Input
                      value={editData.name}
                      onChange={(e) =>
                        setEditData({ ...editData, name: e.target.value })
                      }
                      className="mt-1 bg-background"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold">Description</label>
                    <Textarea
                      value={editData.description}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          description: e.target.value,
                        })
                      }
                      className="mt-1 bg-background"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold">Requirements</label>
                    <Textarea
                      value={editData.requirements}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          requirements: e.target.value,
                        })
                      }
                      className="mt-1 bg-background"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold">
                      Categories (comma-separated)
                    </label>
                    <Input
                      value={editData.categories.join(", ")}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          categories: e.target.value.split(",").map((c) => c.trim()),
                        })
                      }
                      className="mt-1 bg-background"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" onClick={handleSave} className="bg-primary">
                    Save
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setEditingIdx(null);
                      setEditData(null);
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Description</p>
                    <p className="mt-1">{scholarship.description}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Requirements</p>
                    <p className="mt-1 text-sm">{scholarship.requirements}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Categories</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {scholarship.categories.map((cat, i) => (
                        <span
                          key={i}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      ))}

      {showAddForm ? (
        <Card className="border-border border-2 border-primary/50">
          <CardHeader>
            <CardTitle className="text-lg">Add New Scholarship</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              value={newScholarship.name}
              onChange={(e) =>
                setNewScholarship({ ...newScholarship, name: e.target.value })
              }
              placeholder="Scholarship name"
              className="bg-background"
            />
            <Textarea
              value={newScholarship.description}
              onChange={(e) =>
                setNewScholarship({
                  ...newScholarship,
                  description: e.target.value,
                })
              }
              placeholder="Description"
              className="bg-background"
            />
            <Textarea
              value={newScholarship.requirements}
              onChange={(e) =>
                setNewScholarship({
                  ...newScholarship,
                  requirements: e.target.value,
                })
              }
              placeholder="Requirements"
              className="bg-background"
            />
            <Input
              value={newScholarship.categories}
              onChange={(e) =>
                setNewScholarship({
                  ...newScholarship,
                  categories: e.target.value,
                })
              }
              placeholder="Categories (comma-separated)"
              className="bg-background"
            />
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={handleAddScholarship}
                className="bg-primary"
              >
                Add
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setShowAddForm(false)}
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Button
          onClick={() => setShowAddForm(true)}
          className="w-full gap-2"
          variant="outline"
        >
          <Plus className="h-4 w-4" />
          Add Scholarship
        </Button>
      )}
    </div>
  );
}
