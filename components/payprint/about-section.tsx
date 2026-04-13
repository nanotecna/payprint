export function AboutSection() {
  return (
    <section id="quem-somos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - About text */}
          <div>
            <div className="mb-6">
              <svg viewBox="0 0 60 60" className="h-14 w-14" aria-hidden="true">
                <rect width="60" height="60" rx="12" fill="#f0f2ff" />
                <path d="M20 15 L40 15 L40 45 L20 45 Z" fill="none" stroke="#1a237e" strokeWidth="2" />
                <path d="M25 25 L35 25 M25 30 L35 30 M25 35 L32 35" stroke="#2962ff" strokeWidth="1.5" />
                <circle cx="45" cy="18" r="8" fill="#2962ff" opacity="0.2" />
                <circle cx="45" cy="18" r="4" fill="#2962ff" />
              </svg>
           </div>
<h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a0a2e] mb-6">Quem Somos</h2>
<div className="text-[#0a0a2e] leading-relaxed text-base space-y-4">
  <p>
    A PayPrint é uma empresa especializada em padronização de suprimentos gráficos, comunicação visual e brindes para redes de franquias.
  </p>

  <p>
    Nascemos com um propósito claro: resolver um dos maiores desafios das franqueadoras brasileiras — garantir que a identidade visual da rede esteja presente, de forma consistente e padronizada, em cada uma de suas unidades.
  </p>

  <p>
    Ao longo da nossa trajetória, construímos uma estrutura sólida e uma plataforma própria desenvolvida exclusivamente para o universo das franquias. Hoje, atendemos mais de 40 redes de franquias, servimos mais de 8.000 franqueados e realizamos entregas em mais de 2.500 cidades em todo o Brasil — números que refletem a confiança que o mercado deposita em nosso trabalho.
  </p>

  <p>
    Entendemos que a comunicação visual de uma rede vai muito além da estética. Ela representa a força da marca, a experiência do consumidor e a credibilidade do negócio. Por isso, oferecemos às franqueadoras uma solução completa: do gerenciamento centralizado dos materiais de comunicação até a entrega direta em cada unidade franqueada, com controle, agilidade e qualidade garantidos.
  </p>

  <p>
    Nossa plataforma permite que cada franqueado acesse, de forma segura e restrita, uma loja exclusiva da sua rede — com materiais já aprovados, personalizados pelo time de marketing da franqueadora e prontos para uso. Isso significa menos sobrecarga para o time central, menos erros de padronização e mais tempo para o que realmente importa: estratégia e crescimento.
  </p>

  <p>
    Para as franqueadoras, somos muito mais do que um fornecedor gráfico. Somos um parceiro estratégico que contribui diretamente para a redução de custos operacionais, para o fortalecimento da marca em toda a rede e para a facilitação do processo de venda de novas franquias.
  </p>

  <p>
    Na PayPrint, acreditamos que uma rede bem comunicada cresce com mais consistência, vende com mais facilidade e retém franqueados com mais eficiência. É com esse propósito que trabalhamos todos os dias.
  </p>
</div>

          {/* Right - Large text */}
          <div className="text-right">
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2962ff]/20 leading-tight">
                SUA FRANQUIA,
              </p>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a237e] leading-tight">
                SUA FRANQUIA,
              </p>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a0a2e] leading-tight">
                NOSSO PADRÃO
              </p>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a0a2e]/30 leading-tight">
                NOSSO PADRÃO
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
