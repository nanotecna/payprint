import Image from "next/image"
import { ChevronRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-[#0a0a2e] overflow-hidden">
      {/* Background pattern image */}
      <Image
        src="/images/hero-pattern.png"
        alt=""
        fill
        className="object-cover opacity-60"
        priority
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[500px] py-16">
          {/* Text Content */}
          <div className="text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-balance">
              A SOLUCAO{" "}
              <span className="text-white">
                COMPLETA PARA
                <br />
                REDES DE FRANQUIAS
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-blue-100 leading-relaxed max-w-lg">
              Padronize, personalize e abasteca todas as unidades da sua rede com agilidade, controle e qualidade — tudo em um so lugar.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1a237e] font-bold px-6 py-3 rounded text-sm hover:bg-blue-50 transition-colors"
              >
                FALE COM UM CONSULTOR
                <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="#o-que-fazemos"
                className="inline-flex items-center justify-center text-sm text-white underline underline-offset-4 hover:text-blue-200 transition-colors"
              >
                ou Conheca a Plataforma
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden md:block">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/hero-bg.jpg"
                alt="Equipe PayPrint"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a2e]/60 to-transparent" />
            </div>
            {/* Dot decoration */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-30">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: "radial-gradient(circle, #2962ff 2px, transparent 2px)",
                  backgroundSize: "10px 10px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blue gradient bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1a237e] via-[#2962ff] to-[#1a237e]" />
    </section>
  )
}
