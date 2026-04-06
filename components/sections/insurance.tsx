'use client';

import { motion } from 'framer-motion';
import { insurancePartners } from '@/lib/content';

const insuranceLogos: Record<string, string> = {
  'Unimed Odonto': '/lead-assets/dentista-credenciado-unimed-odonto-em-florianopolis.png',
  'Uniodonto': '/lead-assets/dentista-credenciado-plano-uniodonto-em-florianopolis.png',
  'SulAmérica': '/lead-assets/dentista-credenciado-plano-sulamerica-em-florianopolis.png',
  'Porto Seguro': '/lead-assets/dentista-credenciado-plano-porto-seguro-odontologico-em-florianopolis.png',
  'Odontológico': '/lead-assets/dentista-credenciado-plano-odont-em-florianopolis.png',
  'Metlife': '/lead-assets/dentista-credenciado-plano-metlife-em-florianopolis.png',
  'Life Empresarial': '/lead-assets/dentista-credenciado-plano-life-empresarial-saude-em-florianopolis.png',
  'Inpao Dental': '/lead-assets/dentista-credenciado-plano-inpao-dental-em-florianopolis.png',
  'Ideal Odonto': '/lead-assets/dentista-credenciado-plano-ideal-odonto-em-florianopolis.png',
  'Hapvida': '/lead-assets/dentista-credenciado-plano-hapvida-em-florianopolis.png',
  'Geap Saúde': '/lead-assets/dentista-credenciado-plano-geap-saude-em-florianopolis.png',
  'Dentaluni': '/lead-assets/dentista-credenciado-plano-dentaluni-em-florianopolis.png',
  'Cruz Dental': '/lead-assets/dentista-credenciado-plano-cruz-dental-em-florianopolis.png',
  'Celos': '/lead-assets/dentista-credenciado-plano-celos-em-florianopolis.png',
  'Care Plus': '/lead-assets/dentista-credenciado-plano-care-plus-em-florianopolis.png',
  'Athena Saúde': '/lead-assets/dentista-credenciado-plano-athena-saude-em-florianopolis.png',
  'Amil Dental': '/lead-assets/dentista-credenciado-plano-amil-dental-em-florianopolis.png',
  'Aesp Odonto': '/lead-assets/dentista-credenciado-plano-aesp-odonto-em-florianopolis.png',
};

export function Insurance() {
  return (
    <section id="planos" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-primary-50 text-primary-dark px-4 py-1.5 rounded-full text-sm font-medium mb-4"
          >
            Convênios Aceitos
          </motion.span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-4">
            Planos Odontológicos
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Dentista Credenciado para os principais planos odontológicos de Florianopolis.
            Verifique se o seu plano está na lista.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {insurancePartners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-surface-alt rounded-xl p-4 h-full flex items-center justify-center border border-transparent hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <p className="text-sm font-semibold text-text text-center">{partner}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-text-muted text-sm">
            Não encontrou seu plano? <a href="https://wa.me/5548991086854?text=Olá,%20gostaria%20de%20informações%20sobre%20planos%20odontológicos." className="text-primary font-medium">Fale conosco</a> para verificar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
