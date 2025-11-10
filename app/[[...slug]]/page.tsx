import "../../index.css";
import { ClientOnly } from "./client";

export async function generateStaticParams() {
    // Include root path with empty array for optional catch-all
    // Note: API routes are handled separately and don't need to be included here
    return [
        { slug: [] }, // maps to '/'
        // Add other static paths you want to pre-generate here
        // { slug: ['about'] }, // would map to '/about'
        // { slug: ['contact'] }, // would map to '/contact'
    ];
}

export default function Page() {
    return <ClientOnly />;
}
