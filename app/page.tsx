'use client';

import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { About } from '@/components/sections/about';
import { Insurance } from '@/components/sections/insurance';
import { FAQ } from '@/components/sections/faq';
import { Footer } from '@/components/sections/footer';
import { FloatingWhatsApp } from '@/components/sections/floating-whatsapp';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Insurance />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
