import type { Metadata } from 'next'
import ReflexionDuCoeurClient from './ReflexionDuCoeurClient'

export const metadata: Metadata = {
  title: 'Réflexion du Cœur — reconnexion à soi & pleine conscience | Respire',
  description:
    "Besoin d'une pause ? Une expérience courte et inspirante pour respirer, ralentir et se reconnecter à soi — signée Respire. Avec ton Cœur, à Montréal.",
}

export default function ReflexionDuCoeurPage() {
  return <ReflexionDuCoeurClient />
}
