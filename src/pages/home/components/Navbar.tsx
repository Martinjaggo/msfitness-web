import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background-950/95 backdrop-blur-md border-b border-background-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-center h-16 md:h-20">
          <span className="font-heading font-semibold text-foreground-50 text-base md:text-lg tracking-tight">
            MSFITNESS
          </span>
        </div>
      </div>
    </nav>
  );
}