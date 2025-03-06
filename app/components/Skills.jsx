import React from 'react';

const Skills = () => {
  const skills = [
    {
      title: "Frontend",
      description: "Pour permettre aux utilisateurs d'interagir de manière intuitive et fluide avec mes sites, ma stack du moment c'est React avec NextJS.",
    },
    {
      title: "Backend",
      description: "C'est le moteur qui fait tourner un site. Je travaille avec Next et Node.js/Express.js.",
    },
    {
      title: "BDD",
      description: "Permet de stocker des données. J'utilise MongoDB en mappant mes données avec Mongoose.",
    },
    {
      title: "UX/UI",
      description: "Je fais attention au design des mes apps. Pour intégrer des interfaces élégantes et fonctionnelles j'utilise Tailwind.",
    },
    {
      title: "CMS",
      description: "J'utilise parfois Wix pour simplifier la gestion du site par le client, assurant une prise en main facile et efficace.",
    },
    {
      title: "SEO",
      description: "Optimisation du site pour les moteurs de recherche. J'optimise les mots-clés, la structure des données, la sémantique et la performance.",
    },
    {
      title: "Responsive",
      description: "J'ajuste le contenu et les éléments visuels de mes sites pour qu'ils s'affichent de manière optimale sur tout type d'appareil.",
    },
    {
      title: "Performance",
      description: "Je développe des sites web ultra-performants en utilisant les dernières technologies, optimisant ainsi le SEO et garantissant d'excellents scores Lighthouse.",
    },
    {
      title: "Application Native",
      description: "J'utilise React pour créer des apps avec React Native, ce qui facilite la compatibilité sur iOS et Android tout en restant performant.",
    },
  ];

  return (
    <section id="skills" className="mt-20 pt-20 w-full max-w-3xl">
      <h2 className="text-5xl font-bold">Pourquoi je suis<br /><span className="text-fuchsia-500">un développeur complet</span></h2>
      <div className="mt-10 flex flex-col gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-md flex flex-col md:flex-row transition-transform duration-300 hover:scale-105 hover:bg-fuchsia-100 hover:border-fuchsia-500"
          >
            <h3 className="text-xl font-medium md:w-1/3 flex items-center justify-center md:text-left">
              {skill.title}
            </h3>
            <p className="mt-2 md:mt-0 text-gray-500 md:w-2/3 text-left">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
