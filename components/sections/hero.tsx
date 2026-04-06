'use client';

import { motion } from 'framer-motion';
import { primaryCtaLabel, primaryCtaHref, heroTitle, heroSubtitle, slogan, phones } from '@/lib/content';
import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-28 sm:pt-32 lg:pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-surface-alt" />
      <div className="absolute inset-0 bg-[url('/lead-assets/Clinica-Odontologica-Blanc-Dentista-Centro-Florianopolis-.png')] bg-cover bg-center opacity-[0.03]" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8 lg:space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary-50 text-primary-dark px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              {slogan}
            </motion.div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-text leading-[1.2]">
              {heroTitle}
              <span className="block text-primary mt-2 text-xl sm:text-2xl lg:text-3xl">{heroSubtitle}</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <motion.a
                href={primaryCtaHref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 gradient-premium text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:shadow-premium transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Agendar Consulta
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-border text-text rounded-xl font-semibold text-base sm:text-lg hover:border-primary hover:text-primary transition-all duration-300"
              >
                Ver Serviços
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            <div className="relative lg:mt-16">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 to-primary-dark/10 rounded-3xl transform rotate-1" />
              <div className="absolute -inset-3 bg-white/50 rounded-2xl blur-xl" />
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <img
                  src="/lead-assets/dra.png"
                  alt="Dra. Daniela Zen - Blanc Odontologia"
                  className="w-full object-cover object-top aspect-[4/3]"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-text text-lg">CRO/SC 17680</p>
                <p className="text-text-muted">Dra. Daniela Zen</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center">
                  <span className="text-success font-bold">★</span>
                </div>
                <div>
                  <p className="font-semibold text-text">5.0</p>
                  <p className="text-xs text-text-muted">Avaliação</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
