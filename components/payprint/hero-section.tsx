import Image from "next/image"
import { ChevronRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-[#0a0a2e] overflow-hidden">
      {/* Background pattern image */}
      <Image
        src="/images/image.png"
        alt=""
        fill
        className="object-cover"
        priority
      />

      <div className="max-w-7xl mx-auto pl-4 pr-0 sm:pl-6 lg:pl-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-end min-h-[500px]">
          {/* Text Content */}
          <div className="text-white py-16 pr-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-balance">
              A SOLUÇÃO{" "}
              <span className="text-white">
                COMPLETA PARA
                <br />
                REDES DE FRANQUIAS
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-blue-100 leading-relaxed max-w-lg">
              Padronize, personalize e abasteça todas as unidades da sua rede com agilidade, controle e qualidade — tudo em um só lugar.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1a237e] font-bold px-6 py-3 rounded-[40px] text-sm hover:bg-blue-50 transition-colors"
              >
                FALE COM UM CONSULTOR
                <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="#o-que-fazemos"
                className="inline-flex items-center justify-center text-sm text-white underline underline-offset-4 hover:text-blue-200 transition-colors"
              >
                ou Conheça a Plataforma
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden md:flex justify-end items-end self-end -mr-8 lg:-mr-16">
            <Image
              src="/images/image copy.png"
              alt="Equipe profissional PayPrint"
              width={0}
              height={0}
              sizes="100vw"
              className="object-contain object-right-bottom w-[750px] lg:w-[950px] h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* Blue gradient bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1a237e] via-[#2962ff] to-[#1a237e]" />
    </section>
  )
}
