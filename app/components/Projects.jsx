import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Composant pour afficher chaque carte de projet
const ProjectCard = ({ title, description, link, delay }) => (
  <motion.div
    className="p-4 border-4 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:bg-fuchsia-100 hover:border-fuchsia-200"
    initial={{ opacity: 0, scale: 0.3 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{
      delay: delay,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
      damping: 20,
    }}
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeInOut" },
    }}
    viewport={{ once: true }}
  >
    <h3 className="mt-2 text-xl font-medium">{title}</h3>
    <p className="mt-6 text-gray-500">{description}</p>
    <Link href={link} className="text-fuchsia-500 font-medium hover:underline">
      Voir
    </Link>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "OnBulle",
      description:
        "Développement d’une plateforme en ligne permettant aux élèves d’un centre de plongée d’accéder aux cours théoriques, de s’entraîner avec des quiz et de passer l’examen théorique. Gestion des utilisateurs, suivi des progrès et correction automatique des évaluations.",
      link: "/projects/1",
    },
    {
      title: "GreenThumb",
      description:
        "Développement d’une application mobile en React Native permettant aux utilisateurs de gérer l’entretien de leurs plantes domestiques. Suivi des arrosages, rappels personnalisés, fiches d’entretien pour optimiser le soin des plantes. Ce projet a été réalisé avec un ami.",
      link: "/projects/2",
    },
    {
      title: "William-Sart",
      description:
        "Mon portfolio présente mes compétences en développement web fullstack et mon expertise dans la création d'applications modernes et performantes. Il met en avant mes réalisations et mon approche du développement : claire, modulable et évolutive.",
      link: "/projects/3",
    },
  ];

  return (
    <section id="projets" className="mt-20 pt-20 w-full max-w-3xl">
      <motion.h2
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Explorez mes projets en
        <br />
        <span className="text-fuchsia-500">développement web et mobile</span>
      </motion.h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2 gap-y-10 gap-x-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            delay={index * 0.2}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
