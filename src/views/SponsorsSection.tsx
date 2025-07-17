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
                                src="/src/assets/logos/TITANES23.png"
                                alt="Titanes"
                                className="w-[170px] h-[100px] object-contain bg-transparent rounded mb-2"
                            />
                            {/* Removed sponsor name */}
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                src="/src/assets/logos/centauros.png"
                                alt="Centauros"
                                className="w-[153px] h-[89px] object-contain bg-transparent rounded mb-2"
                            />
                            {/* Removed sponsor name */}
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                src="/src/assets/logos/logosantarosa_realze.png"
                                alt="Santa Rosa"
                                className="w-[153px] h-[89px] object-contain bg-transparent rounded mb-2"
                            />
                            {/* Removed sponsor name */}
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                src="/src/assets/logos/alcaldia.png"
                                alt="Alcaldia"
                                className="w-[153px] h-[89px] object-contain bg-transparent rounded mb-2"
                            />
                            {/* Removed sponsor name */}
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                src="/src/assets/logos/ianderber.webp"
                                alt="Iandeber"
                                className="w-[153px] h-[89px] object-contain bg-transparent rounded mb-2"
                            />
                            {/* Removed sponsor name */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SponsorsSection;
