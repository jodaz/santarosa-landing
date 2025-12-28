import Titanes from "../assets/logos/TITANES23.png";
import Centauros from "../assets/logos/centauros.png";
import Alcaldia from "../assets/logos/alcaldia2.png";
import Image from "next/image";

function OrganizersSection() {
    const organizers = [
        { name: "Titanes Runners", logo: Titanes, handle: "@titanesrunnerscpno" },
        { name: "Running Centauros", logo: Centauros, handle: "@runningcentauros" },
        { name: "Alcaldía de Carúpano", logo: Alcaldia, handle: "@alcaldiadecarupano" },
    ];

    return (
        <section id="organizadores" className="py-20 bg-white w-full">
            <div className="container mx-auto px-4">
                <h2 className="font-edo text-5xl md:text-6xl font-bold mb-8 text-black text-center mb-12">
                    ORGANIZADORES
                </h2>
                <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
                    Este evento es posible gracias a la pasión de @titanesrunnerscpno y @runningcentauros.
                    <br />
                    <br />
                    Con el apoyo de @alcaldiadecarupano, unimos fuerzas para promover la salud, la fe y la comunidad en Carúpano. ¡Gracias por hacer realidad esta primera edición!
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
                            <p className="text-black font-edo font-bold text-xl">{organizer.handle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OrganizersSection;

