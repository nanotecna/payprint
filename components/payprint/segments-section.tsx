import Image from "next/image"
import { ChevronRight } from "lucide-react"

const segments = [
  { name: "Medicina", image: "/images/medicina.jpg" },
  { name: "Estética", image: "/images/estetica.jpg" },
  { name: "Odontologia", image: "/images/odontologia.jpg" },
  { name: "Moda", image: "/images/moda.jpg" },
  { name: "Embalagens e Delivery", image: "/images/embalagens.jpg" },
  { name: "Serviços", image: "/images/servicos.jpg" },
  { name: "Saúde, Beleza e Bem-estar", image: "/images/saude-beleza.jpg" },
]

export function SegmentsSection() {
  return (
    <section id="segmentos" className="py-20 bg-[#f0f2ff]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold italic text-[#1a237e] mb-3">
          Segmentos Atendidos
        </h2>
        <p className="text-[#0a0a2e] mb-12 text-base">
          Setores que confiam na PayPrint
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {segments.map((segment) => (
            <div key={segment.name} className="flex flex-col items-center gap-3 group cursor-pointer">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#2962ff]/20 group-hover:border-[#2962ff] transition-colors">
                <Image
                  src={segment.image}
                  alt={segment.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-sm font-semibold text-[#0a0a2e] text-center">
                {segment.name}
              </span>
            </div>
          ))}
        </div>

        <a
          href="#contato"
          className="inline-flex items-center gap-2 border-2 border-[#0a0a2e] text-[#0a0a2e] font-bold px-6 py-3 rounded-[40px] text-sm hover:bg-[#0a0a2e] hover:text-white transition-colors"
        >
          SAIBA QUEM SÃO NOSSOS PARCEIROS
          <ChevronRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
