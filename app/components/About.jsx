import React from 'react';
import Link from 'next/link';

const About = () => (
  <>
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
      </>
);

export default About;
