import { useEffect, useRef } from "react";
import { featuresData } from "../../../mocks/features";

export default function FeaturesSection() {
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
      id="programa"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32"
    >
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="reveal opacity-0 translate-y-4 transition-all duration-700 text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 md:w-20 bg-background-700" />
              <h2 className="font-heading font-bold text-foreground-50 text-2xl md:text-4xl lg:text-5xl">
                Presentación del{" "}
                <span className="text-primary-500">Programa</span>
              </h2>
              <div className="h-px w-12 md:w-20 bg-background-700" />
            </div>
            <p className="text-foreground-500 text-sm md:text-base max-w-xl mx-auto">
              Un sistema 100% personalizado que se adapta a vos, a tu tiempo y a
              tu vida.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {featuresData.map((feature, index) => (
              <div
                key={feature.id}
                className={`reveal opacity-0 translate-y-4 transition-all duration-700 delay-${
                  (index + 1) * 100
                } group relative bg-background-900 border border-background-800/60 rounded-2xl p-6 md:p-8 hover:border-primary-500/30 hover:bg-background-900/80 transition-all duration-500`}
              >
                {/* Icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-5 group-hover:bg-primary-500/20 group-hover:border-primary-500/40 transition-all duration-500">
                  <i className={`${feature.icon} text-primary-400 text-xl md:text-2xl`} />
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-foreground-50 text-base md:text-lg mb-2 uppercase tracking-wide">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-foreground-500 text-xs md:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}