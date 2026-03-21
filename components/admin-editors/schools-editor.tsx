"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAdmin } from "@/lib/admin-context";
import { Trash2, Plus, Edit2 } from "lucide-react";

export function AdminSchoolsEditor() {
  const { schools, updateSchools } = useAdmin();
  const [editingLocation, setEditingLocation] = useState<string | null>(null);
  const [editData, setEditData] = useState<any[]>([]);
  const [editingSchoolIdx, setEditingSchoolIdx] = useState<number | null>(null);
  const [schoolName, setSchoolName] = useState("");
  const [schoolPrograms, setSchoolPrograms] = useState("");

  const handleEdit = (location: string) => {
    setEditingLocation(location);
    setEditData([...schools[location as keyof typeof schools]]);
    setEditingSchoolIdx(null);
  };

  const handleSave = () => {
    if (editingLocation) {
      const updated = { ...schools, [editingLocation]: editData };
      updateSchools(updated);
      setEditingLocation(null);
      setEditData([]);
      setEditingSchoolIdx(null);
    }
  };

  const handleAddSchool = () => {
    if (schoolName.trim() && schoolPrograms.trim()) {
      const programs = schoolPrograms.split(",").map((p) => p.trim());
      setEditData([...editData, { name: schoolName, programs }]);
      setSchoolName("");
      setSchoolPrograms("");
    }
  };

  const handleRemoveSchool = (index: number) => {
    setEditData(editData.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      {Object.entries(schools).map(([location, schoolList]) => (
        <Card key={location} className="border-border">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">{location}</CardTitle>
              <span className="text-sm text-muted-foreground">
                {schoolList.length} schools
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {editingLocation === location ? (
              <>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {editData.map((school, idx) => (
                    <div key={idx} className="p-3 bg-secondary rounded space-y-2">
                      <div className="flex gap-2 items-start">
                        <Input
                          value={school.name}
                          onChange={(e) => {
                            const updated = [...editData];
                            updated[idx].name = e.target.value;
                            setEditData(updated);
                          }}
                          placeholder="School name"
                          className="flex-1 bg-background"
                        />
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleRemoveSchool(idx)}
                          className="text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <Input
                        value={school.programs.join(", ")}
                        onChange={(e) => {
                          const updated = [...editData];
                          updated[idx].programs = e.target.value
                            .split(",")
                            .map((p: string) => p.trim());
                          setEditData(updated);
                        }}
                        placeholder="Programs (comma-separated)"
                        className="bg-background text-xs"
                      />
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <Input
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    placeholder="New school name"
                    className="bg-background"
                  />
                  <Input
                    value={schoolPrograms}
                    onChange={(e) => setSchoolPrograms(e.target.value)}
                    placeholder="Programs (comma-separated)"
                    className="bg-background"
                  />
                  <Button
                    size="sm"
                    onClick={handleAddSchool}
                    className="gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Add School
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
                      setEditingLocation(null);
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
                  {schoolList.map((school, idx) => (
                    <div key={idx} className="p-3 bg-secondary rounded text-sm">
                      <div className="font-medium">{school.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {school.programs.join(", ")}
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleEdit(location)}
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
