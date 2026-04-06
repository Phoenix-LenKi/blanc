'use client';

import Link from 'next/link';
import { Phone, MapPin, Menu, X } from 'lucide-react';
import { primaryCtaHref, whatsapp, phones } from '@/lib/content';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/lead-assets/logosf.png"
              alt="Blanc Odontologia"
              className="h-10 sm:h-12 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {['Serviços', 'Sobre', 'Planos', 'Contato'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="text-text-muted hover:text-primary transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${phones[0].replace(/\D/g, '')}`}
              className="hidden xl:flex items-center gap-2 text-text-muted hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{phones[0]}</span>
            </a>
            <a
              href={primaryCtaHref}
              className="hidden lg:inline-flex gradient-premium text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:shadow-premium transition-all duration-300"
            >
              Agendar Consulta
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-text"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border shadow-2xl"
          >
            <div className="px-6 py-8 space-y-6">
              <nav className="flex flex-col space-y-4">
                {['Serviços', 'Sobre', 'Planos', 'Contato'].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-text hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </nav>

              <div className="pt-6 border-t border-border space-y-4">
                <a
                  href={`tel:${phones[0].replace(/\D/g, '')}`}
                  className="flex items-center gap-3 text-text-muted"
                >
                  <div className="w-10 h-10 bg-surface-alt rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">{phones[0]}</span>
                </a>

                <a
                  href={primaryCtaHref}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center w-full gradient-premium text-white px-6 py-4 rounded-xl font-semibold hover:shadow-premium transition-all duration-300"
                >
                  Agendar Consulta
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
