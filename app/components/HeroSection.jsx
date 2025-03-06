import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => (
    <>
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
  </>
);

export default HeroSection;
