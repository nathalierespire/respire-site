"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { blurData } from "@/lib/blurData";

const navLinks = [
  { href: "/accompagnement", label: "Accompagnement" },
  { href: "/offres", label: "Offres" },
  { href: "/mon-histoire", label: "Mon histoire" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo.png"
              alt="Respire. Avec ton Cœur"
              width={180}
              height={68}
              className="h-18 w-auto transition-transform group-hover:scale-[1.02]"
              placeholder="blur"
              blurDataURL={blurData.logo}
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-rose-brand transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-brand transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link href="/reflexion-du-coeur" aria-label="Réflexion du cœur">
              <Image
                src="/images/icone.png"
                alt="Cœur"
                width={32}
                height={32}
                className="hover:scale-110 transition-transform"
                placeholder="blur"
                blurDataURL={blurData.icone}
              />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-gray-800"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-6 bg-gray-800"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-gray-800"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-rose-brand transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/reflexion-du-coeur"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-rose-brand"
              >
                Réflexion du cœur
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
