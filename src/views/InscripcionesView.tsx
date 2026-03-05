export function InscripcionesView() {
    return (
        <div className="flex items-center justify-center py-20 px-4 bg-white w-full">
            <div className="max-w-2xl mx-auto text-center space-y-6 animate-fade-in-up">
                <div className="w-24 h-24 bg-brand-dark-purple/5 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-dark-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark-purple tracking-tight">
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
                    <div className="bg-brand-dark-purple/5 border border-brand-dark-purple/20 rounded-2xl p-8 max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
                        <p className="font-bold text-brand-dark-purple text-lg mb-2">
                            ¿Te quedaste con ganas de participar?
                        </p>
                        <p className="text-brand-dark-purple/80">
                            ¡No te preocupes! Comienza a entrenar desde ya para la <strong>Edición 2026</strong>. Te esperamos con nuevos retos y sorpresas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

