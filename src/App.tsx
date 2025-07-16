import "./App.css";

function App() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header / Logo Bar */}
            <header className="bg-black py-2 flex justify-center">
                <span className="text-white text-2xl font-bold tracking-widest">
                    PAPAYA25
                </span>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-orange-200 to-teal-200 flex flex-col items-center justify-center py-16 relative">
                <div className="w-full max-w-2xl h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-8">
                    {/* Blank placeholder for hero image/graphic */}
                </div>
                <h1 className="text-5xl font-extrabold text-orange-600 mb-2">
                    10K PARAGUANÁ
                </h1>
                <p className="text-lg text-gray-700 font-semibold">
                    Copa Padel Paraguaná 2025
                </p>
            </section>

            {/* Sponsors Section */}
            <section className="flex flex-col md:flex-row justify-center items-center gap-12 py-8 bg-white">
                <div className="flex flex-col items-center">
                    <div className="w-40 h-20 bg-gray-100 rounded mb-2" />
                    <span className="text-xs text-gray-500">
                        RUNNERS PUNTO FIJO
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-40 h-20 bg-gray-100 rounded mb-2" />
                    <span className="text-xs text-gray-500">
                        PADEL PARAGUANÁ
                    </span>
                </div>
            </section>

            {/* Event Details & Register Button */}
            <section className="bg-teal-700 text-white py-8 px-4 flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto rounded-lg mt-8">
                <div>
                    <div className="font-bold uppercase tracking-widest text-sm">
                        10K PARAGUANÁ
                    </div>
                    <div className="text-xs mt-1">
                        10 de Agosto 2025
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

            {/* Categories & Route Section */}
            <section className="flex flex-col md:flex-row gap-8 py-12 max-w-5xl mx-auto">
                <div className="flex-1 bg-orange-500 text-white rounded-lg p-6">
                    <h2 className="font-bold text-lg mb-2">CATEGORÍAS</h2>
                    <ul className="text-sm space-y-1">
                        <li>1. Libre 18-29</li>
                        <li>2. Libre 30-39</li>
                        <li>3. Libre 40-49</li>
                        <li>4. Libre 50+</li>
                        <li>5. Silla de ruedas</li>
                        <li>6. Movilidad reducida</li>
                        <li>7. Relevo 5K x 2</li>
                        <li>8. Relevo 5K x 2 Mixto</li>
                        <li>9. Inclusión regional</li>
                    </ul>
                </div>
                <div className="flex-1 flex flex-col items-center">
                    <div className="w-full h-56 bg-gray-200 rounded-lg mb-4" />
                    <span className="text-xs text-gray-500">
                        Ruta y servicios (placeholder)
                    </span>
                </div>
            </section>

            {/* Kit Section */}
            <section className="flex flex-col md:flex-row gap-8 py-12 max-w-5xl mx-auto">
                <div className="flex-1 flex flex-col items-center">
                    <div className="w-full h-56 bg-gray-200 rounded-lg mb-4" />
                    <span className="text-xs text-gray-500">
                        Kit de participación (placeholder)
                    </span>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                    <div className="text-orange-600 font-bold text-2xl mb-2">
                        AGOSTO 10
                    </div>
                    <div className="text-gray-700">6:30am</div>
                </div>
            </section>

            {/* Payment Info Section */}
            <section className="bg-white py-8 px-4 max-w-3xl mx-auto rounded-lg mb-8">
                <h2 className="text-xl font-bold mb-2">SECCIÓN DEL PAGO</h2>
                <div className="text-gray-700 mb-2">
                    10K $35
                    <br />
                    Movilidad reducida $35
                    <br />
                    Datos Bancarios
                    <br />
                    $35 o BsCV
                    <br />
                    Datos Pago Móvil:
                    <br />
                    0412-3456789
                    <br />
                    CI 21156734
                    <br />
                    Banco Venezolano de Crédito
                </div>
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <div className="flex-1 h-12 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                        Pago con transferencia o depósito
                    </div>
                    <div className="flex-1 h-12 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                        Pago ahora con tarjeta online
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-teal-700 text-white py-4 text-center font-bold tracking-wide">
                GRACIAS POR SER PARTE DE LA EXPERIENCIA #SOMOSPAPAYA25
            </footer>
        </div>
    );
}

export default App;
