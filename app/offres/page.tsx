import type { Metadata } from 'next'
import OffresClient from './OffresClient'

export const metadata: Metadata = {
  title: 'Offres de coaching individuel à Montréal | Respire',
  description:
    "Séance découverte gratuite, séance à l'unité ou programme de 6 séances — les offres de coaching individuel de Nathalie à Montréal.",
}

export default function OffresPage() {
  return <OffresClient />
}
