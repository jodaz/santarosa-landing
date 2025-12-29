"use client";
import Titanes from "../assets/logos/TITANES23.png";
import Centauros from "../assets/logos/centauros.png";
import Alcaldia from "../assets/logos/alcaldia2.png";
import Image from "next/image";
import SplitText from "./SplitText";

function OrganizersSection() {
    const organizers = [
        { name: "Titanes Runners", logo: Titanes, handle: "@titanesrunnerscpno" },
        { name: "Running Centauros", logo: Centauros, handle: "@runningcentauros" },
        { name: "Alcaldía de Carúpano", logo: Alcaldia, handle: "@alcaldiadecarupano" },
    ];

    return (
        <section id="organizadores" className="py-20 bg-white w-full">
            <div className="container mx-auto px-4">
                <div className="w-full text-center">
                    <SplitText
                        text="ORGANIZADORES"
                        className="font-permanent text-4xl md:text-6xl font-bold mb-8 text-black text-center mb-12 py-4"
                        delay={50}
                        from={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        ease="bounce.out"
                        splitType="chars"
                        tag="h2"
                    />
                </div>
                <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
                    Este evento es posible gracias a la pasión de <a href="https://www.instagram.com/titanesrunnerscpno" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-blue-600 transition-colors">@titanesrunnerscpno</a> y <a href="https://www.instagram.com/runningcentauros" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-blue-600 transition-colors">@runningcentauros</a>.
                    <br />
                    <br />
                    Con el apoyo de <a href="https://www.instagram.com/alcaldiadecarupano" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-blue-600 transition-colors">@alcaldiadecarupano</a>, unimos fuerzas para promover la salud, la fe y la comunidad en Carúpano. ¡Gracias por hacer realidad esta primera edición!
                </p>
                <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
                    {organizers.map((organizer, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-48 h-48 rounded-lg flex items-center justify-center mb-4 p-4">
                                <Image
                                    src={organizer.logo}
                                    alt={organizer.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <a 
                                href={`https://instagram.com/${organizer.handle.replace('@', '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black font-permanent font-bold text-xl hover:text-blue-600 transition-colors"
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

