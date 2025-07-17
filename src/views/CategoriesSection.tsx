function CategoriesSection() {
    return (
        <section className="flex flex-col md:flex-row gap-8 py-12 max-w-5xl mx-auto">
            <div className="flex-1 bg-orange-500 text-white rounded-lg p-6">
                <h2 className="font-bold text-lg mb-2">CATEGORÍAS</h2>
                <ul className="text-sm space-y-1">
                    <li>Juvenil 14 a 18</li>
                    <li>Libre 19 a 39</li>
                    <li>Máster A 40 a 49</li>
                    <li>Máster B 50 a 59</li>
                    <li>Máster C 50 en adelante</li>
                </ul>
            </div>
            <div className="flex-1 flex flex-col items-center">
                <div className="w-full h-56 bg-gray-200 rounded-lg mb-4" />
                <span className="text-xs text-gray-500">
                    Ruta y servicios (placeholder)
                </span>
            </div>
        </section>
    );
}

export default CategoriesSection;
