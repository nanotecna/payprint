import Image from "next/image"

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo center */}
        <div className="flex justify-center mb-12">
          <Image
            src="/images/payprint-icon.png"
            alt="PayPrint"
            width={48}
            height={48}
            className="h-12 w-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Como Facilitamos */}
          <div>
            <h3 className="text-[#2962ff] font-bold text-lg underline underline-offset-4 mb-3">
              Como Facilitamos
            </h3>
            <h4 className="font-bold text-[#0a0a2e] text-base mb-2">
              Gestão simplificada, resultado ampliado
            </h4>
            <p className="text-sm text-[#0a0a2e] leading-relaxed mb-4">
              Nossa plataforma exclusiva reúne todos os materiais homologados pela franqueadora. O franqueado faz pedidos com poucos cliques e acompanha tudo em tempo real.
            </p>
            <a
              href="#"
              className="text-sm text-[#2962ff] underline underline-offset-4 font-semibold hover:text-[#1a237e] transition-colors"
            >
              Conheça a área exclusiva para franqueados
            </a>
          </div>

          {/* Beneficios */}
          <div className="text-right">
            <h3 className="text-[#2962ff] font-bold text-lg underline underline-offset-4 mb-3">
              Benefícios
            </h3>
            <h4 className="font-bold text-[#0a0a2e] text-base mb-2">
              Para Franqueadora e Franqueado
            </h4>
            <p className="text-sm text-[#0a0a2e] leading-relaxed mb-4">
              Padronização, controle de custos, melhoria nos resultados, loja exclusiva, compra assistida e logística inteligente.
            </p>
            <a
              href="#contato"
              className="text-sm text-[#2962ff] underline underline-offset-4 font-semibold hover:text-[#1a237e] transition-colors"
            >
              Fale com um especialista PayPrint
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
