import Link from 'next/link'
import Image from 'next/image'
import { blurData } from '@/lib/blurData'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & description */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/icone.png"
                alt=""
                width={36}
                height={36}
                placeholder="blur"
                blurDataURL={blurData.icone}
              />
              <div>
                <span className="text-2xl font-serif font-bold">Respire.</span>
                <span className="text-sm text-gray-400 ml-2">Avec ton Cœur</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Coaching en Intelligence Communicationnelle et Intégrative.
              Accompagnement vers la transformation personnelle.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link href="/accompagnement" className="text-gray-300 hover:text-white transition-colors text-sm">Accompagnement</Link>
              <Link href="/offres" className="text-gray-300 hover:text-white transition-colors text-sm">Offres</Link>
              <Link href="/mon-histoire" className="text-gray-300 hover:text-white transition-colors text-sm">Mon histoire</Link>
              <Link href="/reflexion-du-coeur" className="text-gray-300 hover:text-white transition-colors text-sm">Réflexion du Cœur</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</Link>
              <Link href="/faq" className="text-gray-300 hover:text-white transition-colors text-sm">FAQ</Link>
            </div>
          </div>

          {/* Contact & réseaux */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-300 mb-6">
              <a href="mailto:contact@respire.ink" className="hover:text-white transition-colors">
                contact@respire.ink
              </a>
              <a href="tel:+14389289769" className="hover:text-white transition-colors">
                +1 (438) 928-9769
              </a>
            </div>
            <div className="flex gap-4">
              <a href="https://instagram.com/respire.avectoncoeur" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="https://facebook.com/Respire.AvectonCoeur" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/nathalie-chocron" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@respire.avectoncoeur" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Respire. Avec ton Cœur — Tous droits réservés
          </p>
          <Link
            href="/mentions-legales"
            className="text-gray-500 hover:text-white transition-colors text-xs mt-3 inline-block"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  )
}
