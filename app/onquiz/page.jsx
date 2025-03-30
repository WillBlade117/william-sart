import Image from "next/image";
import Link from "next/link";

export default function OnQuizPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen px-6">
            <section id="onquiz" className="mt-10 pt-10 w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-2/3">
                    <h1 className="text-3xl font-bold">
                        OnQuiz, une plateforme de
                        <br />
                        <span className="text-fuchsia-500">quiz interactive et ludique.</span>
                    </h1>
                    <p className="mt-6 text-justify text-md text-gray-500">
                        OnQuiz est une application web interactive permettant aux utilisateurs de tester leurs connaissances sur différents thèmes.
                        Grâce à une interface fluide et un système de classement dynamique, chaque partie devient un défi motivant.
                    </p>
                </div>

                <div className="md:w-1/3 flex justify-center">
                    <Image
                        src="/logo/onquiz.svg"
                        alt="OnQuiz Logo"
                        width={150}
                        height={150}
                        className="rounded-2xl shadow-md bg-white"
                    />
                </div>
            </section>

            <section className="mt-10 w-full max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-fuchsia-500">Fonctionnalités principales</h2>
                <ul className="mt-4 text-gray-500 list-disc list-inside">
                    <li>📌 Sélection d’un thème parmi plusieurs catégories (Culture, Histoire, Science, Jeux Vidéo...)</li>
                    <li>📊 Quiz de 10 questions avec barre de progression dynamique</li>
                    <li>🏆 Classement en temps réel avec filtrage par thème</li>
                    <li>📱 Expérience mobile-first avec une interface optimisée</li>
                </ul>
            </section>

            <section className="mt-10 w-full max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-fuchsia-500">Technologies utilisées</h2>
                <p className="mt-4 text-gray-500">
                    🚀 <strong>Frontend :</strong> Next.js 15, React, Tailwind CSS<br />
                    🔗 <strong>Backend :</strong> API Next.js (TypeScript)<br />
                    🛢️ <strong>Base de données :</strong> MySQL (hébergée sur o2switch)
                </p>
            </section>

            <section className="mt-10 mb-10 w-full max-w-3xl mx-auto flex gap-4">
                <Link
                    href="https://www.onquiz.william-sart.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-fuchsia-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-fuchsia-600"
                >
                    Voir le projet
                </Link>
                <Link
                    href="https://github.com/WillBlade117/OnQuiz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-fuchsia-500 text-sm text-fuchsia-500 font-semibold rounded-lg hover:bg-fuchsia-500 hover:text-white"
                >
                    Code source
                </Link>
            </section>
        </ main>
    );
}
