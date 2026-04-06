'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { companyName, phones, whatsapp, email, addresses, socials, primaryCtaHref, businessHours } from '@/lib/content';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-secondary text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 gradient-premium" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/lead-assets/logosf-branco.png"
                alt="Blanc Odontologia"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-white/70 mb-6 max-w-md leading-relaxed">
              Clínica odontológica de excelência em Florianópolis. Referência em Implantes Dentários, Lentes de Contato, Ortodontia e Harmonização Orofacial.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110"
                >
                  {social.platform === 'Instagram' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                  {social.platform === 'Google Maps' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-5">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${phones[0].replace(/\D/g, '')}`} className="flex items-center gap-3 text-white/70 hover:text-primary transition-all duration-300 group">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Telefone</p>
                    <span>{phones[0]}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={primaryCtaHref} className="flex items-center gap-3 text-white/70 hover:text-[#25D366] transition-all duration-300 group">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">WhatsApp</p>
                    <span>{whatsapp}</span>
                  </div>
                </a>
              </li>
              {email && (
                <li>
                  <a href={`mailto:${email}`} className="flex items-center gap-3 text-white/70 hover:text-primary transition-all duration-300 group">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50">E-mail</p>
                      <span className="text-sm">{email}</span>
                    </div>
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-5">Localização</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-1">Endereço</p>
                  <p className="text-sm leading-relaxed">
                    {addresses[0].street}<br />
                    {addresses[0].neighborhood}, {addresses[0].city} - {addresses[0].state}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-1">Horário de Funcionamento</p>
                  {businessHours.map((bh, idx) => (
                    <p key={idx} className="text-sm">{bh.day}: {bh.hours}</p>
                  ))}
                </div>
              </li>
            </ul>
            <div className="mt-6 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d353.50462967547085!2d-48.5487606!3d-27.5931655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xab4f40f69cd87c77!2sBlanc%20Odontologia!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Blanc Odontologia"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>&copy; {currentYear} {companyName}. Todos os direitos reservados.</p>
            <p className="flex items-center gap-2">
              <span>RESP. TÉC:</span>
              <span className="text-primary font-medium">Dra. Daniela Zen</span>
              <span>CRO/SC 17680</span>
            </p>
          </div>
          <div className="text-center mt-4 pt-4 border-t border-white/10">
            <p className="text-white/50 text-sm">
              Desenvolvido por{' '}
              <a
                href="https://lenki.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline font-medium"
              >
                LenKi
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
