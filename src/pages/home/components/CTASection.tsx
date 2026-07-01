import { useEffect, useRef } from "react";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const openCalendly = () => {
    window.open("https://calendly.com/msfitnessamonta/callprivada", "_blank", "noopener,noreferrer");
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(var(--primary-900)_/_0.12)_0%,_transparent_70%)]" />

      <div className="relative z-10 w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="reveal opacity-0 translate-y-4 transition-all duration-700">
            <h2 className="font-heading font-bold text-foreground-50 text-3xl md:text-5xl lg:text-6xl uppercase tracking-wide leading-tight">
              EL CAMBIO EMPIEZA CON UNA
              <br />
              <span className="text-blue-500">DECISIÓN</span>
            </h2>
          </div>

          <div className="reveal opacity-0 translate-y-4 transition-all duration-700 delay-200 mt-6">
            <p className="text-foreground-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Descubrí si ELITE 90 es para vos
            </p>
          </div>

          <div className="reveal opacity-0 translate-y-4 transition-all duration-700 delay-300 mt-10">
            <button
              onClick={openCalendly}
              className="group inline-flex items-center gap-4 bg-background-950 border border-background-700 hover:border-primary-500/40 text-foreground-50 pl-2 pr-6 py-2 rounded-full transition-all duration-500 hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center group-hover:bg-primary-400 transition-colors">
                <i className="ri-phone-line text-background-50 text-lg" />
              </div>
              <span className="text-sm md:text-base font-semibold uppercase tracking-wide">
                Agendar Llamada
              </span>
              <i className="ri-arrow-right-up-line text-foreground-400 text-lg group-hover:text-foreground-50 transition-colors" />
            </button>
            <p className="mt-4 text-foreground-600 text-xs md:text-sm">
              Sin costo · Solo para candidatos serios
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}