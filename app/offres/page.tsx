'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import FloatingCircles from '@/components/FloatingCircles'

const offres = [
  {
    badge: 'Découverte',
    title: 'Une bulle de clarté',
    price: 'Gratuit',
    priceDetail: 'Séance découverte de 15 minutes',
    color: 'border-bleu-profond/20',
    badgeBg: 'bg-bleu-clair text-bleu-profond',
    accent: 'text-bleu-profond',
    features: [
      'Échange téléphonique ou visio de 15 min',
      'Identification de votre problématique principale',
      'Présentation de l\'approche',
      'Recommandations personnalisées',
      'Sans engagement',
    ],
    cta: 'Réserver ma bulle',
    ctaClass: 'btn-primary',
    href: '/contact',
  },
  {
    badge: 'À la séance',
    title: 'Une séance, un déclic',
    price: '125$',
    priceDetail: 'Séance individuelle de 60 minutes',
    color: 'border-or/20',
    badgeBg: 'bg-creme text-or',
    accent: 'text-or',
    features: [
      'Séance individuelle de 60 minutes, en visio ou en présentiel',
      'Pour un besoin ponctuel ou un sujet précis',
      'Sans engagement, à votre rythme',
      'Idéal pour un premier pas ou un suivi occasionnel',
    ],
    cta: 'Réserver ma séance',
    ctaClass: 'btn-primary',
    href: '/contact',
  },
  {
    badge: 'Transformation',
    title: 'Un chemin de transformation',
    price: '597$',
    priceDetail: 'Programme de 6 séances — 1 séance tous les 15 jours',
    priceNote: 'Tarif de lancement · 697$ par la suite',
    color: 'border-rose-brand/20',
    badgeBg: 'bg-rose-light text-rose-brand',
    accent: 'text-rose-brand',
    featured: true,
    features: [
      '6 séances individuelles de 60 minutes, espacées de 15 jours',
      'Plan d\'accompagnement personnalisé',
      'Suivi par WhatsApp entre les séances',
      'Outils pratiques à mettre en application',
      'Bilan de progression à mi-parcours',
      'Séance de clôture et intégration',
    ],
    cta: 'Commencer ma transformation',
    ctaClass: 'btn-rose',
    href: '/contact',
  },
]

export default function OffresPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-creme/40 via-white to-bleu-clair/20 overflow-hidden">
        <FloatingCircles
          circles={[
            { size: 280, color: 'rgba(201, 169, 110, 0.06)', top: '15%', right: '10%', delay: 0 },
            { size: 200, color: 'rgba(233, 30, 140, 0.05)', bottom: '10%', left: '5%', delay: 1 },
          ]}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-or mb-4"
          >
            Les offres
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="heading-xl text-gray-900 mb-6"
          >
            Choisissez votre <span className="italic text-rose-brand">chemin</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-body max-w-2xl mx-auto"
          >
            Trois formules pensées pour s&apos;adapter à vos besoins et à votre rythme.
            Chaque accompagnement est unique, comme vous.
          </motion.p>
        </div>
      </section>

      {/* CARTES D'OFFRES */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {offres.map((offre, i) => (
              <ScrollReveal key={offre.title} delay={i * 0.15}>
                <div
                  className={`relative p-8 lg:p-10 rounded-3xl border-2 ${offre.color} bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-1 h-full flex flex-col ${
                    offre.featured ? 'ring-2 ring-rose-brand/20' : ''
                  }`}
                >
                  {offre.featured && (
                    <div className="absolute -top-3 left-8 px-4 py-1 bg-rose-brand text-white text-xs font-medium rounded-full tracking-wide uppercase">
                      Recommandé
                    </div>
                  )}

                  <span
                    className={`inline-block self-start px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase mb-6 ${offre.badgeBg}`}
                  >
                    {offre.badge}
                  </span>

                  <h3 className="heading-md text-gray-900 mb-2">{offre.title}</h3>

                  <div className="mb-6">
                    <span className={`text-4xl font-serif font-bold ${offre.accent}`}>
                      {offre.price}
                    </span>
                    <p className="text-sm text-gray-500 mt-1">{offre.priceDetail}</p>
                    {offre.priceNote && (
                      <p className="text-xs text-or font-medium mt-1 uppercase tracking-wide">{offre.priceNote}</p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-10 flex-1">
                    {offre.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${offre.accent}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={offre.href} className={`${offre.ctaClass} text-center w-full`}>
                    {offre.cta}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section-padding bg-gradient-to-b from-white to-bleu-clair/20">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-lg text-gray-900 mb-4">
              Des questions ? <span className="italic text-rose-brand">Parlons-en</span>
            </h2>
            <p className="text-body max-w-xl mx-auto">
              N&apos;hésitez pas à me contacter pour discuter de vos besoins.
              Chaque parcours commence par une conversation.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <div className="p-6 rounded-2xl bg-white border border-gray-100 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-full bg-bleu-clair flex items-center justify-center mx-auto mb-4">
                  <svg className="w-5 h-5 text-bleu-profond" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Téléphone</h4>
                <a href="tel:+14389289769" className="text-sm text-gray-500 hover:text-rose-brand transition-colors">
                  +1 (438) 928-9769
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="p-6 rounded-2xl bg-white border border-gray-100 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-full bg-rose-light flex items-center justify-center mx-auto mb-4">
                  <svg className="w-5 h-5 text-rose-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Courriel</h4>
                <a href="mailto:contact@respire.ink" className="text-sm text-gray-500 hover:text-rose-brand transition-colors">
                  contact@respire.ink
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="p-6 rounded-2xl bg-white border border-gray-100 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-full bg-creme flex items-center justify-center mx-auto mb-4">
                  <svg className="w-5 h-5 text-or" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Réseaux</h4>
                <p className="text-sm text-gray-500">Instagram, Facebook, LinkedIn</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
