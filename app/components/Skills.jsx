import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaCogs, FaDatabase, FaPaintBrush, FaTools, FaSearch, FaMobileAlt, FaRocket, } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    {
      title: "Frontend",
      description: "Pour permettre aux utilisateurs d'interagir de manière intuitive et fluide avec mes sites, ma stack du moment c'est React avec NextJS.",
      icon: <FaReact />,
    },
    {
      title: "Backend",
      description: "C'est le moteur qui fait tourner un site. Je travaille avec Next et Node.js/Express.js.",
      icon: <FaCogs />,
    },
    {
      title: "BDD",
      description: "Permet de stocker des données. J'utilise MongoDB en mappant mes données avec Mongoose.",
      icon: <FaDatabase />,
    },
    {
      title: "UX/UI",
      description: "Je fais attention au design des mes apps. Pour intégrer des interfaces élégantes et fonctionnelles j'utilise Tailwind.",
      icon: <FaPaintBrush />,
    },
    {
      title: "CMS",
      description: "J'utilise parfois Wix pour simplifier la gestion du site par le client, assurant une prise en main facile et efficace.",
      icon: <FaTools />,
    },
    {
      title: "SEO",
      description: "Optimisation du site pour les moteurs de recherche. J'optimise les mots-clés, la structure des données, la sémantique et la performance.",
      icon: <FaSearch />,
    },
    {
      title: "Responsive",
      description: "J'ajuste le contenu et les éléments visuels de mes sites pour qu'ils s'affichent de manière optimale sur tout type d'appareil.",
      icon: <FaMobileAlt />,
    },
    {
      title: "Performance",
      description: "Je développe des sites web performants en utilisant les dernières technologies, optimisant ainsi le SEO et garantissant d'excellents scores Lighthouse.",
      icon: <FaRocket />,
    },
    {
      title: "Application Native",
      description: "J'utilise React pour créer des apps avec React Native, ce qui facilite la compatibilité sur iOS et Android tout en restant performant.",
      icon: <FaReact />,
    },
  ];

  return (
    <section id="skills" className="mt-20 pt-20 w-full max-w-3xl">
      {/* Titre avec animation au scroll */}
      <motion.h2
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Pourquoi je suis<br />
        <span className="text-fuchsia-500">un développeur complet</span>
      </motion.h2>

      {/* Liste des compétences */}
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-4 border-4 rounded-lg shadow-md flex flex-col md:flex-col md:col-span-1 bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex flex-col items-center md:flex-row md:items-start md:w-full">
              <div className="text-fuchsia-500 text-2xl mb-2 md:mr-2 md:mb-0">
                {skill.icon}
              </div>
              <h3 className="text-md font-medium text-center md:text-left">
                {skill.title}
              </h3>
            </div>
            <p className="mt-4 md:mt-2 text-sm text-gray-500 text-center md:text-left md:w-full">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
