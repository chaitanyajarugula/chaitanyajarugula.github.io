import { useState, useEffect } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-900/80 backdrop-blur-lg border-b border-neon-cyan/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#about" className="flex items-center gap-2 group">
          <span className="font-mono text-neon-cyan text-sm">&lt;</span>
          <span className="font-mono text-white text-sm tracking-wider group-hover:text-neon-cyan transition-colors">
            CJ
          </span>
          <span className="font-mono text-neon-cyan text-sm">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 font-mono text-xs tracking-widest uppercase text-gray-400 hover:text-neon-cyan transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-neon-cyan transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://drive.google.com/file/d/1pimryeXBeXuan4kmVuwdzSObrsMx-rUe/view?usp=sharing"
            className="neon-btn text-xs"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-px bg-neon-cyan transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`w-5 h-px bg-neon-cyan transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-dark-900/95 backdrop-blur-lg border-t border-neon-cyan/10 ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-xs tracking-widest uppercase text-gray-400 hover:text-neon-cyan py-2 transition-colors"
            >
              <span className="text-neon-green mr-2">&gt;</span>
              {link.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1pimryeXBeXuan4kmVuwdzSObrsMx-rUe/view?usp=sharing"
            className="neon-btn text-xs text-center mt-2"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};
export default Nav;
