function SponsorsSection() {
    return (
        <section className="flex flex-col md:flex-row justify-center items-center gap-12 py-8 bg-white">
            <div className="flex flex-col items-center">
                <div className="w-40 h-20 bg-gray-100 rounded mb-2" />
                <span className="text-xs text-gray-500">
                    RUNNERS PUNTO FIJO
                </span>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-40 h-20 bg-gray-100 rounded mb-2" />
                <span className="text-xs text-gray-500">PADEL PARAGUANÁ</span>
            </div>
        </section>
    );
}

export default SponsorsSection;
