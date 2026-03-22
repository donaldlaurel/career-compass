"use client";

export function AboutUsSection() {
  const team = [
    {
      name: "Alliyah A. Cabrera",
      role: "Usability Tester",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-JRvaXbXalMcUUrdFg7dPFUGXArAwna.png",
    },
    {
      name: "Stephanne G. Laurel",
      role: "Graphic Designer",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-JRvaXbXalMcUUrdFg7dPFUGXArAwna.png",
    },
    {
      name: "Ket Henzel T. Trangia",
      role: "Content Development",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-JRvaXbXalMcUUrdFg7dPFUGXArAwna.png",
    },
    {
      name: "Ellyza Marie M. Villaceran",
      role: "Web Project Manager",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-JRvaXbXalMcUUrdFg7dPFUGXArAwna.png",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-blue-50 via-pink-50 to-yellow-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-amber-900 font-serif mb-4">
            About Us
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Thank you for visiting the Career Compass website. This form aims
            to gather feedback about the website&apos;s content, design, and
            usability. The website was created to help students explore college
            preparation, career guidance, and scholarship opportunities.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h3 className="text-5xl font-bold text-center text-pink-500 font-serif mb-12">
            Our Team
          </h3>

          <div className="bg-gradient-to-r from-pink-200 via-yellow-100 to-green-200 rounded-lg p-12">
            <div className="grid md:grid-cols-4 gap-8">
              {team.map((member, idx) => (
                <div key={idx} className="text-center">
                  <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-serif italic text-gray-900 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-700 font-semibold">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="max-w-2xl mx-auto bg-white border-4 border-blue-500 rounded-lg p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Website Feedback Form – Career Compass
          </h3>
          <p className="text-gray-700 mb-6">
            We value your feedback! Please share your thoughts about our
            website. Your input helps us improve and serve you better.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:border-blue-500 focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:border-blue-500 focus:outline-none"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Feedback
              </label>
              <textarea
                rows={5}
                className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:border-blue-500 focus:outline-none"
                placeholder="Share your feedback..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
