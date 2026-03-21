"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAdmin } from "@/lib/admin-context";
import { Trash2, Plus, Edit2 } from "lucide-react";

export function AdminProgramsEditor() {
  const { programs, updatePrograms } = useAdmin();
  const [editingCategory, setEditingCategory] = useState<string | null>(null);
  const [editData, setEditData] = useState<string[]>([]);
  const [newProgram, setNewProgram] = useState("");

  const handleEdit = (category: string) => {
    setEditingCategory(category);
    setEditData([...programs[category]]);
    setNewProgram("");
  };

  const handleSave = () => {
    if (editingCategory) {
      const updated = { ...programs, [editingCategory]: editData };
      updatePrograms(updated);
      setEditingCategory(null);
      setEditData([]);
    }
  };

  const handleAddProgram = () => {
    if (newProgram.trim()) {
      setEditData([...editData, newProgram]);
      setNewProgram("");
    }
  };

  const handleRemove = (index: number) => {
    setEditData(editData.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      {Object.entries(programs).map(([category, progs]) => (
        <Card key={category} className="border-border">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">{category}</CardTitle>
              <span className="text-sm text-muted-foreground">
                {progs.length} programs
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {editingCategory === category ? (
              <>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {editData.map((prog, idx) => (
                    <div key={idx} className="flex gap-2 items-center">
                      <Input
                        value={prog}
                        onChange={(e) => {
                          const updated = [...editData];
                          updated[idx] = e.target.value;
                          setEditData(updated);
                        }}
                        className="flex-1 bg-background"
                      />
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleRemove(idx)}
                        className="text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={newProgram}
                    onChange={(e) => setNewProgram(e.target.value)}
                    placeholder="Add new program"
                    className="flex-1 bg-background"
                  />
                  <Button
                    size="sm"
                    onClick={handleAddProgram}
                    className="gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Add
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" onClick={handleSave} className="bg-primary">
                    Save
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setEditingCategory(null);
                      setEditData([]);
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {progs.map((prog, idx) => (
                    <div
                      key={idx}
                      className="p-2 bg-secondary rounded text-sm"
                    >
                      {prog}
                    </div>
                  ))}
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleEdit(category)}
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
