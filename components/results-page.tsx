"use client";

import { ResultsData } from "@/lib/quiz-engine";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Award, RotateCcw } from "lucide-react";

interface ResultsPageProps {
  data: ResultsData;
  onRetake: () => void;
}

export function ResultsPage({ data, onRetake }: ResultsPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 p-3 bg-primary/10 rounded-full">
            <GraduationCap className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
            Your Career Recommendations
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Based on your responses, here are personalized college programs, schools, and scholarship opportunities to explore
          </p>
        </div>

        {/* Programs Section */}
        <Card className="shadow-lg border-0 bg-card/95 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl">Recommended Degree Programs</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Bachelor's degree programs matching your profile
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {data.recommendedPrograms.map((program, idx) => {
                // Extract degree type (BS, BA, BEd, BFA, etc.)
                const degreeMatch = program.match(/^(BS|BA|BEd|BFA|BHM|BComm|BJD)/);
                const degreeType = degreeMatch ? degreeMatch[1] : "B.S.";
                const programName = program.replace(/^(BS|BA|BEd|BFA|BHM|BComm|BJD)\s/, "");

                return (
                  <div
                    key={idx}
                    className="p-4 bg-gradient-to-br from-secondary to-background rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <Badge className="mt-1 bg-primary text-primary-foreground text-xs font-bold">
                        {degreeType}
                      </Badge>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground text-sm">
                          {programName}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm font-medium text-foreground">
                <span className="text-primary font-bold">Your Top Fields:</span> {data.topCategories.join(", ")}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Schools Section */}
        <Card className="shadow-lg border-0 bg-card/95 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl">Universities in {data.selectedLocation}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Leading institutions offering your recommended programs
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.recommendedSchools.map((school, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-gradient-to-br from-secondary to-background rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all"
                >
                  <h4 className="font-bold text-lg text-foreground mb-3">{school.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {school.programs.map((prog, i) => (
                      <Badge
                        key={i}
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {prog}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Scholarships Section */}
        <Card className="shadow-lg border-0 bg-card/95 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl">Scholarship Opportunities</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Financial aid programs matched to your profile
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.recommendedScholarships.length > 0 ? (
                data.recommendedScholarships.map((scholarship, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-gradient-to-br from-secondary to-background rounded-xl border border-border hover:border-primary/50 transition-all"
                  >
                    <h4 className="font-bold text-lg text-foreground mb-2">
                      {scholarship.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {scholarship.description}
                    </p>
                    <p className="text-xs text-muted-foreground p-3 bg-muted/50 rounded-lg">
                      <span className="font-semibold text-foreground">Requirements:</span> {scholarship.requirements}
                    </p>
                  </div>
                ))
              ) : (
                <div className="p-6 bg-muted/30 rounded-xl border border-border text-center">
                  <p className="text-muted-foreground">
                    Check your chosen universities' websites for additional scholarship options.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button
            onClick={onRetake}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 shadow-lg px-8"
            size="lg"
          >
            <RotateCcw className="mr-2 h-5 w-5" />
            Retake Quiz
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.print()}
            className="h-12 px-8 font-semibold"
          >
            Print Results
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-muted-foreground border-t border-border pt-8 space-y-2">
          <p className="font-medium">Email: {data.email}</p>
          <p className="leading-relaxed max-w-2xl mx-auto">
            This assessment provides general guidance based on your responses. We recommend consulting with your school counselors for comprehensive career planning and exploring each institution's offerings in detail.
          </p>
        </div>
      </div>
    </div>
  );
}
