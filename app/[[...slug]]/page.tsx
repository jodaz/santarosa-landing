import "../../index.css";
import { ClientOnly } from "./client";

export async function generateStaticParams() {
    // Include root path with empty array for optional catch-all
    return [
        { slug: [] }, // maps to '/'
    ];
}

export default function Page() {
    return <ClientOnly />;
}
