import Image from "next/image";
import Link from "next/link";

const GreenThumbPage = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen px-6">
            <section id="greenthumb" className="mt-10 pt-10 w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-2/3">
                    <h1 className="text-3xl font-bold">
                        GreenThumb, une app mobile
                        <br />
                        <span className="text-fuchsia-500">de gestion des plantes domestiques</span>
                    </h1>
                    <p className="mt-6 text-justify text-md text-gray-500">
                        GreenThumb est une application mobile innovante permettant aux utilisateurs de gérer l'entretien de leurs plantes domestiques. L'application offre des fonctionnalités de suivi des arrosages, de rappels personnalisés, et d'un espace communautaire pour des conseils d'entretien.
                    </p>
                </div>

                <div className="md:w-1/3 flex justify-center">
                    <Image
                        src="/logo/greenthumb.png"
                        alt="GreenThumb Logo"
                        width={150}
                        height={150}
                        className="rounded-2xl shadow-md bg-white"
                    />
                </div>
            </section>

            <section className="mt-10 w-full max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-fuchsia-500">Présentation vidéo de GreenThumb</h2>
                <p className="mt-4 text-gray-500">
                    Découvrez les principales fonctionnalités de l'application mobile que j’ai créée avec React Native.
                </p>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-xl shadow-xl"
                        src="https://www.youtube.com/embed/C7RylpAzbXc"
                        title="Présentation de GreenThumb"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>


            <section className="mt-10 w-full max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-fuchsia-500">Fonctionnalités principales</h2>
                <ul className="mt-4 text-gray-500 list-disc list-inside">
                    <li>🌿 Ajouter des plantes avec photos, nom, et description</li>
                    <li>📅 Planifier et suivre les entretiens comme l'arrosage, la taille et le rempotage</li>
                    <li>💬 Espace communautaire pour poser des questions et partager des conseils</li>
                    <li>📱 Interface mobile-first optimisée pour une gestion facile des plantes</li>
                </ul>
            </section>

            <section className="mt-10 w-full max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-fuchsia-500">Technologies utilisées</h2>
                <p className="mt-4 text-gray-500">
                    🚀 <strong>Frontend :</strong> React Native, Expo<br />
                    🔗 <strong>Backend :</strong> Node.js, Express.js<br />
                    🛢️ <strong>Base de données :</strong> MongoDB (via Mongoose)<br />
                    ☁️ <strong>Webservices :</strong> Cloudinary
                </p>
            </section>

            <section className="mt-10 mb-10 w-full max-w-3xl mx-auto flex gap-4">
                <div className="px-4 py-2 bg-fuchsia-500/50 text-white text-sm font-semibold rounded-lg shadow-md">
                    Projet offline
                </div>
                <Link
                    href="https://github.com/WillBlade117/greenthumb-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-fuchsia-500 text-sm text-fuchsia-500 font-semibold rounded-lg hover:bg-fuchsia-500 hover:text-white"
                >
                    Code Front
                </Link>
                <Link
                    href="https://github.com/WillBlade117/greenthumb-backend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-fuchsia-500 text-sm text-fuchsia-500 font-semibold rounded-lg hover:bg-fuchsia-500 hover:text-white"
                >
                    Code Back
                </Link>
            </section>
        </ main>
    );
}

export default GreenThumbPage;
