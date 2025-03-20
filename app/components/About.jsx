import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AvatarScene from "./Avatar3D";

const About = () => (
  <>
    <section
      id="about"
      className="mt-20 pt-20 w-full max-w-2xl"
    >
      <motion.h2
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Prêt à découvrir qui je suis ?<br />
        <span className="text-fuchsia-500">Allons-y !</span>
      </motion.h2>

      <div className='flex flex-col md:flex-row max-h-[600px]'>
        <div>
          <p className="mt-6 text-md text-gray-500 md:min-w-[380px]">
            Je suis un développeur fullstack web et mobile de 32 ans, passionné par la technologie et la programmation.
            Après une carrière en tant qu'ouvrier, j'ai entrepris une reconversion professionnelle en 2024 pour me
            consacrer à l'informatique. Depuis, je n'ai cessé d'apprendre et d'élargir mes compétences, en me formant
            au développement web lors d'un bootcamp (2024) et en approfondissant en autodidacte des domaines tels que les systèmes,
            les réseaux et la sécurité.
          </p>
          <p className="mt-6 text-md text-gray-500">
            Ma curiosité insatiable, ma précision et mon perfectionnisme me poussent à toujours chercher à améliorer mes
            compétences et à relever de nouveaux défis. Je suis convaincu que mon parcours atypique et mon engagement
            envers l'excellence font de moi un atout pour tout projet technologique.
          </p>
        </div>
        <div className="hidden md:block mt-2 md:min-w-[350px]">
  <AvatarScene />
</div>

      </div>
    </section>

    <div className="mt-5">
      <motion.div
        className="px-4 py-2 border border-fuchsia-500 font-semibold text-sm text-fuchsia-500 rounded-lg hover:bg-fuchsia-500 hover:text-white"
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href="https://www.linkedin.com/in/william-sart-developpeur-concepteur-web-mobile-cybersecurite"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            M'ajouter sur LinkedIn
          </span>
        </Link>
      </motion.div>
    </div>
  </>
);

export default About;
