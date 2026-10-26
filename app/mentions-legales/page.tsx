import type { Metadata } from 'next'
import MentionsLegalesClient from './MentionsLegalesClient'

export const metadata: Metadata = {
  title: 'Mentions légales | Respire. Avec ton Cœur',
  description:
    "Mentions légales, informations sur l'éditeur et protection des renseignements personnels du site Respire. Avec ton Cœur.",
}

export default function MentionsLegalesPage() {
  return <MentionsLegalesClient />
}
