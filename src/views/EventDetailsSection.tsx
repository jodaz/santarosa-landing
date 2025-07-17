function EventDetailsSection() {
    return (
        <section className="bg-teal-700 text-white py-10 px-6 flex flex-col md:flex-row items-center justify-between w-full">
            <div className="text-center md:text-left w-full flex-1">
                <div className="font-bold uppercase tracking-widest text-2xl md:text-3xl">
                    SANTA ROSA DE LIMA10K
                </div>
                <div className="text-lg md:text-xl mt-3 space-y-2">
                    <div>30 de Agosto 2025 - 7:00 AM</div>
                    <div>1da pre-venta desde 18 de Julio</div>
                    <div className="font-extrabold text-orange-300 text-2xl md:text-3xl">
                        Costo de la carrera 10K: 1200 Bs
                    </div>
                    <div className="font-bold text-orange-200 text-xl md:text-2xl">
                        Costo de la caminata 5K: 600 Bs
                    </div>
                </div>
            </div>
            <a
                href="#payment-info"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded mt-6 md:mt-0 transition-colors duration-200 text-xl md:text-2xl text-center no-underline hover:no-underline"
            >
                FORMULARIO DE INSCRIPCIÓN
            </a>
        </section>
    );
}

export default EventDetailsSection;
