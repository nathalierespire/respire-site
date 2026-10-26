'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import FloatingCircles from '@/components/FloatingCircles'

export default function MentionsLegalesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-creme/30 via-white to-bleu-clair/20 overflow-hidden">
        <FloatingCircles
          circles={[
            { size: 220, color: 'rgba(201, 169, 110, 0.05)', top: '15%', right: '8%', delay: 0 },
            { size: 160, color: 'rgba(74, 144, 184, 0.05)', bottom: '10%', left: '8%', delay: 1 },
          ]}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-or mb-4"
          >
            Informations légales
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="heading-xl text-gray-900 mb-6"
          >
            Mentions <span className="italic text-rose-brand">légales</span>
          </motion.h1>
        </div>
      </section>

      {/* CONTENU */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12 shadow-sm space-y-10">
            <ScrollReveal>
              <h2 className="heading-md text-gray-900 mb-4">Éditeur du site</h2>
              <div className="text-body space-y-1">
                <p>Respire Life and Career Coaching</p>
                <p>NEQ (Numéro d&apos;entreprise du Québec) : 227902733</p>
                <p>Québec, Canada</p>
                <p>
                  Courriel :{' '}
                  <a href="mailto:contact@respire.ink" className="text-rose-brand hover:underline">
                    contact@respire.ink
                  </a>
                </p>
                <p>
                  Téléphone :{' '}
                  <a href="tel:+14389289769" className="text-rose-brand hover:underline">
                    +1 (438) 928-9769
                  </a>
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <h2 className="heading-md text-gray-900 mb-4">Responsable de la publication</h2>
              <p className="text-body">
                Nathalie, à titre de propriétaire de Respire Life and Career Coaching, est responsable
                de la publication du contenu de ce site.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="heading-md text-gray-900 mb-4">Hébergement</h2>
              <p className="text-body">
                Ce site est hébergé par Render Services, Inc.
                <br />
                525 Brannan St, Suite 300, San Francisco, CA 94107, États-Unis
                <br />
                <a
                  href="https://render.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-brand hover:underline"
                >
                  render.com
                </a>
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h2 className="heading-md text-gray-900 mb-4">Propriété intellectuelle</h2>
              <p className="text-body">
                L&apos;ensemble des textes, images, logos et éléments graphiques présents sur ce site
                est la propriété de Respire Life and Career Coaching, sauf mention contraire, et est
                protégé par les lois applicables en matière de propriété intellectuelle. Toute
                reproduction, représentation ou diffusion, totale ou partielle, sans autorisation
                préalable, est interdite.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="heading-md text-gray-900 mb-4">
                Protection des renseignements personnels
              </h2>
              <p className="text-body mb-4">
                Conformément à la Loi sur la protection des renseignements personnels dans le secteur
                privé (Loi 25, Québec), voici les informations relatives au traitement de vos données
                personnelles sur ce site.
              </p>
              <p className="text-body mb-4">
                Les seules données personnelles collectées le sont via le formulaire de contact
                (nom, courriel, téléphone optionnel, et contenu de votre message). Ces renseignements
                sont utilisés uniquement pour répondre à votre demande et ne sont ni vendus, ni
                partagés avec des tiers à des fins commerciales.
              </p>
              <p className="text-body">
                Vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression des
                renseignements vous concernant. Pour exercer ce droit, ou pour toute question relative
                à la confidentialité de vos données, vous pouvez écrire à{' '}
                <a href="mailto:contact@respire.ink" className="text-rose-brand hover:underline">
                  contact@respire.ink
                </a>
                .
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <h2 className="heading-md text-gray-900 mb-4">Limitation de responsabilité</h2>
              <p className="text-body">
                Le contenu de ce site est fourni à titre informatif. Respire Life and Career Coaching
                s&apos;efforce d&apos;assurer l&apos;exactitude des informations publiées, mais ne
                saurait être tenue responsable des erreurs, omissions ou de l&apos;indisponibilité
                temporaire du site.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
