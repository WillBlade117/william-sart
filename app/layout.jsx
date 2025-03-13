import Header from "./components/Header";
import Footer from "./components/Footer";
import { Inter, Roboto_Mono } from 'next/font/google'
import "./globals.css";

export const metadata = {
  title: 'William Sart',
  description: 'Bienvenue sur mon portfolio. Découvrez mes projets en développement web et mobile, ainsi que mon parcours unique.',
  authors: [{ name: 'William Sart' }],
  icons: {
    icon: '/favicon.ico',
  },
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable}`}>
      <body className="bg-gradient-to-r from-fuchsia-100 via-white to-fuchsia-100 h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
