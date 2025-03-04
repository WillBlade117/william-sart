export default function Footer() {
    return (
      <footer className="bg-gray-100 text-fuchsia-500 py-4 text-center">
        <div className="container mx-auto px-4">
          <p className="text-lg font-bold">William SART</p>
          <p className="text-sm">
            Copyright © {new Date().getFullYear()} - Tous droits réservés
          </p>
        </div>
      </footer>
    );
  }
  