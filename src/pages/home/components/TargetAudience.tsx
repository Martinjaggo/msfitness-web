import { useEffect, useRef } from "react";
import { targetAudienceData } from "../../../mocks/targetAudience";

export default function TargetAudience() {
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
    <section ref={sectionRef} className="relative py-20 md:py-28">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="reveal opacity-0 translate-y-4 transition-all duration-700 text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 md:w-20 bg-background-700" />
              <h2 className="font-heading font-bold text-foreground-50 text-2xl md:text-4xl lg:text-5xl">
                ¿Este Programa es{" "}
                <span className="text-primary-500">para Vos?</span>
              </h2>
              <div className="h-px w-12 md:w-20 bg-background-700" />
            </div>
          </div>

          <div className="reveal opacity-0 translate-y-4 transition-all duration-700 delay-200 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* YES Card */}
            <div className="bg-background-900 border border-primary-500/20 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary-500/15 border border-primary-500/30 flex items-center justify-center">
                  <i className="ri-check-line text-primary-400 text-lg" />
                </div>
                <h3 className="font-heading font-bold text-primary-400 text-base md:text-lg uppercase tracking-wide">
                  Sí, es para vos si...
                </h3>
              </div>

              <ul className="space-y-4">
                {targetAudienceData.yes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-primary-400 text-xs" />
                    </div>
                    <span className="text-foreground-400 text-sm md:text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NO Card */}
            <div className="bg-background-900 border border-red-500/20 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center">
                  <i className="ri-close-line text-red-400 text-lg" />
                </div>
                <h3 className="font-heading font-bold text-red-400 text-base md:text-lg uppercase tracking-wide">
                  No es para vos si...
                </h3>
              </div>

              <ul className="space-y-4">
                {targetAudienceData.no.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-close-line text-red-400 text-xs" />
                    </div>
                    <span className="text-foreground-500 text-sm md:text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}