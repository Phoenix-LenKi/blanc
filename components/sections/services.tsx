'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/content';
import { Sparkles, ArrowRight } from 'lucide-react';

const serviceImages: Record<string, string> = {
  'Estética Dental': '/lead-assets/Estetica-Dental-Lentes-de-Contato-Facetas-em-Resina-e-Clareamento.-Dentista-Centro-Florianopolis.png',
  'Implantes Dentários': '/lead-assets/Implantes-Dentarios-Recupere-seusorriso.-Implante-unitario-e-Protese-Protocolo.-Dentista-Centro-Florianopolis.png',
  'Ortodontia (Aparelhos)': '/lead-assets/Ortodontia-Aparelhos-Alinhadores-Invisiveis-e-Aparelhos-esteticos_metalicos.-Dentista-Centro-Florianopolis.png',
  'Odontopediatria': '/lead-assets/Odontopediatria-Cuidado-especializado-para-criancas-e-Cuidado-especializado-para-criancas-e-Ortopedia-Infantil.-Dentista-Centro-Florianopolis.png',
  'Clínico Geral e Prevenção': '/lead-assets/Clinico-Geral-e-Prevencao-Check-up-Limpeza-Dental-Restauracoes-e-Tratamento-de-Gengiva.-Dentista-Centro-Florianopolis.png',
  'Harmonização Orofacial': '/lead-assets/Harmonizacao-Orofacial-Botox-terapeutico-e-Preenchimento-com-Acido-Hialuronico.-Dentista-Centro-Florianopolis.png',
  'Tratamentos Especializados': '/lead-assets/Tratamentos-Especializados-Tratamento-de-Canal-Endodontia-e-Cirurgias-Extracao-de-Siso.-Dentista-Centro-Florianopolis.png',
};

const serviceColors: Record<string, string> = {
  'Estética Dental': 'from-rose-400/20 to-rose-600/20',
  'Implantes Dentários': 'from-emerald-400/20 to-emerald-600/20',
  'Ortodontia (Aparelhos)': 'from-violet-400/20 to-violet-600/20',
  'Odontopediatria': 'from-pink-400/20 to-pink-600/20',
  'Clínico Geral e Prevenção': 'from-cyan-400/20 to-cyan-600/20',
  'Harmonização Orofacial': 'from-amber-400/20 to-amber-600/20',
  'Tratamentos Especializados': 'from-blue-400/20 to-blue-600/20',
};

export function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            className="inline-flex items-center gap-2 bg-primary-50 text-primary-dark px-4 py-1.5 rounded-full text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            Nossos Tratamentos
          </motion.span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Nossos Dentistas Especialistas e Clínicos Gerais, devidamente registrados no CRO-SC, estão prontos para te atender com excelência.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-border/50">
                <div className="relative aspect-video sm:aspect-[4/3] overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${serviceColors[service.title] || 'from-primary/20 to-primary-dark/20'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <img
                    src={serviceImages[service.title] || '/lead-assets/Clinica-Odontologica-Blanc-Dentista-Centro-Florianopolis-.png'}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-heading font-semibold text-white mb-1">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-sm line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
