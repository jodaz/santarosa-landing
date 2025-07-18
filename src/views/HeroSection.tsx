import Background from "../assets/backgrounds/hero-background2.jpg";
import SANTAROSA3 from "../assets/logos/SANTAROSA3_transparent.png";
import EventDetailsSection from "./EventDetailsSection";

function HeroSection() {
    return (
        <section className="relative h-screen w-full flex flex-col justify-end">
            <div
                className="flex flex-col w-full h-full gradient-to-b from-black/100 to-black/100"
                style={{
                    backgroundImage: `url(${Background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "left",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>
            <div className="absolute top-3/4 md:top-1/2 md:right-[10%] transform -translate-y-1/2 w-fit h-64 flex items-center justify-center mb-8 rounded-lg flex flex-col px-8">
                <h1 className="text-6xl md:text-8xl font-edo font-bold text-red-700 mb-4 drop-shadow-lg text-wrap">
                    CORRE POR TU FÉ
                </h1>
                <img
                    src={SANTAROSA3}
                    alt="Santa Rosa de Lima 10K logo"
                    className="min-h-96 w-96 object-contain"
                />
            </div>
            <div className="w-full hidden md:block">
                <EventDetailsSection />
            </div>
        </section>
    );
}

export default HeroSection;
