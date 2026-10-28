import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Coach en transitions de vie · Femmes 40+ · Montréal | Respire',
  description:
    'Vous vous sentez dépassé·e ou bloqué·e ? Nathalie vous accompagne en coaching individuel et entreprise à Montréal — clarté, énergie, confiance.',
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
