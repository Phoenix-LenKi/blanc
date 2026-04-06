'use client';

import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { primaryCtaHref } from '@/lib/content';
import { useState } from 'react';

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        className="relative"
      >
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl p-4 w-72"
          >
            <div className="bg-primary/10 rounded-t-xl -mx-4 -mt-4 p-4 mb-3">
              <p className="font-semibold text-text">Olá! 👋</p>
              <p className="text-sm text-text-muted">Em que podemos ajudar?</p>
            </div>
            <a
              href={primaryCtaHref}
              className="flex items-center gap-3 bg-primary text-white p-3 rounded-xl hover:bg-primary-dark transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Falar no WhatsApp</span>
            </a>
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
        </motion.button>
      </motion.div>
    </div>
  );
}
