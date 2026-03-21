"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAdmin } from "@/lib/admin-context";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { LogOut, RotateCcw } from "lucide-react";
import { AdminQuestionsEditor } from "./admin-editors/questions-editor";
import { AdminProgramsEditor } from "./admin-editors/programs-editor";
import { AdminSchoolsEditor } from "./admin-editors/schools-editor";
import { AdminScholarshipsEditor } from "./admin-editors/scholarships-editor";

interface AdminDashboardProps {
  onLogout: () => void;
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const { resetToDefaults } = useAdmin();
  const [showResetDialog, setShowResetDialog] = useState(false);

  const handleReset = () => {
    resetToDefaults();
    setShowResetDialog(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-1">Manage all Career Compass content</p>
          </div>
          <div className="flex gap-3">
            <AlertDialog open={showResetDialog} onOpenChange={setShowResetDialog}>
              <AlertDialogContent>
                <AlertDialogTitle>Reset to Defaults?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will restore all questions, programs, schools, and scholarships to their original state. This action cannot be undone.
                </AlertDialogDescription>
                <div className="flex gap-3 justify-end">
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleReset} className="bg-destructive">
                    Reset
                  </AlertDialogAction>
                </div>
              </AlertDialogContent>
            </AlertDialog>
            <Button
              variant="outline"
              onClick={() => setShowResetDialog(true)}
              className="gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Reset to Defaults
            </Button>
            <Button
              variant="outline"
              onClick={onLogout}
              className="gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Card className="shadow-lg border-0 bg-card/95 backdrop-blur-sm">
          <CardContent className="pt-6">
            <Tabs defaultValue="questions" className="w-full">
              <TabsList className="grid w-full grid-cols-4 lg:w-auto mb-6">
                <TabsTrigger value="questions">Questions</TabsTrigger>
                <TabsTrigger value="programs">Programs</TabsTrigger>
                <TabsTrigger value="schools">Schools</TabsTrigger>
                <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
              </TabsList>

              <TabsContent value="questions" className="space-y-4">
                <AdminQuestionsEditor />
              </TabsContent>

              <TabsContent value="programs" className="space-y-4">
                <AdminProgramsEditor />
              </TabsContent>

              <TabsContent value="schools" className="space-y-4">
                <AdminSchoolsEditor />
              </TabsContent>

              <TabsContent value="scholarships" className="space-y-4">
                <AdminScholarshipsEditor />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
