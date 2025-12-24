import { Navbar } from "./components/ui/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col justify-center px-6 md:px-24">
        <div className="max-w-4xl space-y-8 mt-20">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Hi, My Name is Zhuen Zhong
          </h1>

          {/* Subtitle / Description */}
          <div className="space-y-2 text-lg md:text-xl text-gray-400">
            <p>
              A Full Stack developer, a Student of Computer Engineering, and a
              Believer in Jesus Christ.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            {/* Primary Button (White) */}
            <button className="group relative h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
              {/* Triangle Icon */}
              Explore
              <span className="rotate-180 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-black transform group-hover:-translate-y-0.5 transition-transform"></span>
            </button>
          </div>
        </div>

        {/* Background Gradient Effect (Optional Subtle Glow) */}
        <div className="fixed top-0 left-0 -z-10 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
      </main>
      <section
        id="about"
        className="flex min-h-screen flex-col justify-center scroll-mt-24"
      >
        Placeholder - About Me
      </section>
      <section
        id="experience"
        className="flex min-h-screen flex-col justify-center scroll-mt-24"
      >
        Placeholder - Experience
      </section>
      <section id="projects" className="min-h-screen">
        ...
      </section>
      <section id="contact" className="min-h-screen">
        ...
      </section>
    </>
  );
}
