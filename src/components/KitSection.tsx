import { Shirt, Award, Tag, Gift } from "lucide-react";

function KitSection() {
    const kitItems = [
        { icon: Shirt, text: "Camiseta oficial exclusiva" },
        { icon: Tag, text: "Número de participante" },
        { icon: Award, text: "Chip de cronometraje (carrera)" },
        { icon: Award, text: "Medalla finisher" },
        { icon: Gift, text: "Sorpresas de patrocinadores" },
    ];

    return (
        <section id="kit" className="py-20 bg-blue-900 relative overflow-hidden">
            {/* Decorative yellow scribbles */}
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-500">
                    <path d="M10,80 Q30,90 50,80 T90,80" stroke="currentColor" fill="none" strokeWidth="2" />
                    <path d="M15,60 Q35,70 55,60 T95,60" stroke="currentColor" fill="none" strokeWidth="2" />
                </svg>
            </div>

            <div className="container relative z-10">
                <div className="max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-edo font-bold text-white mb-12">
                        NUESTRO KIT
                    </h2>
                    <div className="bg-white/10 rounded-lg p-8">
                        <p className="text-white text-lg mb-6">
                            Tu kit incluye:
                        </p>
                        <ul className="space-y-4">
                            {kitItems.map((item, index) => (
                                <li key={index} className="flex items-center gap-4 text-white text-lg">
                                    <div className="p-2 bg-yellow-500/20 rounded-lg">
                                        <item.icon className="w-6 h-6 text-yellow-500" />
                                    </div>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-white text-lg mt-8 font-edo">
                            ¡Todo lo que necesitas para correr con estilo y comodidad!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default KitSection;
