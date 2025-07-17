import "./App.css";
import HeroSection from "./views/HeroSection";
import SponsorsSection from "./views/SponsorsSection";
import EventDetailsSection from "./views/EventDetailsSection";
import KitSection from "./views/KitSection";
import PaymentInfoSection from "./views/PaymentInfoSection";
import Footer from "./views/Footer";
import CategoriesSection from "./views/CategoriesSection";

function App() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <HeroSection />
            <SponsorsSection />
            <EventDetailsSection />
            <CategoriesSection />
            <KitSection />
            <PaymentInfoSection />
            <Footer />
        </div>
    );
}

export default App;
