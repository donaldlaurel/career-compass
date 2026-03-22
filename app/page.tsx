"use client";

import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { BackgroundSection } from "@/components/landing/background-section";
import { MoreInformationSection } from "@/components/landing/more-information-section";
import { WhatWeDoSection } from "@/components/landing/what-we-do-section";
import { CallToActionSection } from "@/components/landing/cta-section";
import { AboutUsSection } from "@/components/landing/about-us-section";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { AdminDashboard } from "@/components/admin-dashboard";
import { useState } from "react";

export default function Home() {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Admin button */}
      {!showAdmin && (
        <div className="fixed bottom-4 right-4 z-40">
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

      {/* Admin view */}
      {showAdmin && (
        <div>
          <AdminDashboard onLogout={() => setShowAdmin(false)} />
        </div>
      )}

      {/* Landing page */}
      {!showAdmin && (
        <>
          <Navbar />
          <HeroSection />
          <BackgroundSection />
          <MoreInformationSection />
          <WhatWeDoSection />
          <CallToActionSection />
          <AboutUsSection />
        </>
      )}
    </div>
  );
}

