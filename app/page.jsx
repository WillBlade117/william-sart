"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      {/* Section d'accueil */}
      <motion.h1
        className="mt-40 text-6xl font-bold md:text-7xl"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-fuchsia-500">William Sart</span>
        <p className="text-6xl font-bold text-gray-600 md:text-7xl">
          Développeur Web
        </p>
      </motion.h1>
      <p className="mt-8 text-xl text-gray-500">
        Développeur full stack passionné,<br />
        je crée des solutions innovantes qui transforment les idées en réalités digitales.
      </p>

      {/* Boutons */}
      <div className="mt-10 flex space-x-4">
        <Link href="/projects" className="px-5 py-3 bg-fuchsia-500 text-white rounded-lg shadow-md hover:bg-fuchsia-600">
          Me contacter
        </Link>
        <Link href="/cv.pdf" className="px-5 py-3 border border-fuchsia-500 text-fuchsia-500 rounded-lg hover:bg-fuchsia-500 hover:text-white">
          Télécharger mon CV
        </Link>
      </div>

      {/* Aperçu rapide des projets */}
      <section id="projets" className="mt-40 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold">Quelques projets</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-medium">Projet 1</h3>
            <p className="text-gray-500">Brève description ici...</p>
            <Link href="/projects/1" className="text-fuchsia-500 hover:underline">Voir</Link>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-medium">Projet 2</h3>
            <p className="text-gray-500">Brève description ici...</p>
            <Link href="/projects/2" className="text-fuchsia-500 hover:underline">Voir</Link>
          </div>
        </div>
      </section>

      {/* À propos rapide */}
      <section id="about" className="mt-40 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold">À propos</h2>
        <p className="mt-2 text-gray-500">
          Autodidacte et formé en développement web, je me spécialise dans React & Next.js. <br />
          En septembre, je démarre une formation en cybersécurité pour élargir mes compétences.
        </p>
        <Link href="/about" className="mt-4 inline-block text-fuchsia-500 hover:underline">
          En savoir plus
        </Link>
      </section>
    </main>
  );
}
