'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import FloatingCircles from '@/components/FloatingCircles'
import Link from 'next/link'

const faqs = [
  {
    question: 'Qu\'est-ce que l\'intelligence communicationnelle et intégrative ?',
    answer:
      'C\'est une approche holistique du coaching qui intègre le corps, la science (neurosciences, psychologie), le cœur (intelligence émotionnelle) et la spiritualité. Elle vise à vous accompagner dans une transformation profonde et durable, en honorant toutes les dimensions de votre être.',
  },
  {
    question: 'À qui s\'adresse le coaching ?',
    answer:
      'À toute personne qui ressent le besoin de changer quelque chose dans sa vie — que ce soit au niveau professionnel, relationnel, émotionnel ou personnel. Vous n\'avez pas besoin d\'être en crise pour bénéficier d\'un accompagnement. Parfois, c\'est simplement le désir d\'aller plus loin qui vous amène.',
  },
  {
    question: 'Comment se déroule une séance ?',
    answer:
      'Chaque séance dure 60 minutes et se fait en visio ou en présentiel. Nous commençons par un point sur votre état du moment, puis nous explorons ensemble ce qui se présente — à travers le dialogue, des exercices corporels, des outils de visualisation ou de méditation. Chaque séance est unique et adaptée à vos besoins.',
  },
  {
    question: 'Combien de séances sont nécessaires ?',
    answer:
      'Le programme de transformation comprend 8 séances, mais chaque parcours est unique. Certaines personnes ressentent des changements dès la première rencontre, d\'autres ont besoin de plus de temps. La séance découverte gratuite nous permet d\'évaluer ensemble vos besoins.',
  },
  {
    question: 'Est-ce que le coaching remplace une thérapie ?',
    answer:
      'Non, le coaching ne remplace pas une thérapie ou un suivi médical. Il est complémentaire. Si vous traversez une crise psychologique profonde, je vous orienterai vers un professionnel de santé mentale approprié. Le coaching se concentre sur l\'avenir et le passage à l\'action.',
  },
  {
    question: 'Les séances sont-elles confidentielles ?',
    answer:
      'Absolument. Tout ce qui est partagé pendant nos échanges reste strictement confidentiel. C\'est un espace sûr et sans jugement où vous pouvez vous exprimer librement.',
  },
  {
    question: 'Puis-je annuler ou reporter une séance ?',
    answer:
      'Oui, vous pouvez reporter une séance avec un préavis de 24 heures. En cas d\'annulation tardive ou d\'absence sans prévenir, la séance est considérée comme utilisée.',
  },
  {
    question: 'Comment savoir si c\'est le bon moment pour moi ?',
    answer:
      'Si vous vous posez cette question, c\'est probablement que c\'est le bon moment. Le simple fait de chercher du changement est déjà un signe. La séance découverte gratuite est là pour vous aider à y voir plus clair, sans engagement.',
  },
]

function FaqItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="border-b border-gray-100 last:border-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between py-6 text-left group"
        >
          <span className="text-lg font-medium text-gray-800 group-hover:text-rose-brand transition-colors pr-8">
            {faq.question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:border-rose-brand/20 transition-colors"
          >
            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="overflow-hidden"
            >
              <p className="pb-6 text-body pr-16">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  )
}

export default function FaqPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-creme/30 via-white to-bleu-clair/20 overflow-hidden">
        <FloatingCircles
          circles={[
            { size: 250, color: 'rgba(201, 169, 110, 0.06)', top: '10%', right: '5%', delay: 0 },
            { size: 180, color: 'rgba(233, 30, 140, 0.04)', bottom: '15%', left: '10%', delay: 1 },
          ]}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-or mb-4"
          >
            Questions fréquentes
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="heading-xl text-gray-900 mb-6"
          >
            Foire aux <span className="italic text-rose-brand">questions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-body max-w-xl mx-auto"
          >
            Trouvez les réponses à vos interrogations les plus courantes.
            Si votre question n&apos;est pas ici, n&apos;hésitez pas à me contacter.
          </motion.p>
        </div>
      </section>

      {/* FAQ ACCORDÉON */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-10 shadow-sm">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-bleu-clair/20 via-white to-rose-light/20 text-center">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="heading-lg text-gray-900 mb-6">
              Encore des <span className="italic text-rose-brand">questions</span> ?
            </h2>
            <p className="text-body mb-10">
              Je serai ravie d&apos;échanger avec vous et de répondre à toutes
              vos interrogations.
            </p>
            <Link href="/contact" className="btn-rose">
              Me contacter
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
