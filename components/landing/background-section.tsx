"use client";

export function BackgroundSection() {
  return (
    <section
      id="background"
      className="py-20 bg-gradient-to-b from-white to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-jEevfoAKkvvzAGppmVAUZA7fKCph6H.png"
              alt="Classroom setting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-5xl font-bold text-amber-900 mb-8 font-serif">
              BACKGROUND OF THE ISSUE
            </h2>

            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Understanding the Problem
                </h3>
                <p className="text-justify leading-relaxed">
                  Many students face challenges in accessing college due to
                  limited preparation, guidance, and financial resources.
                  Despite efforts of the United Nations under SDG 4, these
                  barriers still affect learners, especially in the Philippines.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Additional Information
                </h3>
                <p className="text-justify mb-4">
                  Students often struggle with:
                </p>
                <ul className="space-y-2 text-justify">
                  <li className="flex gap-3">
                    <span className="font-bold">•</span>
                    <span>Limited knowledge about college application processes</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">•</span>
                    <span>Lack of career guidance and direction</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">•</span>
                    <span>Financial and socioeconomic barriers</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">•</span>
                    <span>Insufficient academic preparation</span>
                  </li>
                </ul>
              </div>

              <p className="text-justify text-sm text-gray-600 border-t-2 border-amber-200 pt-4">
                Reports from UNESCO emphasize that gaps in access and
                readiness remain major issues in education systems worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
