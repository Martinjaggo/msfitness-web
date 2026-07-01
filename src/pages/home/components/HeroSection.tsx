import { useEffect, useRef } from "react";

export default function HeroSection() {
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
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-background-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(var(--primary-900)_/_0.15)_0%,_transparent_70%)]" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(var(--primary-500)) 1px, transparent 1px), linear-gradient(90deg, oklch(var(--primary-500)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full px-4 md:px-8 lg:px-12 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label pill */}
          <div className="reveal opacity-0 translate-y-4 transition-all duration-700 delay-100">
            <span className="inline-flex items-center gap-2 border border-primary-500/30 bg-primary-500/10 text-primary-400 text-xs md:text-sm font-medium tracking-wide uppercase px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              Programa de Transformación
            </span>
          </div>

          {/* Main Title */}
          <div className="reveal opacity-0 translate-y-4 transition-all duration-700 delay-200 mt-8">
            <h1 className="font-heading font-bold text-foreground-50 text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none">
              ÉLITE
            </h1>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span
                className="font-heading font-light text-5xl md:text-7xl lg:text-8xl tracking-tight animate-pulse"
                style={{
                  color: "oklch(var(--primary-400))",
                  textShadow: `
                    0 0 7px oklch(var(--primary-400)),
                    0 0 10px oklch(var(--primary-400)),
                    0 0 21px oklch(var(--primary-400)),
                    0 0 42px oklch(var(--primary-500) / 0.6),
                    0 0 82px oklch(var(--primary-500) / 0.4),
                    0 0 102px oklch(var(--primary-500) / 0.2)
                  `,
                }}
              >
                90
              </span>
            </div>
          </div>

          {/* Subtitle */}
          <div className="reveal opacity-0 translate-y-4 transition-all duration-700 delay-300 mt-6 md:mt-8">
            <p className="text-foreground-300 text-base md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
              Convertí tus hábitos en resultados.
              <br />
              Con un sistema simple y efectivo en{" "}
              <span className="text-foreground-50 font-semibold">90 días</span>.
            </p>
          </div>

          {/* Trust badges */}
          <div className="reveal opacity-0 translate-y-4 transition-all duration-700 delay-400 mt-8 md:mt-10">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {[
                { icon: "ri-medal-line", label: "Resultados", sub: "Reales" },
                { icon: "ri-shield-check-line", label: "Método", sub: "Probado" },
                { icon: "ri-user-star-line", label: "Acompañamiento", sub: "Total" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2.5 text-foreground-400"
                >
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                    <i className={`${badge.icon} text-primary-400 text-sm md:text-base`} />
                  </div>
                  <div className="text-left">
                    <div className="text-foreground-50 text-xs md:text-sm font-semibold uppercase tracking-wide">
                      {badge.label}
                    </div>
                    <div className="text-foreground-500 text-[10px] md:text-xs uppercase tracking-wide">
                      {badge.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="reveal opacity-0 translate-y-4 transition-all duration-700 delay-500 mt-8 md:mt-10">
            <button
              onClick={openCalendly}
              className="group inline-flex items-center gap-3 bg-primary-500 hover:bg-primary-600 text-background-50 px-8 py-4 rounded-full text-sm md:text-base font-semibold tracking-wide uppercase transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              Agendar Llamada
              <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-3 text-foreground-600 text-xs md:text-sm">
              Sin costo · Solo para candidatos serios
            </p>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-950 to-transparent pointer-events-none" />
    </section>
  );
}