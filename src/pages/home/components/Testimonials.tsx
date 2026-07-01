import { useEffect, useRef } from "react";
import { testimonialsData } from "../../../mocks/testimonials";

export default function Testimonials() {
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

  return (
    <section
      id="testimonios"
      ref={sectionRef}
      className="relative py-20 md:py-28"
    >
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="reveal opacity-0 translate-y-4 transition-all duration-700 text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 md:w-20 bg-background-700" />
              <h2 className="font-heading font-bold text-foreground-50 text-2xl md:text-4xl lg:text-5xl">
                La experiencia de quienes confiaron en{" "}
                <span className="text-primary-400 drop-shadow-[0_0_12px_rgba(96,165,250,0.5)]">ELITE 90</span>
              </h2>
              <div className="h-px w-12 md:w-20 bg-background-700" />
            </div>
          </div>

          {/* Testimonials Grid - Masonry-like 3 columns */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-5 space-y-4 md:space-y-5">
            {testimonialsData.map((t, index) => (
              <div
                key={t.id}
                className={`reveal opacity-0 translate-y-4 transition-all duration-700 break-inside-avoid bg-background-900 border border-background-800/60 rounded-2xl p-5 md:p-6 hover:border-primary-500/20 transition-all duration-500`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center flex-shrink-0">
                    <span className="text-background-50 font-bold text-sm">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <div className="text-foreground-50 text-sm font-semibold">
                      {t.name}
                    </div>
                    <div className="text-foreground-600 text-xs">
                      {t.age} años
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <i
                      key={i}
                      className="ri-star-fill text-primary-500 text-xs"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground-400 text-sm leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}