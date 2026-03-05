"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <PayPrintLogo />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#quem-somos" className="text-sm font-semibold text-[#0a0a2e] hover:text-[#2962ff] transition-colors">
            QUEM SOMOS
          </a>
          <a href="#segmentos" className="text-sm font-semibold text-[#0a0a2e] hover:text-[#2962ff] transition-colors">
            SEGMENTOS ATENDIDOS
          </a>
          <a
            href="#contato"
            className="text-sm font-bold bg-[#2962ff] text-white px-5 py-2 rounded hover:bg-[#1a237e] transition-colors"
          >
            ENTRE EM CONTATO
          </a>
          <a
            href="#"
            className="text-sm font-bold text-[#0a0a2e] border-2 border-[#0a0a2e] px-5 py-2 rounded hover:bg-[#0a0a2e] hover:text-white transition-colors"
          >
            ACESSO AOS FRANQUEADOS
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#0a0a2e]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#e2e8f0] px-4 pb-4 flex flex-col gap-3">
          <a href="#quem-somos" className="text-sm font-semibold text-[#0a0a2e] py-2" onClick={() => setIsOpen(false)}>
            QUEM SOMOS
          </a>
          <a href="#segmentos" className="text-sm font-semibold text-[#0a0a2e] py-2" onClick={() => setIsOpen(false)}>
            SEGMENTOS ATENDIDOS
          </a>
          <a
            href="#contato"
            className="text-sm font-bold bg-[#2962ff] text-white px-5 py-2 rounded text-center"
            onClick={() => setIsOpen(false)}
          >
            ENTRE EM CONTATO
          </a>
          <a
            href="#"
            className="text-sm font-bold text-[#0a0a2e] border-2 border-[#0a0a2e] px-5 py-2 rounded text-center"
            onClick={() => setIsOpen(false)}
          >
            ACESSO AOS FRANQUEADOS
          </a>
        </div>
      )}
    </nav>
  )
}

function PayPrintLogo() {
  return (
    <svg viewBox="0 0 180 40" className="h-8 w-auto" aria-label="PayPrint">
      <rect x="0" y="4" width="32" height="32" rx="6" fill="#1a237e" />
      <text x="7" y="28" fill="white" fontWeight="bold" fontSize="22" fontFamily="sans-serif">
        P
      </text>
      <circle cx="24" cy="12" r="4" fill="#2962ff" />
      <text x="38" y="19" fill="#1a237e" fontWeight="800" fontSize="16" fontFamily="sans-serif">
        Pay
      </text>
      <text x="68" y="19" fill="#2962ff" fontWeight="800" fontSize="16" fontFamily="sans-serif">
        Print
      </text>
      <text x="38" y="32" fill="#64748b" fontSize="7" fontFamily="sans-serif">
        {'grafica para franquias'}
      </text>
    </svg>
  )
}
