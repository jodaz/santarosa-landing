import Centauros from "../assets/logos/centauros.png";
import SantaRosa from "../assets/logos/logosantarosa_realze.png";
import Alcaldia from "../assets/logos/alcaldia2.png";
import Iandeber from "../assets/logos/ianderber.webp";
import Titanes from "../assets/logos/TITANES23.png";
import Image from "next/image";

function SponsorsSection() {
    return (
        <section className="flex flex-col px-8 py-24 bg-gray-100 w-full items-center">
            <h1 className="font-edo text-5xl md:text-6xl font-bold mb-14 text-yellow-500 text-align-center ">
                NUESTROS ORGANIZADORES
            </h1>

            <div className="flex flex-row w-full">
                <div className="w-full md:w-auto flex-1 flex justify-center">
                    <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32  rounded-xl p-6">
                        <div className="flex flex-col items-center">
                            <Image
                                src={Titanes}
                                alt="Titanes"
                                className="w-[170px] h-[100px] object-contain bg-transparent rounded mb-2"
                            />
                        </div>
                        <div className="flex flex-col items-center">
                            <Image
                                src={Centauros}
                                alt="Centauros"
                                className="w-[170px] h-[120px] object-contain bg-transparent rounded mb-2"
                            />
                        </div>
                        <div className="flex flex-col items-center">
                            <Image
                                src={SantaRosa}
                                alt="Santa Rosa"
                                className="w-[170x] h-[120px] object-contain bg-transparent rounded mb-2"
                            />
                        </div>
                        <div className="flex flex-col items-center">
                            <Image
                                src={Alcaldia}
                                alt="Alcaldia"
                                className="w-[170px] h-[120px] object-contain bg-transparent rounded mb-2"
                            />
                        </div>
                        <div className="flex flex-col items-center">
                            <Image
                                src={Iandeber}
                                alt="Iandeber"
                                className="w-[170px] h-[120px] object-contain bg-transparent rounded mb-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SponsorsSection;
