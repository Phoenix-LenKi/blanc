import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://blanc-six.vercel.app'), // Substituir pelo domínio real quando disponível
  title: 'Blanc Odontologia | Design de Sorrisos & Tecnologia em Florianópolis',
  description: 'Referência em Implantes, Lentes de Contato e Harmonização no Centro de Florianópolis. Tecnologia de ponta e cuidado exclusivo para o seu melhor sorriso.',
  keywords: 'dentista premium, odontologia florianopolis, implante dentario centro, lentes de contato dental, clareamento dental, harmonização facial florianopolis',
  icons: {
    icon: '/lead-assets/logo123.png',
    apple: '/lead-assets/logo123.png',
  },
  openGraph: {
    title: 'Blanc Odontologia | Design de Sorrisos & Tecnologia em Florianópolis',
    description: 'Referência em Implantes, Lentes de Contato e Harmonização no Centro de Florianópolis. Tecnologia de ponta e cuidado exclusivo.',
    type: 'website',
    url: 'https://blanc-six.vercel.app',
    locale: 'pt_BR',
    siteName: 'Blanc Odontologia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blanc Odontologia | Design de Sorrisos & Tecnologia',
    description: 'Tecnologia de ponta e cuidado exclusivo para o seu melhor sorriso no Centro de Florianópolis.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${inter.variable} font-body bg-background text-text antialiased`}>
        {children}
      </body>
    </html>
  );
}