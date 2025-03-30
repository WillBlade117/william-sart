import Image from "next/image";
import Link from "next/link";

const PortfolioPage = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen px-6">
            <section id="portfolio" className="mt-10 pt-10 w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-2/3">
                    <h1 className="text-3xl font-bold">
                        Une vitrine de mes
                        <br />
                        <span className="text-fuchsia-500">projets et compétences</span>
                    </h1>
                    <p className="mt-6 text-justify text-md text-gray-500">
                        Ce portfolio est un espace où je présente mes réalisations en développement web et mobile. Il met en avant les projets sur lesquels j'ai travaillé, mes compétences techniques et mon évolution en tant que développeur fullstack.
                    </p>
                </div>
                <div className="md:w-1/3 flex justify-center">
                    <Image
                        src="/logo.svg"
                        alt="Aperçu du portfolio"
                        width={150}
                        height={150}
                        className="rounded-2xl shadow-md bg-white"
                    />
                </div>
            </section>

            <section className="mt-10 w-full max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-fuchsia-500">Caractéristiques principales</h2>
                <ul className="mt-4 text-gray-500 list-disc list-inside">
                    <li>🌐 Site statique rapide et optimisé</li>
                    <li>⚡ Conçu avec Next.js 15 et Tailwind CSS</li>
                    <li>📂 Pages dédiées à chaque projet pour une meilleure visibilité</li>
                    <li>📱 Design responsive et mobile-first</li>
                </ul>
            </section>

            <section className="mt-10 w-full max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-fuchsia-500">Technologies utilisées</h2>
                <p className="mt-4 text-gray-500">
                    🚀 <strong>Framework :</strong> Next.js 15<br />
                    🎨 <strong>Style :</strong> Tailwind CSS<br />
                    🖥️ <strong>Hébergement :</strong> o2switch<br />
                    ⚙️ <strong>Déploiement :</strong> Git et GitHub Actions
                </p>
            </section>

            <section className="mt-10 w-full max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-fuchsia-500">Explorer le Portfolio</h2>
                <p className="mt-4 text-gray-500">
                    Découvrez les différentes sections du site et les projets que j'ai développés.
                </p>
                <div className="mt-4 flex gap-4">
                    <Link href="/#about" className="px-4 py-2 bg-fuchsia-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-fuchsia-600">
                        À propos
                    </Link>
                    <Link href="/#projets" className="px-4 py-2 bg-fuchsia-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-fuchsia-600">
                        Projets
                    </Link>
                </div>
            </section>

            <section className="mt-10 mb-10 w-full max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-fuchsia-500">Accéder au Code Source</h2>
                <p className="mt-4 text-gray-500">
                    Le code source du portfolio est disponible sur GitHub. Vous pouvez y voir l'implémentation et son évolution.
                </p>
                <div className="mt-4">
                    <Link href="https://github.com/WillBlade117/william-sart" target="_blank" className="px-4 py-2 border border-fuchsia-500 text-sm text-fuchsia-500 font-semibold rounded-lg hover:bg-fuchsia-500 hover:text-white">
                        🚀 Voir sur GitHub
                    </Link>
                </div>
            </section>
        </ main>
    );
}

export default PortfolioPage;
