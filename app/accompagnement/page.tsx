import type { Metadata } from 'next'
import AccompagnementClient from './AccompagnementClient'

export const metadata: Metadata = {
  title: 'Mon approche : coaching holistique corps, cœur & science | Respire',
  description:
    "Une approche de coaching holistique : corps, cœur, science et spiritualité, pour la gestion du stress et les croyances limitantes à Montréal.",
}

export default function AccompagnementPage() {
  return <AccompagnementClient />
}
