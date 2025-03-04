"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      {/* Section d'accueil */}
      <motion.h1
        className="text-5xl font-bold md:text-6xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
      <span className="text-white">William Sart</span>
      </motion.h1>
      <p className="mt-4 text-lg text-gray-600">
        Développeur Web | Passionné par le Front-end & Next.js
      </p>
      <p className="mt-2 text-gray-500">
        Je conçois des interfaces modernes et performantes avec React & Next.js.<br />
        Actuellement, j’explore le monde de la cybersécurité. 🚀
      </p>

      {/* Boutons */}
      <div className="mt-6 flex space-x-4">
        <Link href="/projects" className="px-5 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
          Découvrir mes projets
        </Link>
        <Link href="/cv.pdf" className="px-5 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white">
          Télécharger mon CV
        </Link>
      </div>

      {/* Aperçu rapide des projets */}
      <section className="mt-16 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold">Quelques projets</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-medium">Projet 1</h3>
            <p className="text-gray-500">Brève description ici...</p>
            <Link href="/projects/1" className="text-blue-500 hover:underline">Voir</Link>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-medium">Projet 2</h3>
            <p className="text-gray-500">Brève description ici...</p>
            <Link href="/projects/2" className="text-blue-500 hover:underline">Voir</Link>
          </div>
        </div>
      </section>

      {/* À propos rapide */}
      <section className="mt-16 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold">À propos</h2>
        <p className="mt-2 text-gray-500">
          Autodidacte et formé en développement web, je me spécialise dans React & Next.js. <br />
          En septembre, je démarre une formation en cybersécurité pour élargir mes compétences.
        </p>
        <Link href="/about" className="mt-4 inline-block text-blue-500 hover:underline">
          En savoir plus
        </Link>
      </section>

      {/* Contact */}
      <footer className="mt-16 w-full max-w-2xl text-center border-t pt-6">
        <p className="text-gray-500">Retrouvez-moi sur :</p>
        <div className="mt-2 flex justify-center space-x-4">
          <Link href="#" className="text-blue-500 hover:underline">GitHub</Link>
          <Link href="#" className="text-blue-500 hover:underline">LinkedIn</Link>
          <Link href="/contact" className="text-blue-500 hover:underline">Me contacter</Link>
        </div>
      </footer>
    </main>
  );
}
