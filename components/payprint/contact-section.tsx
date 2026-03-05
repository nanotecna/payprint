"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ nome: "", email: "", telefone: "" })
  }

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a0a2e] mb-2 text-balance">
          Padronize. <span className="text-[#2962ff] italic">Economize.</span> Cresca.
        </h2>
        <p className="text-sm text-[#0a0a2e] mb-8 leading-relaxed max-w-md mx-auto">
          A PayPrint conecta eficiencia, controle e identidade de marca em uma plataforma feita sob medida para redes de franquias.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
          <input
            type="text"
            placeholder="Nome"
            required
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            className="w-full px-4 py-3 border border-[#e2e8f0] rounded-[40px] text-sm text-[#0a0a2e] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2962ff] focus:border-transparent bg-white"
          />
          <input
            type="email"
            placeholder="E-mail"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-[#e2e8f0] rounded-[40px] text-sm text-[#0a0a2e] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2962ff] focus:border-transparent bg-white"
          />
          <input
            type="tel"
            placeholder="Telefone"
            required
            value={formData.telefone}
            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
            className="w-full px-4 py-3 border border-[#e2e8f0] rounded-[40px] text-sm text-[#0a0a2e] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2962ff] focus:border-transparent bg-white"
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-[#2962ff] text-white font-bold px-6 py-3 rounded-[40px] text-sm hover:bg-[#1a237e] transition-colors mx-auto"
          >
            {submitted ? "ENVIADO COM SUCESSO!" : "FALE COM ESPECIALISTA"}
            <ChevronRight className="h-4 w-4" />
          </button>
        </form>

        <p className="text-sm text-[#0a0a2e]">
          ou{" "}
          <a href="#" className="text-[#2962ff] underline underline-offset-4 font-semibold hover:text-[#1a237e] transition-colors">
            Fale com a nossa equipe
          </a>
        </p>
      </div>
    </section>
  )
}
