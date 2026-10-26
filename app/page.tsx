import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'Coaching de vie & en entreprise à Montréal | Respire. Avec ton Cœur',
  description:
    "Vous vous sentez dépassé·e ou bloqué·e ? Nathalie vous accompagne en coaching individuel et entreprise à Montréal — clarté, énergie, confiance.",
}

export default function HomePage() {
  return <HomeClient />
}
