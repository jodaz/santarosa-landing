function KitSection() {
    return (
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
    );
}

export default KitSection;
