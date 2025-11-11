function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 text-center font-bold tracking-wide">
            <p className="text-2xl mb-4">
                ¡Gracias por participar en la experiencia{" "}
                <span className="text-red-700 text-xl">#</span>
                <span className="font-edo text-red-700 text-xl">
                    SantaRosadeLima10K
                </span>
                !
            </p>
            <div className="text-sm font-normal text-gray-400">
                Desarrollado por{" "}
                <a
                    href="https://jodaz.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold uppercase hover:text-red-400"
                >
                    jodaz studio
                </a>
            </div>
        </footer>
    );
}

export default Footer;
