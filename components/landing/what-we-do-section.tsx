"use client";

export function WhatWeDoSection() {
  return (
    <section
      id="what-we-do"
      className="py-20 bg-gradient-to-b from-yellow-50 to-green-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero text with background */}
        <div
          className="relative rounded-lg h-64 flex items-center justify-center mb-16 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-d8HYCq0Yxme2yE9dsi8HFQbzobcPTW.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
          <h2 className="relative text-5xl font-bold text-white text-center text-balance">
            Stop letting circumstances choose your direction. Grab your Career
            Compass and chart your own path to success.
          </h2>
        </div>

        {/* Main content */}
        <div className="bg-gradient-to-b from-green-100 to-green-50 rounded-lg p-12 mb-12">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-2">
            What do we do ?
          </h2>
          <div className="h-1 w-24 bg-pink-400 mx-auto mb-8"></div>

          <p className="text-center text-gray-700 text-lg mb-4">
            Even when students think they&apos;ve hit a dead end or there&apos;s
            no other &quot;practical&quot; course left to choose from, we
            believe that a personalized roadmap to success is the best way to
            overcome this obstacle.
          </p>

          <p className="text-center font-bold text-gray-900 text-lg mb-8">
            Through the help of the following:
          </p>

          {/* Three pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-yellow-100 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                EXPERT-LED INTERVIEWS
              </h3>
              <p className="text-gray-700">
                Direct guidance from career professionals to help you explore
                opportunities
              </p>
            </div>

            <div className="bg-pink-200 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                DIAGNOSTIC QUIZZES
              </h3>
              <p className="text-gray-700">
                Personalized assessments to identify your strengths and
                interests
              </p>
            </div>

            <div className="bg-green-100 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                STRAND-SPECIFIC SEMINARS
              </h3>
              <p className="text-gray-700">
                Tailored workshops for your academic and career path
              </p>
            </div>
          </div>

          <p className="text-center text-gray-700 text-lg">
            We offer a multi-dimensional guidance system that helps students
            navigate their future with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
