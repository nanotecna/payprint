import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'PayPrint | A Solução Completa para Redes de Franquias',
  description:
    'Padronize, personalize e abasteça todas as unidades da sua rede com agilidade, controle e qualidade. Soluções gráficas para franquias.',
}

export const viewport: Viewport = {
  themeColor: '#1a237e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
