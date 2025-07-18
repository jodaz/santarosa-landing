import "./App.css";
import { Suspense, lazy } from "react";
import Animation from "./components/Animation";

const HeroSection = lazy(() => import("./views/HeroSection"));
const SponsorsSection = lazy(() => import("./views/SponsorsSection"));
const EventDetailsSection = lazy(() => import("./views/EventDetailsSection"));
// const KitSection = lazy(() => import("./views/KitSection"));
const PaymentInfoSection = lazy(() => import("./views/PaymentInfoSection"));
const Footer = lazy(() => import("./views/Footer"));
const CategoriesSection = lazy(() => import("./views/CategoriesSection"));

function App() {
    const loader = (
        <div className="flex justify-center items-center py-12">
            <Animation name="jogging" width={120} height={120} />
        </div>
    );
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col w-full gap-8">
            <div className="flex flex-col w-full">
                <Suspense fallback={loader}>
                    <HeroSection />
                </Suspense>
            </div>
            <Suspense fallback={loader}>
                <SponsorsSection />
            </Suspense>
            <Suspense fallback={loader}>
                <CategoriesSection />
            </Suspense>
            {/* <Suspense fallback={loader}>
                <KitSection />
            </Suspense> */}
            <Suspense fallback={loader}>
                <PaymentInfoSection />
            </Suspense>
            <Suspense fallback={loader}>
                <Footer />
            </Suspense>
        </div>
    );
}

export default App;
