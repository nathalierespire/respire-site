import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Coach en transitions de vie · Femmes 40+ · Montréal | Respire',
  description: "Compétente, épuisée, perdue en chemin ? Nathalie accompagne les femmes de 40 ans et plus en transition de vie à Montréal. Séance découverte gratuite.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-white">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
