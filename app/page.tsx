import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'Coach en transitions de vie · Femmes 40+ · Montréal | Respire',
  description:
    "Vous vous sentez dépassé·e ou bloqué·e ? Nathalie vous accompagne en coaching individuel et entreprise à Montréal — clarté, énergie, confiance.",
}

export default function HomePage() {
  return <HomeClient />
}
