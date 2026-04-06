'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { faqData } from '@/lib/content';
import { Plus, Minus, MessageCircleQuestion } from 'lucide-react';

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-20 lg:py-32 bg-surface-alt relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/2" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                        className="inline-flex items-center gap-2 bg-white border border-border/50 text-text px-4 py-1.5 rounded-full text-sm font-medium mb-4 shadow-sm"
                    >
                        <MessageCircleQuestion className="w-4 h-4 text-primary" />
                        Dúvidas Frequentes
                    </motion.span>
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-4">
                        Perguntas Frequentes (FAQ)
                    </h2>
                    <p className="text-lg text-text-muted">
                        Separamos as dúvidas mais comuns dos nossos pacientes para te ajudar.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqData.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                key={index}
                                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${isOpen ? 'border-primary/40 shadow-premium' : 'border-border/50 shadow-sm hover:shadow-md hover:border-primary/20'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                                    aria-expanded={isOpen}
                                >
                                    <span className={`text-base sm:text-lg font-medium pr-8 transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-text'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isOpen ? 'bg-primary text-white' : 'bg-surface-alt text-text-muted'}`}>
                                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        >
                                            <div className="px-6 pb-6 pt-2">
                                                <div className="w-8 h-0.5 bg-primary/30 mb-4 rounded-full" />
                                                <p className="text-text-muted leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
