import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export function InscripcionesView() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col w-full">
             <div className="flex flex-col w-full">
                <Navigation />
                <HeroSection />
            </div>

            <main className="flex-grow flex items-center justify-center py-20 px-4 bg-white">
                <div className="max-w-2xl mx-auto text-center space-y-6 animate-fade-in-up">
                    <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight">
                        Inscripciones Cerradas
                    </h1>
                    
                    <div className="space-y-4 max-w-xl mx-auto">
                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                            ¡Gracias por tu interés en la Carrera y Caminata a Santa Rosa de Lima!
                        </p>
                        
                        <p className="text-gray-500 leading-relaxed">
                            Hemos alcanzado el límite de participantes para la edición de este año. La energía y el entusiasmo de la comunidad han sido increíbles.
                        </p>
                    </div>

                    <div className="pt-10">
                        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
                           <p className="font-bold text-blue-900 text-lg mb-2">
                                ¿Te quedaste con ganas de participar?
                            </p>
                            <p className="text-blue-800/80">
                               ¡No te preocupes! Comienza a entrenar desde ya para la <strong>Edición 2026</strong>. Te esperamos con nuevos retos y sorpresas.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
