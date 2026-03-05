"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="flex items-center">
          <Image
            src="/images/payprint-logo.png"
            alt="PayPrint - Grafica para Franquias"
            width={180}
            height={48}
            className="h-10 w-auto"
            priority
          />
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
