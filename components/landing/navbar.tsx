"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 bg-gradient-to-r from-pink-200 via-yellow-100 to-green-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12">
            <Image
              src="/logo.png"
              alt="Career Compass Logo"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <div className="font-bold text-xl text-amber-900">CAREER</div>
            <div className="font-bold text-xl text-amber-900">COMPASS</div>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 items-center text-amber-900 font-semibold">
          <a href="#home" className="hover:underline">
            HOME
          </a>
          <a href="#background" className="hover:underline">
            BACKGROUND OF THE ISSUE
          </a>
          <a href="#information" className="hover:underline">
            MORE INFORMATION
          </a>
          <a href="#assessment" className="hover:underline">
            ASSESSMENT
          </a>
          <a href="#cta" className="hover:underline">
            CALL TO ACTION
          </a>
          <a href="#about" className="hover:underline">
            ABOUT US
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="sm" className="md:hidden">
          Menu
        </Button>
      </div>
    </nav>
  );
}
