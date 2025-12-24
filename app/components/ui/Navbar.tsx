import Link from "next/link";

/**
 * A navigation bar component, mimicking the Next.js logo style.
 * Includes optional right side links to different sections of the page.
 */
export function Navbar() {
  return (
    <nav className="absolute top-0 w-full p-6 md:p-12 flex justify-between items-center z-10 border-b">
      {/* Logo mimicking the Next.js logo style */}
      <Link href="/" className="text-2xl font-bold tracking-tighter">
        Zhuen<span className="font-light text-gray-400"> Zhong</span>
      </Link>

      {/* Optional Right Side Links */}
      <div className="hidden md:flex gap-6 text-sm text-gray-400">
        <a href="/#about" className="hover:text-white transition-colors">
          About
        </a>
        <a href="#experience" className="hover:text-white transition-colors">
          Experience
        </a>
        <a href="#projects" className="hover:text-white transition-colors">
          Projects
        </a>
        <a href="#contact" className="hover:text-white transition-colors">
          Contact
        </a>
      </div>
    </nav>
  );
}
