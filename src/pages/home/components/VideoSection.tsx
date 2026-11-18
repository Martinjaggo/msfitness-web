import { useEffect, useRef, useState } from "react";
import thumbnail from "../../../assets/vsl-thumbnail.png";

export default function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

 const openCalendly = () => {
  if (typeof (window as any).fbq === "function") {
    (window as any).fbq("trackCustom", "Schedule_Click", {
      programa: "ELITE_90"
    });
  }

  window.open(
    "https://calendly.com/msfitnessamonta/callprivada",
    "_blank",
    "noopener,noreferrer"
  );
};

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
      className="relative bg-white py-20 md:py-28 lg:py-32 scroll-mt-20"
    >
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">

          {/* Section Header */}
          <div className="reveal opacity-0 translate-y-4 transition-all duration-700 text-center mb-10 md:mb-14">

            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-8 md:w-16 bg-gray-300" />

              <h2 className="font-heading font-bold text-gray-950 text-2xl md:text-4xl lg:text-5xl">
                Cómo Funciona el{" "}
                <span className="text-primary-500">
                  Programa
                </span>
              </h2>

              <div className="h-px w-8 md:w-16 bg-gray-300" />
            </div>

            <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
              Conocé cómo trabajamos durante los 90 días para ayudarte a alcanzar tus objetivos.
            </p>

          </div>

          {/* Video */}
          <div className="reveal opacity-0 translate-y-4 transition-all duration-700 delay-200">

            <div
              className="relative aspect-video bg-gray-950 rounded-2xl md:rounded-3xl border border-gray-200 overflow-hidden group cursor-pointer shadow-2xl"
              onClick={() => {
  if (!isPlaying) {
    setIsPlaying(true);

    if (typeof (window as any).fbq === "function") {
      (window as any).fbq("trackCustom", "VSL_Play", {
        video: "ELITE_90"
      });
    }
  }
}}
            >

              {!isPlaying ? (
                <>
                  <img
                    src={thumbnail}
                    alt="Video presentación ELITE 90 MSFITNESS"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Play Button con resplandor azul */}
<div className="absolute inset-0 flex items-center justify-center">

  <div className="relative flex items-center justify-center">

    {/* Halo luminoso animado */}
    <div className="absolute w-24 h-24 md:w-28 md:h-28 rounded-full bg-blue-500/40 blur-xl animate-pulse pointer-events-none" />

    {/* Resplandor exterior */}
    <div className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full shadow-[0_0_35px_12px_rgba(59,130,246,0.45)] pointer-events-none" />

    {/* Botón Play */}
    <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary-500 border-4 border-white/30 flex items-center justify-center shadow-xl group-hover:bg-primary-600 group-hover:scale-110 transition-all duration-300">

      <i className="ri-play-fill text-white text-3xl md:text-4xl ml-1" />

    </div>

  </div>

</div>

                  {/* Video Info */}
                  <div className="absolute bottom-4 left-4 right-4">

                    <div className="flex items-center gap-3">

                      <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center">
                        <i className="ri-video-line text-primary-400 text-sm" />
                      </div>

                      <div>
                        <p className="text-white text-sm font-medium">
                          Video explicativo
                        </p>

                        <p className="text-gray-400 text-xs">
                          3 minutos
                        </p>
                      </div>

                    </div>

                  </div>
                </>
              ) : (
                <div className="absolute inset-0 bg-black">

                  <iframe
                    src="https://www.youtube.com/embed/94SQYkjmqUQ?autoplay=1&rel=0"
                    title="Video ELITE 90"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />

                </div>
              )}

            </div>

          </div>

          {/* CTA después de la VSL */}
          <div className="reveal opacity-0 translate-y-4 transition-all duration-700 delay-300 text-center mt-10 md:mt-12">

            <h3 className="font-heading font-bold text-gray-950 text-xl md:text-2xl mb-4">
              ¿LISTO PARA EMPEZAR TU TRANSFORMACIÓN?
            </h3>

            <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-8">
              Agendá una llamada conmigo para conversar sobre tus objetivos
              y evaluar si ELITE 90 es el programa adecuado para vos.
            </p>

            <button
              onClick={openCalendly}
              className="group inline-flex items-center gap-3 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full text-sm md:text-base font-semibold tracking-wide uppercase transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Agendar llamada
              <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="mt-4 text-gray-500 text-xs md:text-sm">
              Videollamada inicial sin costo
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
