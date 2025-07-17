import Centauros from "../assets/logos/centauros.png";
import SantaRosa from "../assets/logos/logosantarosa_realze.png";
import Alcaldia from "../assets/logos/alcaldia.png";
import Iandeber from "../assets/logos/ianderber.webp";
import Titanes from "../assets/logos/TITANES23.png";

function SponsorsSection() {
    return (
        <section className="flex flex-col p-8 bg-white">
            <h2 className="text-xl font-bold mb-4 text-black text-align-center md:text-left">
                Nuestros organizadores
            </h2>

            <div className="flex flex-row bg-white w-full">
                <div className="w-full md:w-auto flex-1 flex justify-center">
                    <div className="flex flex-wrap justify-center items-center gap-16 bg-white/60 rounded-xl p-6">
                        <div className="flex flex-col items-center">
                            <img
                                src={Titanes}
                                alt="Titanes"
                                className="w-[170px] h-[100px] object-contain bg-transparent rounded mb-2"
                            />
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                src={Centauros}
                                alt="Centauros"
                                className="w-[153px] h-[89px] object-contain bg-transparent rounded mb-2"
                            />
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                src={SantaRosa}
                                alt="Santa Rosa"
                                className="w-[153px] h-[89px] object-contain bg-transparent rounded mb-2"
                            />
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                src={Alcaldia}
                                alt="Alcaldia"
                                className="w-[153px] h-[89px] object-contain bg-transparent rounded mb-2"
                            />
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                src={Iandeber}
                                alt="Iandeber"
                                className="w-[153px] h-[89px] object-contain bg-transparent rounded mb-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SponsorsSection;
