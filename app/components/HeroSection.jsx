import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => (
  <>
    {/* Titre animé */}
    <motion.h1
      className="mt-40 text-6xl font-bold md:text-8xl text-center"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <span className="text-fuchsia-500">William Sart</span>
      <motion.p
        className="text-6xl font-bold text-gray-600 md:text-8xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Développeur Web
      </motion.p>
    </motion.h1>

    {/* Sous-titre animé */}
    <motion.p
      className="mt-8 text-xl text-gray-500 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      Développeur full stack passionné,
      <br />
      je crée des solutions innovantes qui transforment les idées en réalités digitales.
    </motion.p>

    {/* Boutons avec animations */}
    <div className="mt-10 flex justify-center space-x-4">
      <motion.div
        className="px-5 py-3 bg-fuchsia-500 text-white font-bold rounded-lg shadow-md hover:bg-fuchsia-600"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="#contact">Me contacter</Link>
      </motion.div>

      <a href="/CV_william_sart.pdf" download>
        <motion.div
          className="px-5 py-3 border border-fuchsia-500 text-fuchsia-500 font-bold rounded-lg hover:bg-fuchsia-500 hover:text-white"
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          Télécharger mon CV
        </motion.div>
      </a>

    </div>
  </>
);

export default HeroSection;
