'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import FloatingCircles from '@/components/FloatingCircles'

export default function ContactClient() {
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
            Faisons le premier pas <span className="italic text-rose-brand">ensemble</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-body max-w-xl mx-auto"
          >
            Réservez votre séance découverte offerte de 15 minutes, sans
            engagement.
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
                <div className="mb-10">
                  <h3 className="heading-md text-gray-900 mb-4">
                    Ce que nous ferons pendant cet échange
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-rose-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 text-sm md:text-base">
                        Faire le point sur votre situation actuelle et vos défis.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-rose-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 text-sm md:text-base">
                        Clarifier vos attentes et vos objectifs prioritaires.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-rose-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 text-sm md:text-base">
                        Vérifier si mon approche correspond exactement à ce dont vous avez besoin.
                      </span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
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
                          <option value="seance-unite">Séance individuelle (125$)</option>
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
                      <a
                        href="https://www.instagram.com/respire.avectoncoeur/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-rose-brand hover:border-rose-brand/20 transition-all duration-200"
                        aria-label="Instagram"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.facebook.com/Respire.AvectonCoeur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-rose-brand hover:border-rose-brand/20 transition-all duration-200"
                        aria-label="Facebook"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 320 512">
                          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/nathalie-chocron/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-rose-brand hover:border-rose-brand/20 transition-all duration-200"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.tiktok.com/@respire.avectoncoeur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-rose-brand hover:border-rose-brand/20 transition-all duration-200"
                        aria-label="TikTok"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                          <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185.66,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                        </svg>
                      </a>
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
