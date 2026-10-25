'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import FloatingCircles from '@/components/FloatingCircles'
import { blurData } from '@/lib/blurData'

const piliers = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Le Corps',
    color: 'bg-rose-light border-rose-brand/15',
    accent: 'text-rose-brand',
    description:
      'Le corps est notre premier messager. Il porte nos tensions, nos émotions non exprimées, nos blessures silencieuses. À travers l\'écoute corporelle, nous apprenons à décoder ses messages et à libérer ce qui y est stocké.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: 'La Science',
    color: 'bg-bleu-clair border-bleu-profond/15',
    accent: 'text-bleu-profond',
    description:
      'Les neurosciences et la psychologie moderne nous offrent des outils concrets pour comprendre nos réactions, nos habitudes et nos blocages. Une approche fondée sur des bases solides.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Le Cœur',
    color: 'bg-creme border-or/15',
    accent: 'text-or',
    description:
      'L\'intelligence du cœur est notre boussole intérieure. Elle nous guide vers ce qui est juste, authentique et aligné. Reconnecter avec cette sagesse est au centre de l\'accompagnement.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'La Spiritualité',
    color: 'bg-violet-50 border-violet-300/15',
    accent: 'text-violet-600',
    description:
      'Au-delà du mental, il y a cette dimension qui nous relie à quelque chose de plus grand. Sans dogme, avec ouverture, nous explorons cette connexion profonde à soi et au vivant.',
  },
]

const grilles = [
  'Gestion du stress et des émotions',
  'Communication authentique et assertive',
  'Estime de soi et confiance',
  'Alignement personnel et professionnel',
  'Relations harmonieuses',
  'Transformation des croyances limitantes',
]

export default function AccompagnementPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-bleu-clair/30 via-white to-rose-light/20 overflow-hidden">
        <FloatingCircles
          circles={[
            { size: 300, color: 'rgba(233, 30, 140, 0.06)', top: '10%', right: '5%', delay: 0 },
            { size: 200, color: 'rgba(74, 144, 184, 0.08)', bottom: '10%', left: '-3%', delay: 1 },
          ]}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-rose-brand/80 mb-4"
          >
            Mon approche
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="heading-xl text-gray-900 mb-6"
          >
            L&apos;Accompagnement
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-body max-w-2xl mx-auto"
          >
            Un chemin unique qui intègre le corps, la science, le cœur et la
            spiritualité pour vous accompagner vers une transformation profonde
            et durable.
          </motion.p>
        </div>
      </section>

      {/* INTRO WITH PHOTO */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="w-full aspect-[4/5] rounded-[2.5rem] bg-gradient-to-br from-bleu-clair via-rose-light/50 to-creme overflow-hidden flex items-end justify-center">
                  <Image
                    src="/images/accompagnement.png"
                    alt="Nathalie — Accompagnement"
                    width={500}
                    height={625}
                    className="object-contain object-bottom w-full h-auto max-h-full"
                    placeholder="blur"
                    blurDataURL={blurData.accompagnement}
                  />
                </div>
                <motion.div
                  className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-rose-brand/10"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-bleu-doux/40"
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal delay={0.1}>
                <h2 className="heading-lg text-gray-900 mb-6">
                  Une approche <span className="italic text-rose-brand">holistique</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-body mb-6">
                  L&apos;intelligence communicationnelle et intégrative n&apos;est pas une
                  méthode parmi d&apos;autres. C&apos;est une philosophie d&apos;accompagnement
                  qui honore toutes les dimensions de votre être.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="text-body mb-6">
                  Ensemble, nous explorons ce qui se cache derrière vos blocages,
                  vos peurs, vos schémas répétitifs. Nous donnons une voix à ce
                  qui est resté silencieux, et nous créons un pont entre qui vous
                  êtes et qui vous aspirez à devenir.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <p className="text-body">
                  Chaque séance est un espace sacré de rencontre avec vous-même,
                  guidé avec douceur, respect et bienveillance.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4 PILIERS */}
      <section className="section-padding bg-gradient-to-b from-white to-bleu-clair/10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-bleu-profond mb-4">
              Les fondations
            </span>
            <h2 className="heading-lg text-gray-900">
              Les 4 piliers de <span className="italic">l&apos;accompagnement</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {piliers.map((pilier, i) => (
              <ScrollReveal key={pilier.title} delay={i * 0.1}>
                <div
                  className={`p-8 lg:p-10 rounded-3xl border ${pilier.color} transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 h-full`}
                >
                  <div className={`${pilier.accent} mb-5`}>{pilier.icon}</div>
                  <h3 className="heading-md text-gray-900 mb-4">{pilier.title}</h3>
                  <p className="text-body text-sm md:text-base">{pilier.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GRILLES DE COACHING */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-or mb-4">
              Domaines d&apos;intervention
            </span>
            <h2 className="heading-lg text-gray-900 mb-4">
              Les thématiques <span className="italic">explorées</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {grilles.map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.08}>
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-creme/50 border border-or/10 transition-all duration-300 hover:bg-creme hover:border-or/20">
                  <div className="w-2 h-2 rounded-full bg-rose-brand flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CITATION */}
      <section className="py-24 bg-gradient-to-br from-rose-light/30 via-white to-bleu-clair/20 relative overflow-hidden">
        <FloatingCircles
          circles={[
            { size: 200, color: 'rgba(233, 30, 140, 0.05)', top: '10%', left: '5%', delay: 0 },
            { size: 160, color: 'rgba(201, 169, 110, 0.06)', bottom: '15%', right: '10%', delay: 1 },
          ]}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="text-6xl text-rose-brand/30 font-serif mb-6">&ldquo;</div>
            <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-800 leading-relaxed mb-8">
              Mon rôle n&apos;est pas de vous dire qui vous êtes, mais de vous
              accompagner à le redécouvrir par vous-même.
            </blockquote>
            <p className="text-rose-brand font-medium tracking-wide">
              — Nathalie
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white text-center">
        <ScrollReveal>
          <h2 className="heading-lg text-gray-900 mb-6">
            Prêt·e à commencer <span className="italic text-rose-brand">le chemin</span> ?
          </h2>
          <p className="text-body max-w-xl mx-auto mb-10">
            Découvrez les offres d&apos;accompagnement et choisissez celle qui
            résonne le plus avec vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/offres" className="btn-rose">
              Voir les offres
            </Link>
            <Link href="/contact" className="btn-primary">
              Me contacter
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
