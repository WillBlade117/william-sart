import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => (
  <>
    {/* Titre animé */}
    <motion.h1
      className="mt-36 text-5xl font-bold md:text-6xl text-center"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <span className="text-fuchsia-500">William Sart</span>
      <motion.p
        className="text-5xl font-bold text-gray-600 md:text-6xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Développeur Web
      </motion.p>
    </motion.h1>

    {/* Sous-titre animé */}
    <motion.p
      className="mt-6 text-md text-gray-500 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      Développeur full stack passionné,
      <br />
      je crée des solutions innovantes qui transforment les idées en réalités digitales.
    </motion.p>

    {/* Boutons avec animations */}
    <div className="mt-5 flex justify-center space-x-4">
    <Link href="#contact">
      <motion.div
        className="px-4 py-2 bg-fuchsia-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-fuchsia-600"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        Me contacter
      </motion.div>
      </Link>

      <a href="/CV_william_sart.pdf" download>
        <motion.div
          className="px-4 py-2 border border-fuchsia-500 text-sm text-fuchsia-500 font-semibold rounded-lg hover:bg-fuchsia-500 hover:text-white"
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
