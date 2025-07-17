function EventDetailsSection() {
    return (
        <section className="bg-teal-700 text-white py-8 px-4 flex flex-col md:flex-row items-center justify-between w-full">
            <div className="text-center md:text-left w-full flex-1">
                <div className="font-bold uppercase tracking-widest text-sm">
                    SANTA ROSA DE LIMA10K
                </div>
                <div className="text-xs mt-1">
                    30 de Agosto 2025
                    <br />
                    6:30 AM
                    <br />
                    2da pre-venta del 22 de junio al 15 de julio: $35 o BsCV
                </div>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded mt-4 md:mt-0">
                FORMULARIO DE INSCRIPCIÓN
            </button>
        </section>
    );
}

export default EventDetailsSection;
