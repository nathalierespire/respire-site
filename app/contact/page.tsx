'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import FloatingCircles from '@/components/FloatingCircles'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Intégrer avec un service d'email (EmailJS, Formspree, etc.)
    setSubmitted(true)
  }

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-bleu-clair/30 via-white to-rose-light/20 overflow-hidden">
        <FloatingCircles
          circles={[
            { size: 250, color: 'rgba(233, 30, 140, 0.05)', top: '20%', right: '10%', delay: 0 },
            { size: 180, color: 'rgba(74, 144, 184, 0.06)', bottom: '10%', left: '5%', delay: 1 },
          ]}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-rose-brand/80 mb-4"
          >
            Prenons contact
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="heading-xl text-gray-900 mb-6"
          >
            Commençons une <span className="italic text-rose-brand">conversation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-body max-w-xl mx-auto"
          >
            Chaque transformation commence par un premier échange.
            N&apos;hésitez pas à me contacter, je serai ravie de vous répondre.
          </motion.p>
        </div>
      </section>

      {/* FORMULAIRE + COORDONNÉES */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Formulaire */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                {submitted ? (
                  <div className="text-center p-12 rounded-3xl bg-bleu-clair/30 border border-bleu-profond/10">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="heading-md text-gray-900 mb-3">Message envoyé !</h3>
                    <p className="text-body">
                      Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                          Nom complet
                        </label>
                        <input
                          type="text"
                          id="nom"
                          required
                          value={formData.nom}
                          onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-brand focus:ring-2 focus:ring-rose-brand/10 outline-none transition-all duration-200 text-gray-800"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Courriel
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-brand focus:ring-2 focus:ring-rose-brand/10 outline-none transition-all duration-200 text-gray-800"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone <span className="text-gray-400">(optionnel)</span>
                        </label>
                        <input
                          type="tel"
                          id="telephone"
                          value={formData.telephone}
                          onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-brand focus:ring-2 focus:ring-rose-brand/10 outline-none transition-all duration-200 text-gray-800"
                          placeholder="+1 (514) ..."
                        />
                      </div>
                      <div>
                        <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-2">
                          Sujet
                        </label>
                        <select
                          id="sujet"
                          required
                          value={formData.sujet}
                          onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-brand focus:ring-2 focus:ring-rose-brand/10 outline-none transition-all duration-200 text-gray-800 bg-white"
                        >
                          <option value="">Choisir...</option>
                          <option value="decouverte">Séance découverte (gratuite)</option>
                          <option value="transformation">Programme de transformation</option>
                          <option value="question">Question générale</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Votre message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-brand focus:ring-2 focus:ring-rose-brand/10 outline-none transition-all duration-200 text-gray-800 resize-none"
                        placeholder="Parlez-moi de vous et de ce qui vous amène..."
                      />
                    </div>

                    <button type="submit" className="btn-rose w-full sm:w-auto">
                      Envoyer le message
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Coordonnées */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.2}>
                <div className="sticky top-28 space-y-8">
                  <div>
                    <h3 className="heading-md text-gray-900 mb-6">Coordonnées</h3>

                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-rose-light flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-rose-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 mb-0.5">Courriel</p>
                          <a href="mailto:contact@respire.ink" className="text-gray-500 hover:text-rose-brand transition-colors text-sm">
                            contact@respire.ink
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-bleu-clair flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-bleu-profond" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 mb-0.5">Téléphone</p>
                          <a href="tel:+14389289769" className="text-gray-500 hover:text-rose-brand transition-colors text-sm">
                            +1 (438) 928-9769
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-8">
                    <h4 className="font-medium text-gray-900 mb-4">Suivez-moi</h4>
                    <div className="flex gap-3">
                      {[
                        { label: 'Instagram', href: 'https://instagram.com/respire.avectoncoeur' },
                        { label: 'Facebook', href: 'https://facebook.com/Respire.AvectonCoeur' },
                        { label: 'LinkedIn', href: 'https://linkedin.com/in/nathalie-chocron' },
                      ].map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-rose-brand hover:border-rose-brand/20 transition-all duration-200"
                          aria-label={social.label}
                        >
                          <span className="text-xs font-medium">{social.label[0]}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-creme/50 border border-or/10">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      <strong className="text-gray-800">Séance découverte gratuite</strong>
                      <br />
                      15 minutes pour faire connaissance, comprendre vos besoins
                      et voir si nous sommes faites pour travailler ensemble.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
