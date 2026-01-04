import { Navbar } from "./components/ui/Navbar";
import { ProjectCard } from "./components/ui/ProjectCard";
import { projectsData } from "./data/Project";
import { experienceData } from "./data/Experience";
import { ExperienceCard } from "./components/ui/ExperienceCard";
import { ExperienceTimelineItem } from "./components/ExperienceTimeLine";
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
              A Full Stack developer and a Student of Computer Engineering in
              <span className="text-blue-300"> University</span> of{" "}
              <span className="text-orange-300">Florida.</span>
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
        className="flex min-h-screen w-full flex-col text-center px-6 md:px-24 py-24 scroll-mt-24 items-center"
      >
        {/* Section Title */}
        <h2 className="relative top-0 left-0 text-4xl md:text-6xl font-bold tracking-tight text-white mb-12">
          About me
        </h2>

        {/* Content */}
        <div className="max-w-3xl space-y-6 text-base md:text-lg leading-relaxed text-gray-300">
          <p>
            I’m a Computer Engineering student who learns best by building
            things that actually work.
          </p>

          <p>
            My interest in engineering started from curiosity—how systems
            behave, how data flows, and why some designs scale while others
            break. Over time, that curiosity turned into hands-on projects: RBAC
            systems, message system, and authentication flows in multiple
            full-stack applications where performance and structure matter.
          </p>

          <p>
            I enjoy working close to the system level, but I also care deeply
            about user experience and product logic. Whether it’s designing a
            clean API, debugging a subtle bug, or refactoring a messy codebase,
            I value clarity, correctness, and long-term maintainability.
          </p>

          <p>
            I’m still learning—but I think like an engineer who wants to
            understand
            <span className="text-white font-medium"> why </span>
            things work, not just how to make them pass.
          </p>
        </div>
      </section>
      <section
        id="experience"
        className="relative max-w-5xl mx-auto min-h-screen scroll-mt-24"
      >
        <h2 className="text-4xl  md:text-6xl font-bold tracking-tight text-white mb-20">
          Experience Timeline
        </h2>

        <div className="flex flex-col justify-center min-h-[calc(100vh-10rem)]">
          <div className="absolute left-4 top-28 h-[calc(100%-7rem)] w-px bg-white/10" />

          <div className="flex flex-col gap-16">
            {experienceData.map((experience) => (
              <ExperienceTimelineItem
                key={experience.id}
                experience={experience}
              />
            ))}
          </div>
        </div>
      </section>
      <section
        id="projects"
        // Added padding and formatting to match the About section style
        className="flex min-h-screen flex-col px-6 md:px-24 py-24 scroll-mt-24"
      >
        {/* Section Title */}
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-20">
          Projects
        </h2>

        {/* Projects List */}
        <div className="flex flex-col">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              // Reverse layout for every second item (index 1, 3, 5...)
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </section>
      <section
        id="contact"
        className="min-h-screen flex items-center scroll-mt-24"
      >
        <div className="w-full max-w-5xl mx-auto px-6">
          {/* Title */}
          <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
            Contact
          </h2>

          {/* Subtitle */}
          <p className="text-gray-400 max-w-2xl mb-16">
            Interested in working together, discussing projects, or just having
            a conversation? Feel free to reach out — I’m always open to
            meaningful connections.
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <a
              href="mailto:zhuen.zhong06@gmail.com"
              className="group rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition">
                zhuen.zhong06@gmail.com
              </p>
            </a>

            {/* LinkedIn / GitHub */}
            <a
              href="https://www.linkedin.com/in/alexzhonn/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                LinkedIn
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition">
                https://www.linkedin.com/in/alexzhonn/
              </p>
            </a>
          </div>

          {/* Optional Footer Line */}
          <p className="text-sm text-gray-500 mt-16">
            Based in the U.S. · Open to internships, full-time roles, and
            collaborations
          </p>
        </div>
      </section>
    </>
  );
}
