import Image from "next/image";

const technologies = [
    { name: "Next.js", logo: "/technos/nextjs.svg", url: "https://nextjs.org/" },
    { name: "React", logo: "/technos/react.svg", url: "https://react.dev/" },
    { name: "MongoDB", logo: "/technos/mongodb.svg", url: "https://www.mongodb.com/" },
    { name: "Tailwind CSS", logo: "/technos/tailwind.svg", url: "https://tailwindcss.com/" },
    { name: "Express", logo: "/technos/express.svg", url: "https://expressjs.com/" },
    { name: "DaisyUI", logo: "/technos/daisyui.svg", url: "https://daisyui.com/" },
    { name: "Mongoose", logo: "/technos/mongoose.svg", url: "https://mongoosejs.com/" },
    { name: "PhpMyAdmin", logo: "/technos/phpmyadmin.svg", url: "https://www.phpmyadmin.net/" },
    { name: "MySQL", logo: "/technos/mysql.svg", url: "https://www.mysql.com/fr/" },
    { name: "Node.js", logo: "/technos/nodejs.svg", url: "https://nodejs.org/fr" },
    { name: "o2switch", logo: "/technos/o2switch.svg", url: "https://www.o2switch.fr/" },
    { name: "Git", logo: "/technos/git.svg", url: "https://git-scm.com/" },
    { name: "React native", logo: "/technos/react-native.svg", url: "https://reactnative.dev/" },
    { name: "Vercel", logo: "/technos/vercel.svg", url: "https://vercel.com/" },
    { name: "Redux", logo: "/technos/redux.svg", url: "https://redux.js.org/" },
    { name: "Wix", logo: "/technos/wix.svg", url: "https://fr.wix.com/" },

];

export default function TechnologySection() {
    return (
        <section id="technology" className="mt-20 pt-20 w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="grid grid-cols-4 gap-4 md:w-3/5">
                {technologies.map((tech) => (
                    <a key={tech.name} href={tech.url} target="_blank" rel="noopener noreferrer">
                        <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                            <Image
                                width={100}
                                height={100}
                                src={tech.logo}
                                alt={tech.name}
                                className="w-full h-full object-contain bg-white shadow-md rounded-2xl hover:scale-110 transition-transform"
                            />
                        </div>
                    </a>
                ))}
            </div>

            <div className="md:w-2/3">
                <h2 className="text-4xl font-bold">
                    Voici mes stacks
                    <br />
                    <span className="text-fuchsia-500">technologiques préférées.</span>
                </h2>
                <p className="mt-6 text-justify text-md text-gray-500">
                    Adhérant pleinement à la philosophie <strong>ship first</strong>, je privilégie le lancement rapide pour
                    permettre une itération et une amélioration continue. Pour cela, je m’appuie sur un ensemble d’outils
                    modernes, flexibles et performants, capables de couvrir toutes les étapes de développement, quelles que soient
                    les spécificités d’un projet. C'est ainsi que je transforme rapidement une idée en un produit fonctionnel,
                    optimisé et sécurisé.
                </p>
            </div>
        </section>
    );
}
