import Centauros from "../assets/logos/centauros.png";
import SantaRosa from "../assets/logos/logosantarosa_realze.png";
import Alcaldia from "../assets/logos/alcaldia2.png";
import Iandeber from "../assets/logos/ianderber.webp";
import Titanes from "../assets/logos/TITANES23.png";
import Image from "next/image";

function SponsorsSection() {
    // Placeholder for institutional sponsors (2 logos)
    const institutionalSponsors = [
        { name: "Sponsor Institucional 1", logo: Alcaldia },
        { name: "Sponsor Institucional 2", logo: SantaRosa },
    ];

    // Placeholder for official sponsors (12 logos - using existing ones as placeholders)
    const officialSponsors = [
        { name: "Sponsor 1", logo: Titanes },
        { name: "Sponsor 2", logo: Centauros },
        { name: "Sponsor 3", logo: Iandeber },
        { name: "Sponsor 4", logo: Alcaldia },
        { name: "Sponsor 5", logo: SantaRosa },
        { name: "Sponsor 6", logo: Titanes },
        { name: "Sponsor 7", logo: Centauros },
        { name: "Sponsor 8", logo: Iandeber },
        { name: "Sponsor 9", logo: Alcaldia },
        { name: "Sponsor 10", logo: SantaRosa },
        { name: "Sponsor 11", logo: Titanes },
        { name: "Sponsor 12", logo: Centauros },
    ];

    return (
        <>
            {/* Institutional Sponsors */}
            <section className="py-20 bg-white w-full">
                <div className="container mx-auto px-4">
                    <h2 className="font-edo text-5xl md:text-6xl font-bold mb-8 text-black text-center mb-12">
                        PATROCINANTES INSTITUCIONALES
                    </h2>
                    <p className="text-center text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                        Gracias a nuestros aliados institucionales por creer en el deporte y la comunidad. Su apoyo hace posible esta gran celebración en Carúpano. 🙌
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
                        {institutionalSponsors.map((sponsor, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="w-48 h-48 rounded-lg flex items-center justify-center">
                                    <Image
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        className="w-40 h-40 object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Official Sponsors */}
            <section className="py-20 bg-white w-full">
                <div className="container mx-auto px-4">
                    <h2 className="font-edo text-5xl md:text-6xl font-bold mb-8 text-black text-center mb-12">
                        PATROCINANTES OFICIALES
                    </h2>
                    <p className="text-center text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                        Nuestros patrocinadores oficiales impulsan cada paso de esta carrera. ¡Con su respaldo, llegamos más lejos! 🌟
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {officialSponsors.map((sponsor, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="w-full aspect-square rounded-lg flex items-center justify-center">
                                    <Image
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        className="w-24 h-24 object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default SponsorsSection;
