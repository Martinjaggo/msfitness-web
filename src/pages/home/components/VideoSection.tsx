import { useEffect, useRef, useState } from "react";
import thumbnail from "../../../assets/vsl-thumbnail.png";

export default function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
      id="video"
      ref={sectionRef}
      className="relative py-16 md:py-24"
    >
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="reveal opacity-0 translate-y-4 transition-all duration-700 text-center mb-10 md:mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 md:w-20 bg-background-700" />
              <h2 className="font-heading font-bold text-foreground-50 text-2xl md:text-4xl lg:text-5xl whitespace-nowrap">
                Cómo Funciona el{" "}
                <span className="text-primary-500">Programa</span>
              </h2>
              <div className="h-px w-12 md:w-20 bg-background-700" />
            </div>
          </div>

          {/* Video Centered */}
          <div className="reveal opacity-0 translate-y-4 transition-all duration-700 delay-200">
            <div
              className="relative aspect-video bg-background-900 rounded-2xl md:rounded-3xl border border-background-800/60 overflow-hidden group cursor-pointer"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {!isPlaying ? (
                <>
                  <img
  src={thumbnail}
  alt="Video presentación MSFITNESS"
  className="absolute inset-0 w-full h-full object-cover"
/>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center group-hover:bg-primary-500/30 group-hover:scale-110 transition-all duration-300">
                      <i className="ri-play-fill text-primary-400 text-2xl md:text-3xl ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center">
                        <i className="ri-video-line text-primary-400 text-sm" />
                      </div>
                      <div>
                        <p className="text-foreground-50 text-sm font-medium">Video explicativo</p>
                        <p className="text-foreground-600 text-xs">3 minutos</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 bg-background-950">
                  <iframe
                    src="https://www.youtube.com/embed/UIckZNC5r_0?autoplay=1&rel=0"
                    title="Video ELITE 90"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}