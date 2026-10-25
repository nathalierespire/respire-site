'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import FloatingCircles from '@/components/FloatingCircles'
import { blurData } from '@/lib/blurData'

const heroWords = ['Et', 'si', 'le', 'changement', 'commençait', 'par', 'un', 'souffle', '?']

const heroCircles = [
  { size: 340, color: 'rgba(233, 30, 140, 0.08)', top: '5%', right: '8%', delay: 0 },
  { size: 260, color: 'rgba(74, 144, 184, 0.07)', top: '35%', right: '25%', delay: 1.5 },
  { size: 180, color: 'rgba(201, 169, 110, 0.06)', top: '60%', right: '5%', delay: 0.8 },
  { size: 120, color: 'rgba(233, 30, 140, 0.05)', top: '15%', right: '35%', delay: 2 },
]

const steps = [
  {
    number: '01',
    color: 'text-rose-brand',
    borderColor: 'border-rose-brand/20',
    bgColor: 'bg-rose-light',
    title: 'Le Mal-être',
    description:
      'Reconnaître ce qui ne va plus. Cette tension intérieure, ce sentiment diffus que quelque chose doit changer. C\'est le premier pas, et il demande du courage.',
  },
  {
    number: '02',
    color: 'text-bleu-profond',
    borderColor: 'border-bleu-profond/20',
    bgColor: 'bg-bleu-clair',
    title: 'La Prise de Conscience',
    description:
      'Comprendre les mécanismes qui vous freinent. Identifier vos schémas, vos croyances limitantes, et entrevoir de nouvelles possibilités.',
  },
  {
    number: '03',
    color: 'text-or',
    borderColor: 'border-or/20',
    bgColor: 'bg-creme',
    title: 'Le Passage à l\'Action',
    description:
      'Transformer la compréhension en mouvement. Poser des actes alignés avec qui vous êtes vraiment, un pas à la fois.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════ HERO ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-white to-bleu-clair/30">
        <FloatingCircles circles={heroCircles} />

        {/* Subtle grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            {/* Left — Text */}
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-rose-brand/80">
                  Intelligence Communicationnelle &amp; Intégrative
                </span>
              </motion.div>

              <h1 className="heading-xl text-gray-900 mb-8">
                {heroWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + i * 0.1,
                      ease: [0.25, 0.4, 0.25, 1],
                    }}
                    className={`inline-block mr-[0.3em] ${
                      word === 'souffle' ? 'italic text-rose-brand' : ''
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="text-body max-w-md mb-10"
              >
                Nathalie vous accompagne dans un chemin de transformation
                profonde, à travers le coaching en intelligence communicationnelle
                et intégrative. Retrouvez votre souffle, votre voix, votre pouvoir.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.9 }}
              >
                <Link href="/accompagnement" className="btn-primary text-base">
                  Découvrir l&apos;accompagnement
                </Link>
              </motion.div>
            </div>

            {/* Right — Photo placeholder with decorative circles */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Decorative rings */}
              <div className="absolute -top-8 -right-8 w-[420px] h-[420px] rounded-full border border-rose-brand/10 animate-breathe" />
              <div className="absolute -top-4 -right-4 w-[380px] h-[380px] rounded-full border border-bleu-profond/8" />

              {/* Photo container */}
              <div className="relative w-72 h-96 md:w-80 md:h-[440px] lg:w-[360px] lg:h-[480px]">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-rose-brand/10 via-bleu-clair to-creme overflow-hidden flex items-end justify-center">
                  <Image
                    src="/images/accompagnement.png"
                    alt="Nathalie — Coach en Intelligence Communicationnelle"
                    width={360}
                    height={480}
                    className="object-contain object-bottom w-full h-auto max-h-full"
                    placeholder="blur"
                    blurDataURL={blurData.accompagnement}
                    priority
                  />
                </div>

                {/* Decorative floating accent */}
                <motion.div
                  className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-rose-brand/15"
                  animate={{ y: [0, -12, 0], scale: [1, 1.06, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute -top-4 -left-10 w-16 h-16 rounded-full bg-or/20"
                  animate={{ y: [0, -8, 0], scale: [1, 1.04, 1] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border-2 border-gray-300 flex items-start justify-center p-1"
          >
            <motion.div className="w-1 h-2 rounded-full bg-gray-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════ BIENVENUE ═══════════════════════════════════════ */}
      <section className="section-padding bg-white relative overflow-hidden">
        <FloatingCircles
          circles={[
            { size: 300, color: 'rgba(232, 244, 248, 0.6)', top: '-10%', left: '-8%', delay: 0 },
            { size: 200, color: 'rgba(255, 249, 245, 0.8)', bottom: '-5%', right: '-5%', delay: 1 },
          ]}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-or mb-4">
              Bienvenue
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="heading-lg text-gray-900 mb-8">
              Bienvenue dans un espace
              <br />
              <span className="italic text-rose-brand">de transformation</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-body max-w-2xl mx-auto mb-6">
              L&apos;intelligence communicationnelle et intégrative est une approche
              profonde qui unit le corps, le cœur et l&apos;esprit. Elle vous invite
              à redécouvrir votre voix authentique, à libérer ce qui vous freine,
              et à vous reconnecter à votre essence.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-body max-w-2xl mx-auto mb-10">
              Ici, chaque rencontre est un souffle nouveau. Un espace sans jugement
              où vous pouvez déposer vos fardeaux et repartir plus léger, plus aligné,
              plus vivant.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <Link href="/accompagnement" className="btn-rose">
              En savoir plus
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════ TRANSFORMATION STEPS ═══════════════════════════════ */}
      <section className="section-padding bg-gradient-to-b from-white to-bleu-clair/20 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-bleu-profond mb-4">
              Le chemin
            </span>
            <h2 className="heading-lg text-gray-900">
              Du Mal-être au
              <br />
              <span className="italic">Passage à l&apos;Action</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.15} className="group">
                <div
                  className={`relative p-8 lg:p-10 rounded-3xl ${step.bgColor} border ${step.borderColor} transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1`}
                >
                  {/* Large number watermark */}
                  <span
                    className={`block text-[5rem] lg:text-[6rem] font-serif font-bold leading-none ${step.color} opacity-20 mb-2 select-none`}
                  >
                    {step.number}
                  </span>

                  <h3 className="heading-md text-gray-900 mb-4">{step.title}</h3>

                  <p className="text-body text-sm md:text-base">{step.description}</p>

                  {/* Subtle connector line between cards (desktop) */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 w-8 lg:w-12 h-px bg-gradient-to-r from-gray-300 to-transparent" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ SUPERPOUVOIRS ═══════════════════════════════════ */}
      <section className="section-padding bg-white relative overflow-hidden">
        <FloatingCircles
          circles={[
            { size: 400, color: 'rgba(233, 30, 140, 0.04)', top: '20%', right: '-10%', delay: 0 },
            { size: 250, color: 'rgba(201, 169, 110, 0.05)', bottom: '10%', left: '-5%', delay: 1.5 },
          ]}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — decorative */}
            <ScrollReveal direction="left" className="hidden lg:block">
              <div className="relative">
                <div className="w-full aspect-[4/5] max-w-md mx-auto rounded-[3rem] bg-gradient-to-br from-bleu-clair via-rose-light/30 to-creme overflow-hidden flex items-end justify-center">
                  <Image
                    src="/images/bienvenue.png"
                    alt="Nathalie souriante"
                    width={500}
                    height={600}
                    className="object-contain object-bottom w-full h-auto max-h-full"
                    placeholder="blur"
                    blurDataURL={blurData.bienvenue}
                  />
                </div>

                {/* Corner accent */}
                <motion.div
                  className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl bg-rose-brand/10"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </ScrollReveal>

            {/* Right — text */}
            <div>
              <ScrollReveal>
                <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-rose-brand mb-4">
                  Votre potentiel
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="heading-lg text-gray-900 mb-6">
                  Libérez vos
                  <br />
                  <span className="italic text-rose-brand">Superpouvoirs</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-body mb-6">
                  Vous portez en vous des ressources extraordinaires — une capacité
                  de résilience, une créativité profonde, une sagesse intuitive.
                  Mais les blessures, les conditionnements et les peurs ont couvert
                  ces trésors d&apos;un voile d&apos;oubli.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="text-body mb-10">
                  Mon rôle est de vous guider pour soulever ce voile, pas à pas,
                  avec douceur et respect. Pour que vous puissiez enfin
                  <strong className="text-gray-800"> respirer pleinement</strong>,
                  vibrer avec authenticité, et avancer avec confiance.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <Link href="/offres" className="btn-primary">
                  Voir les offres
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ CTA FINAL ═══════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-bleu-clair/40 via-white to-rose-light/30 relative overflow-hidden">
        <FloatingCircles
          circles={[
            { size: 200, color: 'rgba(233, 30, 140, 0.06)', top: '20%', left: '10%', delay: 0 },
            { size: 150, color: 'rgba(74, 144, 184, 0.06)', bottom: '20%', right: '15%', delay: 1 },
          ]}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="heading-lg text-gray-900 mb-6">
              Prête à <span className="italic text-rose-brand">respirer</span> ?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-body mb-10 max-w-xl mx-auto">
              Offrez-vous un moment de clarté. Prenez rendez-vous pour une
              première rencontre gratuite et découvrez comment le coaching
              peut transformer votre quotidien.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/offres" className="btn-rose">
                Découvrir les offres
              </Link>
              <Link href="/contact" className="btn-primary">
                Prendre rendez-vous
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
