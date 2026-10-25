import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Respire. Avec ton Cœur — Nathalie, Coach en Intelligence Communicationnelle',
  description: 'Coaching en Intelligence Communicationnelle et Intégrative. Accompagnement vers la transformation personnelle.',
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
