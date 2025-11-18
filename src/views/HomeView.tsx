"use client"
import "./App.css";
import "./index.css"
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import MediaGallery from "@/components/MediaGallery";
import { Navigation } from "@/components/Navigation";
import { RaceInfo } from "@/components/RaceInfo";
import CategoriesSection from "@/components/CategoriesSection";

export function HomeView() {
    // const loader = (
    //     <div className="flex justify-center items-center py-12">
    //         <Animation name="jogging" width={120} height={120} />
    //     </div>
    // );
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col w-full gap-8">
            <div className="flex flex-col w-full">
                <Navigation />
                <HeroSection />
            </div>
            {/* <SponsorsSection />
            <CategoriesSection /> */}
            {/* <Suspense fallback={loader}>
                <KitSection />
            </Suspense> */}
            {/* <Suspense fallback={loader}>
                <PaymentInfoSection />
            </Suspense> */}
            <RaceInfo />
            <CategoriesSection />
            <MediaGallery previewMode={true} />
            <Footer />
        </div>
    );
}

