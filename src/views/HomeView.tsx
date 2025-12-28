import "./App.css";
import "./index.css"
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import MediaGallery from "@/components/MediaGallery";
import { Navigation } from "@/components/Navigation";
import { RaceInfo } from "@/components/RaceInfo";
import CategoriesSection from "@/components/CategoriesSection";
import SponsorsSection from "@/components/SponsorsSection";
import RouteSection from "@/components/RouteSection";
import AwardsSection from "@/components/AwardsSection";
import KitSection from "@/components/KitSection";
import OrganizersSection from "@/components/OrganizersSection";

export function HomeView() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col w-full">
            <div className="flex flex-col w-full">
                <Navigation />
                {/* Section 1: Hero */}
                <HeroSection />
            </div>
            {/* Section 2: Información (4 cards) */}
            <RaceInfo />
            {/* Section 3: Patrocinantes Institucionales */}
            {/* Section 4: Patrocinantes Oficiales */}
            <SponsorsSection />
            {/* Section 5: La Ruta */}
            <RouteSection />
            {/* Section 6: Premiación & Section 7: Categorías */}
            <section className="bg-blue-900 relative overflow-hidden">
                <div className="container mx-auto px-4 py-20 relative z-10">
                    <div className="flex flex-col md:flex-row gap-8 w-full">
                        <div className="flex-1">
                            <AwardsSection />
                        </div>
                        <div className="flex-1">
                            <CategoriesSection />
                        </div>
                    </div>
                </div>
            </section>
            <KitSection />

            {/* Section 9: Organizadores */}
            <OrganizersSection />
            {/* Section 10: Galería */}
            <MediaGallery previewMode={true} />
            <Footer />
        </div>
    );
}

