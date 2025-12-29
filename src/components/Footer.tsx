import { Instagram, Mail, MapPin } from "lucide-react";

function Footer() {
    const navLinks = [
        { name: "Inscripciones", href: "/inscripciones" },
        { name: "Recorrido", href: "#route" },
        { name: "Galería", href: "/gallery" },
    ];
    
    return (
        <footer className="bg-brand-dark-purple text-white">
            <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* Brand */}
            <div>
                <h3 className="text-2xl font-black mb-4">
                Carrera y Caminata Santa Rosa de Lima 2025
                </h3>
                <p className="text-white/80 mb-4">
                Carrera y Caminata Santa Rosa de Lima 2025. Un evento deportivo que une a la comunidad de Carúpano y sus alrededores.
                </p>
                <div className="flex gap-4">
                <a 
                    href="https://www.instagram.com/santarosa10k" 
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-full text-white/90"
                    aria-label="Instagram"
                    target="_blank"
                >
                    <Instagram className="w-5 h-5" />
                </a>
                </div>
            </div>

            {/* Quick Links */}
            <div>
                <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
                <ul className="space-y-2">
                {navLinks.map((link) => (
                    <li key={link.name}>
                    <a 
                        href={link.href}
                        className="text-white/80 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200"
                    >
                        {link.name}
                    </a>
                    </li>
                ))}
                </ul>
            </div>

            {/* Contact */}
            <div id="contacto">
                <h4 className="text-lg font-bold mb-4">Contacto</h4>
                <ul className="space-y-3">
                <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">
                    Carupano, Edo. Sucre, Venezuela
                    </span>
                </li>
                <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <a href="mailto:info@santarosa10k.com" className="text-white/80 hover:text-white transition-colors">
                    info@santarosa10k.com
                    </a>
                </li>
                
                </ul>
            </div>
            </div>
            </div>
            <div className="flex flex-col  container mx-auto px-4 text-center text-sm font-normal text-white/80 py-4 gap-4">
                <p>
                © 2025 Carrera Popular Santa Rosa de Lima. Todos los derechos reservados.
                </p>
                <p>
                    Desarrollado por{" "}
                    <a
                        href="https://jodaz.xyz"
                        className="font-bold uppercase hover:text-red-400"
                    >
                        jodaz studio
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
