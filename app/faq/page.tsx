import type { Metadata } from 'next'
import FaqClient from './FaqClient'

export const metadata: Metadata = {
  title: 'FAQ — Vos questions sur le coaching individuel & entreprise | Respire',
  description:
    "Le coaching remplace-t-il une thérapie ? Combien de séances ? Est-ce confidentiel ? Toutes les réponses sur le coaching avec Nathalie à Montréal.",
}

export default function FaqPage() {
  return <FaqClient />
}
