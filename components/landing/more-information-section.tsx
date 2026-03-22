"use client";

export function MoreInformationSection() {
  return (
    <section
      id="information"
      className="py-20 bg-gradient-to-b from-orange-50 to-yellow-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-5xl font-bold text-amber-900 mb-8 font-serif">
              MORE INFORMATION
            </h2>

            <p className="text-gray-700 text-justify leading-relaxed mb-6">
              Every student dreams of going to college and earning a degree.
              But this goal can be very hard to reach if students don&apos;t
              have enough preparation. For many Filipinos, one of the main
              reasons is financial constraints. Pagulayan et al. (2021) found
              that students whose parents earn more money are more ready for
              college. This is because families with more income can provide
              important learning tools, like technology, review materials, and
              access to review centers. Daway-Ducanes, Pernia, and Ramos (2022)
              also found that students from wealthier families are more likely
              to be accepted into the University of the Philippines, showing
              that money can affect educational opportunities.
            </p>

            <p className="text-gray-700 text-justify leading-relaxed">
              Another factor that hinders college preparedness is the low
              quality of high school education. According to a study, fewer
              than five out of every 1,000 senior high school students display
              the skills they are expected to have acquired after more than ten
              years of schooling. (Hernando-Malipot, 2026b) This lack of
              knowledge acquired from senior high school can affect their
              college preparedness, as college-level courses assume students
              have a certain foundation in core subjects.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-ZaEYWGizrjE85tVCoML0RR5HNYr53A.png"
              alt="Educational setting in the Philippines"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
