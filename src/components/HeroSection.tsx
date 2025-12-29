import SANTAROSA3 from "../assets/logos/SANTAROSA3_transparent.png";
import EventDetailsSection from "./EventDetailsSection";
import Image from "next/image";

function HeroSection() {
    return (
        <section className="relative h-screen w-full flex flex-col justify-end">
            <div
                className="flex flex-col w-full h-full gradient-to-b from-black/100 to-black/100"
                style={{
                    backgroundImage: `url(./hero-background2.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "left",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>
            <div className="absolute top-1/3 md:top-1/2 md:right-[10%] transform -translate-y-1/2 w-fit h-64 flex items-center justify-center mb-8 rounded-lg flex flex-col px-8">
                <div className="text-center mb-4">
                    <p className="text-white text-sm md:text-lg mb-2 font-permanent">Carrera y Caminata</p>
                    <h1 className="text-6xl md:text-8xl font-permanent font-bold text-yellow-500 md:mb-2 drop-shadow-lg text-wrap" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                        SANTA ROSA DE LIMA
                    </h1>
                    <p className="text-yellow-500 text-2xl md:text-4xl font-permanent font-bold drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                        2025
                    </p>
                </div>
                <Image
                    src={SANTAROSA3}
                    alt="Santa Rosa de Lima 10K logo"
                    className="h-50 md:min-h-96 md:w-96 object-contain"
                />
            </div>
            <div className="absolute bottom-32 md:bottom-40 left-4 md:left-8 right-4 md:right-auto max-w-2xl bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-6">
                <p className="text-white text-sm md:text-base leading-relaxed">
                    ¡Bienvenidos a la Primera Edición de la Carrera y Caminata a Santa Rosa de Lima 2025! 🏃‍♂️🏃‍♀️
                    <br /><br />
                    Un evento lleno de energía, fe y comunidad que une a Carúpano en movimiento. Corre 10K o camina 5K por la Av. Rómulo Gallegos el 30 de agosto. ¡Inscríbete ahora y sé parte de esta celebración inolvidable! 💪🌟
                </p>
            </div>
        </section>
    );
}

export default HeroSection;
