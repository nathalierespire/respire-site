import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'Coach en transitions de vie · Femmes 40+ · Montréal | Respire',
  description:
  "Compétente, épuisée, perdue en chemin ? Nathalie accompagne les femmes de 40 ans et plus en transition de vie à Montréal. Séance découverte gratuite.",
}

export default function HomePage() {
  return <HomeClient />
}
