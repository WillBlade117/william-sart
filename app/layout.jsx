import Header from "./components/Header";
import Footer from "./components/Footer";
import { Inter } from 'next/font/google';
import Head from 'next/head';
import "./globals.css";

export const metadata = {
  title: 'William Sart - Développeur Web et Mobile | Portfolio',
  description: 'Découvrez le portfolio de William Sart, développeur web et mobile passionné. Explorez mes projets et mon parcours unique dans le développement.',
  keywords: 'développeur web, développeur mobile, portfolio, projets web, William Sart',
  authors: [{ name: 'William Sart' }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.william-sart.fr',
    title: 'William Sart - Développeur Web et Mobile | Portfolio',
    description: 'Découvrez le portfolio de William Sart, développeur web et mobile passionné.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'William Sart - Développeur Web et Mobile | Portfolio',
    description: 'Découvrez le portfolio de William Sart, développeur web et mobile passionné.',
  },
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable}`}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.william-sart.fr" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.william-sart.fr" />
        <meta property="og:title" content="William Sart - Développeur Web et Mobile | Portfolio" />
        <meta property="og:description" content="Découvrez le portfolio de William Sart, développeur web et mobile passionné." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="William Sart - Développeur Web et Mobile | Portfolio" />
        <meta name="twitter:description" content="Découvrez le portfolio de William Sart, développeur web et mobile passionné." />
      </Head>
      <body className="bg-gradient-to-r from-fuchsia-200 via-white to-fuchsia-200 h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
