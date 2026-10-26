import type { Metadata } from 'next'
import MonHistoireClient from './MonHistoireClient'

export const metadata: Metadata = {
  title: 'Mon histoire — de la reconnexion à soi à la vocation de coach | Respire',
  description:
    "Avant d'accompagner les autres, j'ai dû me retrouver moi-même. Le parcours de Nathalie, de la crise de vie à la vocation de coach à Montréal.",
}

export default function MonHistoirePage() {
  return <MonHistoireClient />
}
