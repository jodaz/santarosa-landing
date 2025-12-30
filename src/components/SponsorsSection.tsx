"use client";
import SantaRosa from "../assets/logos/santarosadelima.png";
import Alcaldia from "../assets/logos/alcaldia2.png";
import Image from "next/image";
import SplitText from "./SplitText";

import LogoLoopOriginal from "./LogoLoop";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LogoLoop = LogoLoopOriginal as any;

import Autopartes from "../assets/logos/sponsors/autopartesn1.png";
import Bangood from "../assets/logos/sponsors/bangood.png";
import Chupi from "../assets/logos/sponsors/chupi.png";
import Cocovel from "../assets/logos/sponsors/cocovel.png";
import DistribuidoraYJ from "../assets/logos/sponsors/distribuidorayj.png";
import Elite from "../assets/logos/sponsors/elite.svg";
import ElMangle from "../assets/logos/sponsors/elmangle.png";
import Farca from "../assets/logos/sponsors/farca.png";
import Fitosana from "../assets/logos/sponsors/fitosana.png";
import Flor from "../assets/logos/sponsors/flor.png";
import GrandesOfertas from "../assets/logos/sponsors/grandes_ofertas.png";
import Guarandinga from "../assets/logos/sponsors/guarandinga.png";
import HieloNevadas from "../assets/logos/sponsors/heilo_nevadas.png";
import Isalca from "../assets/logos/sponsors/isalca.jpeg";
import ItalyFarma from "../assets/logos/sponsors/italyfarma.png";
import JoseFarias from "../assets/logos/sponsors/jose_farias_remarked.png";
import JVL from "../assets/logos/sponsors/jvl.png";
import Laboratorio from "../assets/logos/sponsors/laboratorio.png";
import Multitel from "../assets/logos/sponsors/multitel.png";
import Papitas from "../assets/logos/sponsors/papitas.png";
import Perimetral from "../assets/logos/sponsors/perimetral_panaderia.png";
import RS from "../assets/logos/sponsors/rs.png";
import SanJose from "../assets/logos/sponsors/san_jose.png";
import SantaBarbara from "../assets/logos/sponsors/santabarbara_remarked.png";
import Sertinca from "../assets/logos/sponsors/sertinca.png";
import Slash from "../assets/logos/sponsors/slash.png";
import Sofia from "../assets/logos/sponsors/sofia.png";
import SoundCard from "../assets/logos/sponsors/sound_card.png";
import TuTV from "../assets/logos/sponsors/tutv.png";
import Vnet from "../assets/logos/sponsors/vnet.png";


function SponsorsSection() {
    // Placeholder for institutional sponsors (2 logos)
    const institutionalSponsors = [
        { name: "Sponsor Institucional 1", logo: Alcaldia },
        { name: "Sponsor Institucional 2", logo: SantaRosa },
    ];

    // Official sponsors
    const officialSponsors = [
        { name: "Autopartes N1", logo: Autopartes },
        { name: "Bangood", logo: Bangood },
        { name: "Chupi", logo: Chupi },
        { name: "Cocovel", logo: Cocovel },
        { name: "Distribuidora YJ", logo: DistribuidoraYJ },
        { name: "Elite", logo: Elite },
        { name: "El Mangle", logo: ElMangle },
        { name: "Farca", logo: Farca },
        { name: "Fitosana", logo: Fitosana },
        { name: "Flor", logo: Flor },
        { name: "Grandes Ofertas", logo: GrandesOfertas },
        { name: "Guarandinga", logo: Guarandinga },
        { name: "Hielo Nevadas", logo: HieloNevadas },
        { name: "Isalca", logo: Isalca },
        { name: "Italy Farma", logo: ItalyFarma },
        { name: "Jose Farias", logo: JoseFarias },
        { name: "JVL", logo: JVL },
        { name: "Laboratorio", logo: Laboratorio },
        { name: "Multitel", logo: Multitel },
        { name: "Papitas", logo: Papitas },
        { name: "Perimetral Panaderia", logo: Perimetral },
        { name: "RS", logo: RS },
        { name: "San Jose", logo: SanJose },
        { name: "Santa Barbara", logo: SantaBarbara },
        { name: "Sertinca", logo: Sertinca },
        { name: "Slash", logo: Slash },
        { name: "Sofia", logo: Sofia },
        { name: "Sound Card", logo: SoundCard },
        { name: "TuTV", logo: TuTV },
        { name: "Vnet", logo: Vnet },
    ];
    
    // Split sponsors into two groups
    const half = Math.ceil(officialSponsors.length / 2);
    const officialSponsors1 = officialSponsors.slice(0, half);
    const officialSponsors2 = officialSponsors.slice(half);

    return (
        <>
            {/* Institutional Sponsors */}
            <section className="py-20 bg-white w-full">
                <div className="container mx-auto px-4">
                    <div className="w-full text-center">
                        <SplitText
                            text="PATROCINANTES INSTITUCIONALES"
                            className="font-permanent text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-black text-center mb-12 py-4"
                            delay={50}
                            from={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            ease="bounce.out"
                            splitType="chars"
                            tag="h2"
                        />
                    </div>
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
                    <div className="w-full text-center">
                        <SplitText
                            text="PATROCINANTES OFICIALES"
                            className="font-permanent text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-black text-center mb-12 py-4"
                            delay={50}
                            from={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            ease="bounce.out"
                            splitType="chars"
                            tag="h2"
                        />
                    </div>
                    <p className="text-center text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                        Nuestros patrocinadores oficiales impulsan cada paso de esta carrera. ¡Con su respaldo, llegamos más lejos! 🌟
                    </p>
                    <div className="w-full relative overflow-hidden space-y-8">
                        {/* First Loop - Left Direction */}
                        <LogoLoop
                            logos={officialSponsors1}
                            speed={50}
                            direction="left"
                            gap={60}
                            logoHeight={140}
                            renderItem={(sponsor: { logo: string; name: string }, index: number) => (
                                <div key={index} className="flex flex-col items-center mx-4">
                                    <div className="w-[140px] h-[140px] rounded-lg flex items-center justify-center">
                                        <Image
                                            src={sponsor.logo}
                                            alt={sponsor.name}
                                            className="w-[140px] h-[140px] object-contain"
                                        />
                                    </div>
                                </div>
                            )}
                        />
                        
                        {/* Second Loop - Right Direction */}
                        <LogoLoop
                            logos={officialSponsors2}
                            speed={50}
                            direction="right"
                            gap={60}
                            logoHeight={140}
                            renderItem={(sponsor: { logo: string; name: string }, index: number) => (
                                <div key={index} className="flex flex-col items-center mx-4">
                                    <div className="w-[140px] h-[140px] rounded-lg flex items-center justify-center">
                                        <Image
                                            src={sponsor.logo}
                                            alt={sponsor.name}
                                            className="w-[140px] h-[140px] object-contain"
                                        />
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default SponsorsSection;
