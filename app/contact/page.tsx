import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact — Prendre rendez-vous avec Nathalie à Montréal | Respire',
  description:
    "Une question, envie d'une séance découverte gratuite ou d'un accompagnement individuel ou en entreprise ? Contactez Nathalie, coach à Montréal.",
}

export default function ContactPage() {
  return <ContactClient />
}
