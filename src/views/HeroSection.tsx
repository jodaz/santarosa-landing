import Background from "../assets/backgrounds/hero-background.jpg";
import SANTAROSA3 from "../assets/logos/SANTAROSA3_transparent.png";

function HeroSection() {
    return (
        <section
            className="bg-gradient-to-b flex flex-col items-center justify-center py-16 relative"
            style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="w-fit-content  h-64  flex items-center justify-center mb-8 backdrop-blur-sm rounded-lg">
                <img
                    src={SANTAROSA3}
                    alt="Santa Rosa de Lima 10K logo"
                    className="h-80 w-80 object-contain"
                />
            </div>
        </section>
    );
}

export default HeroSection;
