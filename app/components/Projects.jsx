import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      title: "OnQuiz",
      description:
        "Développement d’un site de quiz en ligne proposant 10 thèmes différents pour s’amuser entre amis tout en pratiquant le développement frontend et le déploiement. Interface ludique, gestion des scores et expérience utilisateur optimisée.",
      link: "/onquiz"
    },
    {
      title: "GreenThumb",
      description:
        "Développement d’une application mobile en React Native permettant aux utilisateurs de gérer l’entretien de leurs plantes domestiques. Suivi des arrosages, rappels personnalisés, fiches d’entretien pour optimiser le soin des plantes. Ce projet a été réalisé avec un ami.",
      link: "/greenthumb",
    },
    {
      title: "William-Sart",
      description:
        "Ce portfolio présente mes compétences en développement web fullstack et mon expertise dans la création d'applications modernes et performantes. Il met en avant mes réalisations et mon approche du développement : claire, modulable et évolutive.",
      link: "/portfolio",
    },
    {
      title: "OnBulle",
      description:
        "Développement d’une plateforme en ligne permettant aux élèves d’un centre de plongée d’accéder aux cours théoriques, de s’entraîner avec des quiz et de passer l’examen théorique. Gestion des utilisateurs, suivi des progrès et correction automatique des évaluations.",
      link: "/onbulle",
    },
  ];

  return (
    <section id="projets" className="mt-20 pt-20 w-full max-w-3xl">
      <motion.h2
        className="text-4xl font-bold"
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
          <motion.div
            key={index}
            className="p-4 border-4 rounded-lg shadow-md flex flex-col md:flex-col md:col-span-1 bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="mt-2 text-lg font-medium text-center md:text-left">{project.title}</h3>
            <p className="mt-4 text-gray-500 text-sm text-center md:text-left">{project.description}</p>
            <Link href={project.link} className="text-fuchsia-500 font-medium hover:underline text-sm text-center mt-4">
              Voir
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
