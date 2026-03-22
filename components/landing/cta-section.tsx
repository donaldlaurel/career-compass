"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CallToActionSection() {
  return (
    <section
      id="cta"
      className="py-20 bg-gradient-to-b from-green-50 to-blue-50"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-8 font-serif">
          Ready to Take Your First Step?
        </h2>

        <p className="text-xl text-gray-700 mb-12 leading-relaxed">
          Join thousands of students who are already charting their path to
          success with Career Compass. Take our diagnostic quiz to discover
          your career direction and access personalized guidance tailored to
          your unique strengths and interests.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/assessment">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 rounded-full text-lg font-semibold">
              Start Assessment Now
            </Button>
          </Link>

          <Button
            variant="outline"
            className="border-2 border-gray-900 text-gray-900 px-8 py-6 rounded-full text-lg font-semibold hover:bg-gray-100"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
