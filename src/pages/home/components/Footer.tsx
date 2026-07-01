export default function Footer() {
  return (
    <footer id="contacto" className="relative bg-background-950 border-t border-background-800/40">
      <div className="w-full px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 md:mb-12">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary-500 flex items-center justify-center">
                <span className="text-background-50 font-heading font-bold text-sm">
                  E
                </span>
              </div>
              <span className="font-heading font-semibold text-foreground-50 text-lg tracking-tight">
                Elite<span className="text-primary-500">90</span>
              </span>
            </div>
            <p className="text-foreground-600 text-sm max-w-md">
              Programa de transformación física personalizado. Resultados reales
              en 90 días con acompañamiento profesional.
            </p>
          </div>

          {/* Middle row - Social only */}
          <div className="pt-8 border-t border-background-800/40">
            <div className="flex flex-col items-center gap-4">
              <h4 className="text-foreground-50 text-sm font-semibold uppercase tracking-wide">
                Seguime
              </h4>
              <div className="flex items-center gap-3">
                {[
                  { icon: "ri-instagram-line", label: "Instagram", href: "https://www.instagram.com/martinsamontafitness/" },
                  { icon: "ri-youtube-line", label: "YouTube", href: "https://www.youtube.com/@MartinSamontaFitness" },
                  { icon: "ri-tiktok-line", label: "TikTok", href: "https://www.tiktok.com/@martinsamontafitness" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-background-900 border border-background-800/60 flex items-center justify-center text-foreground-600 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <i className={`${social.icon} text-lg`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-10 md:mt-12 pt-8 border-t border-background-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-foreground-700 text-xs md:text-sm">
              © {new Date().getFullYear()} Elite90. Todos los derechos
              reservados.
            </p>
            <p className="text-foreground-700 text-xs md:text-sm">
              Diseñado para resultados reales.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}