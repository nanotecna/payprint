import { ChevronRight } from "lucide-react"

const services = [
  {
    title: "Kit Inaugural",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden="true">
        <rect x="8" y="12" width="20" height="24" rx="2" fill="none" stroke="white" strokeWidth="2" />
        <rect x="20" y="8" width="20" height="24" rx="2" fill="none" stroke="white" strokeWidth="2" />
        <path d="M14 20h8M14 24h6" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Campanhas Sazonais",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden="true">
        <path d="M24 8 L28 16 L20 16 Z" fill="none" stroke="white" strokeWidth="2" />
        <path d="M16 20 L32 20 M12 28 L36 28" stroke="white" strokeWidth="2" />
        <circle cx="24" cy="36" r="4" fill="none" stroke="white" strokeWidth="2" />
        <path d="M20 36h-6M28 36h6" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Papelaria",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden="true">
        <path d="M16 8c0 0-4 8-4 16s4 16 4 16" fill="none" stroke="white" strokeWidth="2" />
        <path d="M32 8c0 0 4 8 4 16s-4 16-4 16" fill="none" stroke="white" strokeWidth="2" />
        <line x1="16" y1="8" x2="32" y2="8" stroke="white" strokeWidth="2" />
        <line x1="16" y1="40" x2="32" y2="40" stroke="white" strokeWidth="2" />
        <line x1="14" y1="24" x2="34" y2="24" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Brindes Personalizados",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden="true">
        <rect x="10" y="20" width="28" height="20" rx="2" fill="none" stroke="white" strokeWidth="2" />
        <path d="M24 12 L24 20" stroke="white" strokeWidth="2" />
        <path d="M16 20 C16 14 24 12 24 12 C24 12 32 14 32 20" fill="none" stroke="white" strokeWidth="2" />
        <line x1="10" y1="28" x2="38" y2="28" stroke="white" strokeWidth="1.5" />
        <line x1="24" y1="20" x2="24" y2="40" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "PDV",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden="true">
        <circle cx="24" cy="20" r="12" fill="none" stroke="white" strokeWidth="2" />
        <path d="M18 20 L22 24 L30 16" stroke="white" strokeWidth="2" fill="none" />
        <path d="M16 34 L24 38 L32 34" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    title: "Comunicacao Visual",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden="true">
        <rect x="8" y="10" width="32" height="20" rx="2" fill="none" stroke="white" strokeWidth="2" />
        <line x1="18" y1="30" x2="18" y2="38" stroke="white" strokeWidth="2" />
        <line x1="30" y1="30" x2="30" y2="38" stroke="white" strokeWidth="2" />
        <line x1="12" y1="38" x2="36" y2="38" stroke="white" strokeWidth="2" />
        <path d="M14 16h20M14 22h12" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
]

export function ServicesSection() {
  return (
    <section id="o-que-fazemos" className="py-20 bg-[#f0f2ff]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a237e] mb-3">O Que Fazemos</h2>
        <p className="text-[#0a0a2e] mb-12 text-base">
          Tudo o que a sua franquia precisa, em um so parceiro
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col items-center gap-3">
              <span className="text-xs sm:text-sm font-semibold text-[#0a0a2e] text-center min-h-[2.5rem] flex items-end">
                {service.title}
              </span>
              <div className="w-20 h-20 rounded-full bg-[#1a237e] flex items-center justify-center hover:bg-[#2962ff] transition-colors cursor-pointer">
                {service.icon}
              </div>
            </div>
          ))}
        </div>

        <a
          href="#contato"
          className="inline-flex items-center gap-2 border-2 border-[#0a0a2e] text-[#0a0a2e] font-bold px-6 py-3 rounded text-sm hover:bg-[#0a0a2e] hover:text-white transition-colors"
        >
          SOLICITE SEU ATENDIMENTO PERSONALIZADO
          <ChevronRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
