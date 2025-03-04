import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gray-100 text-fuchsia-500 py-4">
            <nav className="container mx-auto flex flex-col items-center gap-4 md:flex-row md:justify-between md:items-center px-4">
                <div className="text-lg font-bold">
                    <Link href="/">William SART</Link>
                </div>
                <div className="flex gap-4">
                    <Link
                        href="/about"
                        className="relative transition-all duration-200 after:block after:h-[1px] after:w-full after:bg-lime-400 after:absolute after:left-0 after:bottom-[-2px] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
                    >
                        À propos
                    </Link>
                    <Link
                        href="/projets"
                        className="relative transition-all duration-200 after:block after:h-[1px] after:w-full after:bg-lime-400 after:absolute after:left-0 after:bottom-[-2px] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
                    >
                        Projets
                    </Link>
                </div>
                <div className="flex gap-4">
                    <Link
                        href="https://github.com/WillBlade117"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="border border-fuchsia-500 rounded-lg hover:bg-fuchsia-500 hover:text-gray-100 hover:border-gray-100 transition-all px-2 py-1">
                            GitHub
                        </span>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/william-sart-developpeur-concepteur-web-mobile-cybersecurite"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="border border-fuchsia-500 rounded-lg hover:bg-fuchsia-500 hover:text-gray-100 hover:border-gray-100 transition-all px-2 py-1">
                            LinkedIn
                        </span>
                    </Link>
                </div>
            </nav>
        </header>
    );
}
