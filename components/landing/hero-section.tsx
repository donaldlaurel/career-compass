"use client";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-dmY1GpVvA4Lr7lCFltAWwFdc8neLVq.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <div className="text-sm font-semibold tracking-wide mb-4">SDG 4:</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
          QUALITY EDUCATION
        </h1>
        <div className="h-1 w-32 bg-white mx-auto mb-6"></div>
        <h2 className="text-4xl md:text-5xl font-bold text-pink-300 mb-4">
          BREAKING BARRIERS:
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          ACCESS TO COLLEGE PREPARATION AND CAREER GUIDANCE
        </h2>
      </div>
    </section>
  );
}
