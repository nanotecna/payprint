import { Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0a0a2e] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <svg viewBox="0 0 180 40" className="h-8 w-auto mb-4" aria-label="PayPrint">
              <rect x="0" y="4" width="32" height="32" rx="6" fill="#2962ff" />
              <text x="7" y="28" fill="white" fontWeight="bold" fontSize="22" fontFamily="sans-serif">
                P
              </text>
              <circle cx="24" cy="12" r="4" fill="white" opacity="0.5" />
              <text x="38" y="19" fill="white" fontWeight="800" fontSize="16" fontFamily="sans-serif">
                Pay
              </text>
              <text x="68" y="19" fill="#2962ff" fontWeight="800" fontSize="16" fontFamily="sans-serif">
                Print
              </text>
              <text x="38" y="32" fill="#94a3b8" fontSize="7" fontFamily="sans-serif">
                {'grafica para franquias'}
              </text>
            </svg>
            <p className="text-sm text-blue-200 leading-relaxed max-w-xs">
              A solucao completa para redes de franquias. Padronizacao, qualidade e logistica inteligente.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm">Links</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#quem-somos" className="text-sm text-blue-200 hover:text-white transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#o-que-fazemos" className="text-sm text-blue-200 hover:text-white transition-colors">
                  O Que Fazemos
                </a>
              </li>
              <li>
                <a href="#segmentos" className="text-sm text-blue-200 hover:text-white transition-colors">
                  Segmentos Atendidos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-sm text-blue-200 hover:text-white transition-colors">
                  Entre em Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-sm">Contato</h4>
            <a href="tel:3131313131" className="flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors mb-3">
              <Phone className="h-4 w-4" />
              (31) 3131-3131
            </a>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" aria-label="Instagram" className="text-blue-200 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" aria-label="WhatsApp" className="text-blue-200 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-blue-200 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-blue-300">
            &copy; {new Date().getFullYear()} PayPrint. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
