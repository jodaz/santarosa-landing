function HeroSection() {
    return (
        <section className="bg-gradient-to-b from-orange-200 to-teal-200 flex flex-col items-center justify-center py-16 relative">
            <div className="w-full max-w-2xl h-64 bg-transparent rounded-lg flex items-center justify-center mb-8">
                <img
                    src="/src/assets/logos/SANTAROSA3_transparent.png"
                    alt="Santa Rosa de Lima 10K logo"
                    className="h-64 w-64 object-contain"
                />
            </div>
        </section>
    );
}

export default HeroSection;
