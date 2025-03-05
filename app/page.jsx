"use client";

import Contact from "./components/Contact";
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
        <Link href="#contact" className="px-5 py-3 bg-fuchsia-500 text-white rounded-lg shadow-md hover:bg-fuchsia-600">
          Me contacter
        </Link>
        <Link href="/cv.pdf" className="px-5 py-3 border border-fuchsia-500 text-fuchsia-500 rounded-lg hover:bg-fuchsia-500 hover:text-white">
          Télécharger mon CV
        </Link>
      </div>

      {/* À propos */}
      <section id="about" className="mt-20 pt-20 w-full max-w-2xl">
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
      <Link
        href="https://www.linkedin.com/in/william-sart-developpeur-concepteur-web-mobile-cybersecurite"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6"
      >
        <span className="border border-fuchsia-200 bg-fuchsia-200 text-gray-500 rounded-lg hover:bg-fuchsia-500 hover:text-gray-100 hover:border-gray-100 transition-all px-2 py-1">
          M'ajouter sur LinkedIn
        </span>
      </Link>

      {/* Aperçu des projets */}
      <section id="projets" className="mt-20 pt-20 w-full max-w-3xl">
        <h2 className="text-5xl font-bold">Explorez mes projets en<br /><span className="text-fuchsia-500">développement web et mobile</span></h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="mt-10 p-4 border rounded-lg shadow-md">
            <h3 className="mt-2 text-xl font-medium">OnBulle</h3>
            <p className="mt-6 text-gray-500">Développement d’une plateforme en ligne permettant aux élèves d’un centre de plongée d’accéder
              aux cours théoriques, de s’entraîner avec des quiz et de passer l’examen théorique. Gestion des utilisateurs, suivi des
              progrès et correction automatique des évaluations.</p>
            <Link href="/projects/1" className="text-fuchsia-500 hover:underline">Voir la stack</Link>
          </div>
          <div className="mt-10 p-4 border rounded-lg shadow-md">
            <h3 className="mt-2 text-xl font-medium">GreenThumb</h3>
            <p className="mt-6 text-gray-500">Développement d’une application mobile en React Native permettant aux utilisateurs de gérer
              l’entretien de leurs plantes domestiques. Suivi des arrosages, rappels personnalisés, fiches d’entretien pour optimiser
              le soin des plantes. Ce projet a été réalisé avec un ami.</p>
            <Link href="/projects/2" className="text-fuchsia-500 hover:underline">Voir la stack</Link>
          </div>
        </div>
      </section>

      <section id="contact" className="mt-20 pt-20">
      <h2 className="text-5xl font-bold">Vous voulez en savoir plus ?<br /><span className="text-fuchsia-500">Contactez moi !</span></h2> 
      <Contact />
      </section>

    </main>
  );
}
