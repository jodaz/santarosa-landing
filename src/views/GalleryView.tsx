import "./App.css";
import "./index.css"
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import MediaGallery from "@/components/MediaGallery";
import { Navigation } from "@/components/Navigation";

export function GalleryView() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col w-full gap-8">
            <div className="flex flex-col w-full">
                <Navigation />
                <HeroSection />
            </div>
            <MediaGallery  />
            <Footer />
        </div>
    );
}

