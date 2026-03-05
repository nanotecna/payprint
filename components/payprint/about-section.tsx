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
            <p className="text-[#0a0a2e] leading-relaxed text-base">
              Em 2024, a fusão entre a <strong>Compre Store</strong> e a <strong>PayPrint</strong> criou uma nova referência em soluções gráficas para franquias. Especialistas em padronização e logística inteligente, simplificamos o processo de compra e reposição de materiais, garantindo a mesma excelência em cada unidade da rede.
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
