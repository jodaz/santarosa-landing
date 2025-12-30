"use client";
import SplitText from "./SplitText";
import { MapPin, Droplet, Trophy, Medal, Shirt, Award, Tag, Gift, Utensils } from "lucide-react";
import Ruta from "@/assets/images/ruta.png";
import Image from "next/image";

export default function EventDetailsSection() {
    const kitItems = [
        { icon: Shirt, text: "Camiseta oficial exclusiva" },
        { icon: Tag, text: "Número de participante" },
        { icon: Award, text: "Medalla de participación" },
        { icon: Utensils, text: "Refrigerio" },
        { icon: Gift, text: "Sorpresas de patrocinadores" },
    ];

    return (
        <section className="bg-brand-dark-purple relative overflow-hidden text-white">
            {/* Decorative yellow scribbles (Top Left) */}
            <div className="absolute top-0 left-0 w-32 h-32 opacity-20 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-500">
                    <path d="M10,20 Q30,10 50,20 T90,20" stroke="currentColor" fill="none" strokeWidth="2" />
                    <path d="M15,40 Q35,30 55,40 T95,40" stroke="currentColor" fill="none" strokeWidth="2" />
                </svg>
            </div>

            {/* Decorative yellow scribbles (Bottom Right) */}
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-500">
                    <path d="M10,80 Q30,90 50,80 T90,80" stroke="currentColor" fill="none" strokeWidth="2" />
                    <path d="M15,60 Q35,70 55,60 T95,60" stroke="currentColor" fill="none" strokeWidth="2" />
                </svg>
            </div>

            <div className="container mx-auto px-4 py-20 divide-y divide-white/10">
                
                {/* --- ROUTE SECTION --- */}
                <div id="ruta" className="pb-20">
                    <div className="max-w-6xl mx-auto">
                        <SplitText
                            text="LA RUTA"
                            className="text-4xl md:text-6xl font-permanent font-bold mb-8 py-4"
                            delay={50}
                            from={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            ease="bounce.out"
                            splitType="chars"
                            tag="h2"
                        />
                        
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-6">
                                <p className="text-lg leading-relaxed">
                                    ¡Descubre el recorrido que te llevará al triunfo! 🗺️
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Un trayecto vibrante por la Av. Rómulo Gallegos: 10K lleno de adrenalina para corredores y 5K perfecto para caminantes.
                                </p>
                                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                                    <Droplet className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold mb-1">Puntos de Hidratación</p>
                                        <p className="text-white/90">
                                            Con tres puntos de hidratación estratégicos gracias a <a href="https://www.instagram.com/aguaselitesucre" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">@aguaselitesucre</a>.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold mb-1">Mapa en Strava</p>
                                        <div className="flex flex-col gap-1">
                                            <a 
                                                href="https://www.strava.com/routes/3391286191514108116" 
                                                className="text-yellow-500 hover:text-yellow-400 underline font-permanent"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Ver ruta 10K (Carrera) →
                                            </a>
                                            <a 
                                                href="https://www.strava.com/routes/3391284416394467024" 
                                                className="text-yellow-500 hover:text-yellow-400 underline font-permanent"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Ver ruta 5K (Caminata) →
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-lg leading-relaxed">
                                    ¡Prepárate para conquistar la ruta!
                                </p>
                            </div>
                            
                            <div className="bg-white/10 rounded-lg p-4 w-full">
                                <Image
                                    src={Ruta}
                                    alt="Mapa de la ruta"
                                    className="w-full h-auto rounded-lg object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- CATEGORIES & AWARDS SECTION --- */}
                <div className="py-20">
                    <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mx-auto">
                        
                        {/* Categories */}
                        <div id="categorias" className="flex-1">
                            <SplitText
                                text="CATEGORÍAS"
                                className="text-4xl md:text-6xl font-permanent font-bold mb-8 py-4"
                                delay={50}
                                from={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                ease="bounce.out"
                                splitType="chars"
                                tag="h2"
                            />
                            <div className="bg-white/10 rounded-lg p-8 h-full flex flex-col">
                                <p className="text-lg mb-6">
                                    ¡Hay un lugar para todos! Participa en:
                                </p>
                                <ul className="text-xl space-y-4 flex-1">
                                    <li className="flex items-center gap-3">
                                        <span className="text-yellow-500 font-permanent font-bold">Juvenil</span>
                                        <span>(16-19)</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-yellow-500 font-permanent font-bold">Libre</span>
                                        <span>(20-29)</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-yellow-500 font-permanent font-bold">Submáster</span>
                                        <span>(30-39)</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-yellow-500 font-permanent font-bold">Máster A</span>
                                        <span>(40-49)</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-yellow-500 font-permanent font-bold">Máster B</span>
                                        <span>(50-59)</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-yellow-500 font-permanent font-bold">Máster C</span>
                                        <span>(60+)</span>
                                    </li>
                                </ul>
                                <p className="text-lg mt-8 font-permanent">
                                    ¡Corre por tu categoría y brilla!
                                </p>
                            </div>
                        </div>

                        {/* Awards */}
                        <div id="premiacion" className="flex-1">
                            <SplitText
                                text="PREMIACIÓN"
                                className="text-4xl md:text-6xl font-permanent font-bold mb-8 py-4"
                                delay={50}
                                from={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                ease="bounce.out"
                                splitType="chars"
                                tag="h2"
                            />
                            <div className="bg-white/10 rounded-lg p-8 h-full flex flex-col">
                                <div className="flex items-start gap-4">
                                    <Trophy className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
                                    <div className="flex flex-col w-full">
                                        <h3 className="text-2xl font-permanent font-bold mb-4">
                                            ¡Premios en Efectivo! 🏆
                                        </h3>
                                        <div className="space-y-4 flex-1">
                                            <div className="bg-white/5 rounded-lg p-4">
                                                <p className="text-yellow-500 font-permanent font-bold text-xl mb-2">
                                                    Absolutos (Femenino y Masculino)
                                                </p>
                                                <p className="text-lg">
                                                    $150
                                                </p>
                                            </div>
                                            <div className="bg-white/5 rounded-lg p-4">
                                                <p className="text-yellow-500 font-permanent font-bold text-xl mb-3">
                                                    Por Categoría
                                                </p>
                                                <ul className="space-y-2">
                                                    <li className="flex items-center gap-2">
                                                        <Medal className="w-5 h-5 text-yellow-500" />
                                                        <span><strong>1er lugar:</strong> $70</span>
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <Medal className="w-5 h-5 text-yellow-500" />
                                                        <span><strong>2do lugar:</strong> $50</span>
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <Medal className="w-5 h-5 text-yellow-500" />
                                                        <span><strong>3er lugar:</strong> $30</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="text-lg mt-6 font-permanent">
                                            ¡Da lo mejor y lleva tu recompensa!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- KIT SECTION --- */}
                <div id="kit" className="pt-20">
                    <div className="max-w-6xl mx-auto">
                        <SplitText
                            text="NUESTRO KIT"
                            className="text-4xl md:text-6xl font-permanent font-bold mb-12 py-4"
                            delay={50}
                            from={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            ease="bounce.out"
                            splitType="chars"
                            tag="h2"
                        />
                        <div className="w-full flex flex-col sm:flex-row bg-white/10 rounded-lg overflow-hidden">
                            <div className="p-8 flex-1">
                                <p className="text-lg mb-6">
                                    Tu kit incluye:
                                </p>
                                <ul className="space-y-4">
                                    {kitItems.map((item, index) => (
                                        <li key={index} className="flex items-center gap-4 text-lg">
                                            <div className="p-2 bg-yellow-500/20 rounded-lg">
                                                <item.icon className="w-6 h-6 text-yellow-500" />
                                            </div>
                                            <span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-lg mt-8 font-permanent">
                                    ¡Todo lo que necesitas para correr con estilo y comodidad!
                                </p>
                            </div>
                            <div className="relative w-full sm:w-1/2 min-h-[400px]">
                                <Image 
                                    src="/assets/kit.png" 
                                    alt="Kit" 
                                    fill 
                                    className="object-cover"
                                />  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
