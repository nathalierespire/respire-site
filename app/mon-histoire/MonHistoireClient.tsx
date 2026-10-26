'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import FloatingCircles from '@/components/FloatingCircles'
import Link from 'next/link'

export default function MonHistoirePage() {
  return (
    <>
      {/* HERO — un fond doux qui évoque les 3 lieux du parcours de Nathalie */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[linear-gradient(120deg,#E3F5EC_0%,#F3FBF6_18%,#FDF2F8_38%,#FFF9F5_52%,#FDF6E8_64%,#E8F4F8_84%,#E8F4F8_100%)]">
        {/* Île de la Réunion — vert tropical */}
        <FloatingCircles
          circles={[
            { size: 380, color: 'rgba(16, 185, 129, 0.12)', top: '-8%', left: '-6%', delay: 0 },
            { size: 180, color: 'rgba(16, 185, 129, 0.08)', bottom: '5%', left: '8%', delay: 1.5 },
            // Paris — or chaleureux
            { size: 260, color: 'rgba(201, 169, 110, 0.16)', top: '10%', left: '42%', delay: 1 },
            // Montréal — bleu doux
            { size: 340, color: 'rgba(74, 144, 184, 0.14)', bottom: '-12%', right: '-6%', delay: 2 },
            { size: 160, color: 'rgba(74, 144, 184, 0.10)', top: '8%', right: '10%', delay: 2.5 },
          ]}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 pt-32 pb-20 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block text-sm font-medium tracking-[0.25em] uppercase text-rose-brand/80 mb-6"
          >
            Mon parcours
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-gray-900 leading-tight"
          >
            Mon <span className="italic text-rose-brand">histoire</span>
          </motion.h1>
        </motion.div>
      </section>

      {/* BIOGRAPHIE */}
      <section className="section-padding bg-white relative overflow-hidden">
        <FloatingCircles
          circles={[
            { size: 300, color: 'rgba(232, 244, 248, 0.5)', top: '5%', right: '-5%', delay: 0 },
            { size: 200, color: 'rgba(255, 249, 245, 0.6)', bottom: '10%', left: '-3%', delay: 1 },
          ]}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-xl md:text-2xl font-serif italic text-gray-700 leading-relaxed mb-12 text-center">
              Chaque blessure porte en elle la graine d&apos;une transformation.
              Voici la mienne.
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal delay={0.1}>
              <p className="text-body">
                Pendant longtemps, j&apos;ai vécu déconnectée de moi-même. Je portais
                un masque, celui de la femme forte, performante, qui ne montre
                jamais sa vulnérabilité. En apparence, tout allait bien. En
                réalité, je m&apos;étouffais.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-body">
                Le déclic est venu d&apos;une crise profonde — de ces moments où la
                vie vous met à genoux pour mieux vous relever. J&apos;ai compris que
                je ne pouvais plus continuer à vivre en surface, que quelque chose
                de plus grand m&apos;appelait.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-body">
                C&apos;est là que mon voyage a commencé. J&apos;ai exploré les
                neurosciences, la psychologie, les approches corporelles, la
                méditation, la spiritualité. Pas par curiosité intellectuelle,
                mais par nécessité vitale. Chaque découverte a été un souffle
                nouveau, un pas vers moi-même.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="my-12 py-8 px-8 md:px-12 border-l-4 border-rose-brand/30 bg-rose-light/20 rounded-r-2xl">
                <p className="text-xl font-serif italic text-gray-800 leading-relaxed">
                  &ldquo;J&apos;ai appris que la vraie force n&apos;est pas de tout
                  supporter en silence, mais d&apos;oser se montrer telle que l&apos;on
                  est.&rdquo;
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-body">
                Aujourd&apos;hui, je suis Coach en Intelligence Communicationnelle
                Intégrative<sup>MC</sup> – ICI de l&apos;Institut Coaching
                International. Pas seulement un métier — une vocation née de
                ma propre transformation. Je sais intimement ce que signifie
                traverser la nuit pour retrouver sa lumière.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <p className="text-body">
                Si vous lisez ces lignes, peut-être que vous aussi sentez cet
                appel au changement. Sachez que vous n&apos;êtes pas seul·e, et que le
                premier pas est déjà un acte de courage immense.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="text-lg font-serif italic text-rose-brand mt-12 text-center">
                — Nathalie
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-bleu-clair/30 via-white to-creme/30 text-center">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="heading-lg text-gray-900 mb-6">
              Envie de <span className="italic text-rose-brand">partager votre histoire</span> ?
            </h2>
            <p className="text-body mb-10">
              Chaque parcours est unique. Rencontrons-nous pour écrire
              ensemble le prochain chapitre du vôtre.
            </p>
            <Link href="/contact" className="btn-rose">
              Prendre rendez-vous
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
