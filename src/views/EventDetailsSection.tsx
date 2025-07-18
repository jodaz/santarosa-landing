function EventDetailsSection() {
    return (
        <section className="bg-gray-700 text-white px-10 py-20 md:p-20 flex flex-col md:flex-row items-center justify-between w-full">
            <div className="text-center md:text-left w-full flex-1 gap-10">
                <div className="font-edo font-bold uppercase tracking-widest text-2xl md:text-4xl text-white mb-10">
                    SANTA ROSA DE LIMA10K
                </div>
                <div className="text-lg md:text-xl mt-3 space-y-2 text-white gap-4 text-left">
                    <div>30 de Agosto 2025 - 7:00 AM</div>
                    <div>1da pre-venta desde 18 de Julio</div>
                    <div>
                        <span className="font-extrabold text-2xl md:text-3xl">
                            Costo de la{" "}
                            <span className="font-extrabold text-yellow-500">
                                carrera 10K: 1400 Bs
                            </span>
                        </span>
                    </div>
                    <div>
                        <span className="font-bold text-xl md:text-3xl">
                            Costo de la{" "}
                            <span className="font-extrabold text-yellow-500">
                                caminata 5K: 700 Bs
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <a
                href="#payment-info"
                className="font-edo bg-yellow-500 hover:bg-yellow-600 text-black hover:text-gray-600 font-bold py-3 px-8 rounded mt-6 md:mt-0 transition-colors duration-200 text-4xl text-center no-underline hover:no-underline"
            >
                ¡INSCRÍBETE AHORA!
            </a>
        </section>
    );
}

export default EventDetailsSection;
