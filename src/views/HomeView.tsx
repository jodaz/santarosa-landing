import "./App.css";
import "./index.css"
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import MediaGallery from "@/components/MediaGallery";
import { Navigation } from "@/components/Navigation";
import { RaceInfo } from "@/components/RaceInfo";

import SponsorsSection from "@/components/SponsorsSection";
import EventDetailsSection from "@/components/EventDetailsSection";
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
            
            {/* Section 5, 6, 7 & 8: Event Details (Route, Categories, Awards, Kit) */}
            <EventDetailsSection />
            
            {/* Section 9: Organizadores */}
            <OrganizersSection />
            {/* Section 10: Galería */}
            <MediaGallery previewMode={true} />
            <Footer />
        </div>
    );
}

