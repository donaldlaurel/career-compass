"use client";

import { useState, useEffect } from "react";
import { AdminProvider } from "@/lib/admin-context";
import { Analytics } from "@vercel/analytics/next";

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <AdminProvider>
      {isMounted && children}
      <Analytics />
    </AdminProvider>
  );
}
