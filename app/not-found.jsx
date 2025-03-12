export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl text-fuchsia-500 font-bold">404 - Page introuvable</h1>
        <p className="text-lg mt-2 font-bold text-gray-600 text-center">La page que vous cherchez n'existe pas,<br />mais je suis sûrement sur le coup !</p>
        <a href="/" className="mt-4 px-5 py-3 bg-fuchsia-500 text-white rounded-lg shadow-md hover:bg-fuchsia-600">
          Retour à l'accueil
        </a>
      </div>
    );
  }
  