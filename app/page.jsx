"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      {/* Section d'accueil */}
      <motion.h1
        className="mt-40 text-6xl font-bold md:text-8xl"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-fuchsia-500">William Sart</span>
        <p className="text-6xl font-bold text-gray-600 md:text-8xl">
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

      {/* À propos */}
      <section id="about" className="mt-40 w-full max-w-2xl">
        <h2 className="text-5xl font-bold">Prêt à découvrir qui je suis ?<br /><span className="text-fuchsia-500">Allons-y !</span></h2>
        <p className="mt-6 text-lg text-gray-500">
        Je suis un développeur fullstack web et mobile de 32 ans, passionné par la technologie et la programmation.
        Après une carrière en tant qu'ouvrier, j'ai entrepris une reconversion professionnelle en 2024 pour me
        consacrer à l'informatique. Depuis, je n'ai cessé d'apprendre et d'élargir mes compétences, en me formant 
        au développement web lors d'un bootcamp (2024) et en approfondissant en autodidacte des domaines tels que les systèmes,
         les réseaux et la sécurité.
        </p>
        <p className="mt-6 text-lg text-gray-500">
        Ma curiosité insatiable, ma précision et mon perfectionnisme me poussent à toujours chercher à améliorer mes 
        compétences et à relever de nouveaux défis. Je suis convaincu que mon parcours atypique et mon engagement 
        envers l'excellence font de moi un atout pour tout projet technologique.
        </p>
      </section>

      {/* Aperçu des projets */}
      <section id="projets" className="mt-40 w-full max-w-3xl">
      <h2 className="text-5xl font-bold">Explorez mes projets en<br /><span className="text-fuchsia-500">développement web et mobile</span></h2>        <div className="mt-4 grid gap-4 md:grid-cols-2">
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
    </main>
  );
}
