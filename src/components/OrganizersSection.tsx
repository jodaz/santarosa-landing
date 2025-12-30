"use client";
import Titanes from "../assets/logos/TITANES23.png";
import Centauros from "../assets/logos/centauros.png";
import Alcaldia from "../assets/logos/alcaldia2.png";
import Image from "next/image";
import SplitText from "./SplitText";
import HeroBackground from "../assets/backgrounds/hero-background.jpg";

function OrganizersSection() {
    const organizers = [
        { name: "Titanes Runners", logo: Titanes, handle: "@titanesrunnerscpno" },
        { name: "Running Centauros", logo: Centauros, handle: "@runningcentauros" },
        { name: "Alcaldía de Carúpano", logo: Alcaldia, handle: "@alcaldiadecarupano" },
    ];

    return (
        <section id="organizadores" className="relative w-full min-h-[80vh] flex flex-col justify-center overflow-hidden">
            {/* Parallax Background */}
            <div
                className="absolute inset-0 w-full h-full z-0"
                style={{
                    backgroundImage: `url(${HeroBackground.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black/80" />
            </div>

            <div className="container relative z-10 mx-auto px-4 py-20">
                <div className="w-full text-center">
                    <SplitText
                        text="ORGANIZADORES"
                        className="font-permanent text-4xl md:text-6xl font-bold mb-8 text-white text-center mb-12 py-4"
                        delay={50}
                        from={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        ease="bounce.out"
                        splitType="chars"
                        tag="h2"
                    />
                </div>
                <p className="text-center text-gray-200 text-lg mb-12 max-w-3xl mx-auto">
                    Este evento es posible gracias a la pasión de <a href="https://www.instagram.com/titanesrunnerscpno" target="_blank" rel="noopener noreferrer" className="font-bold text-yellow-500 hover:text-yellow-400 transition-colors">@titanesrunnerscpno</a> y <a href="https://www.instagram.com/runningcentauros" target="_blank" rel="noopener noreferrer" className="font-bold text-yellow-500 hover:text-yellow-400 transition-colors">@runningcentauros</a>.
                    <br />
                    <br />
                    Con el apoyo de <a href="https://www.instagram.com/alcaldiadecarupano" target="_blank" rel="noopener noreferrer" className="font-bold text-yellow-500 hover:text-yellow-400 transition-colors">@alcaldiadecarupano</a>, unimos fuerzas para promover la salud, la fe y la comunidad en Carúpano. ¡Gracias por hacer realidad esta primera edición!
                </p>
                <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
                    {organizers.map((organizer, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <div className="w-48 h-48 rounded-lg flex items-center justify-center mb-4 p-4 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300 border border-white/10">
                                <Image
                                    src={organizer.logo}
                                    alt={organizer.name}
                                    className="w-full h-full object-contain filter drop-shadow-lg"
                                />
                            </div>
                            <a 
                                href={`https://instagram.com/${organizer.handle.replace('@', '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white font-permanent font-bold text-xl hover:text-yellow-400 transition-colors"
                            >
                                {organizer.handle}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OrganizersSection;
