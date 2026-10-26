'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import FloatingCircles from '@/components/FloatingCircles'

const messages = [
  'Respire. Tu es exactement là où tu dois être.',
  'Ta sensibilité est ta plus grande force.',
  'Le changement commence par un seul souffle conscient.',
  'Tu mérites la paix que tu cherches pour les autres.',
  'Chaque pas, même petit, te rapproche de toi-même.',
  'Ose montrer ta vulnérabilité — c\'est là que réside ta puissance.',
  'Tu n\'as pas besoin d\'être parfait·e pour être aimé·e.',
  'La tempête passera. Ta lumière intérieure, elle, est éternelle.',
  'Écoute ton cœur. Il connaît le chemin.',
  'Aujourd\'hui, choisis de te parler avec douceur.',
  'Tu portes en toi tout ce dont tu as besoin.',
  'Le courage, c\'est avancer malgré la peur.',
  'Accorde-toi la permission de lâcher prise.',
  'Ton histoire n\'est pas terminée. Le meilleur reste à écrire.',
  'Chaque matin est une nouvelle chance de recommencer.',
  'La guérison n\'est pas linéaire — et c\'est parfaitement normal.',
  'Tu es plus fort·e que tu ne le crois.',
  'Permets-toi de recevoir autant que tu donnes.',
]

export default function ReflexionDuCoeurPage() {
  const [currentMessage, setCurrentMessage] = useState<string | null>(null)
  const [isSpinning, setIsSpinning] = useState(false)
  const [key, setKey] = useState(0)

  const spinWheel = useCallback(() => {
    if (isSpinning) return
    setIsSpinning(true)

    // Simulate a spinning animation with rapid message changes
    let count = 0
    const totalSpins = 15
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * messages.length)
      setCurrentMessage(messages[randomIndex])
      setKey((k) => k + 1)
      count++

      if (count >= totalSpins) {
        clearInterval(interval)
        // Final message
        const finalIndex = Math.floor(Math.random() * messages.length)
        setCurrentMessage(messages[finalIndex])
        setKey((k) => k + 1)
        setIsSpinning(false)
      }
    }, 100 + count * 20)
  }, [isSpinning])

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-bleu-clair/50 via-bleu-clair/30 to-white overflow-hidden">
        <FloatingCircles
          circles={[
            { size: 400, color: 'rgba(74, 144, 184, 0.08)', top: '5%', right: '-5%', delay: 0 },
            { size: 300, color: 'rgba(233, 30, 140, 0.05)', bottom: '10%', left: '-3%', delay: 1 },
            { size: 200, color: 'rgba(201, 169, 110, 0.06)', top: '40%', left: '20%', delay: 2 },
          ]}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-bleu-profond mb-4"
            >
              Messages d&apos;inspiration
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="heading-xl text-gray-900 mb-6"
            >
              Réflexion du <span className="italic text-rose-brand">Cœur</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-body max-w-xl mx-auto mb-16"
            >
              Prenez un instant. Respirez profondément. Puis laissez le
              message qui vous est destiné se révéler.
            </motion.p>

            {/* Widget interactif */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              {/* Message display */}
              <div className="relative min-h-[200px] flex items-center justify-center p-8 md:p-12 rounded-3xl bg-white/80 backdrop-blur-sm border border-white shadow-xl shadow-bleu-profond/5 mb-8">
                {/* Decorative corner elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-rose-brand/20 rounded-tl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-rose-brand/20 rounded-br-lg" />

                <AnimatePresence mode="wait">
                  {currentMessage ? (
                    <motion.p
                      key={key}
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="text-xl md:text-2xl font-serif italic text-gray-800 leading-relaxed text-center"
                    >
                      &ldquo;{currentMessage}&rdquo;
                    </motion.p>
                  ) : (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-gray-400 font-serif italic text-lg"
                    >
                      Votre message vous attend...
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Bouton */}
              <motion.button
                onClick={spinWheel}
                disabled={isSpinning}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center gap-3 px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 ${
                  isSpinning
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-rose-brand text-white hover:shadow-xl hover:shadow-rose-brand/20'
                }`}
              >
                {/* Heart icon with spin */}
                <motion.svg
                  animate={isSpinning ? { rotate: 360 } : { rotate: 0 }}
                  transition={isSpinning ? { duration: 0.5, repeat: Infinity, ease: 'linear' } : {}}
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </motion.svg>
                {isSpinning ? 'Le cœur parle...' : 'Lancer le défilement'}
              </motion.button>
            </motion.div>

            {/* Illustration placeholder */}
            <ScrollReveal delay={0.3} className="mt-20">
              <div className="max-w-xs mx-auto">
                <div className="w-full aspect-square rounded-full bg-gradient-to-br from-bleu-clair via-rose-light/30 to-creme flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <svg className="w-20 h-20 mx-auto mb-3 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                    </svg>
                    <p className="text-xs tracking-wide uppercase">Illustration yoga</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
