import type { Metadata } from "next";
import { HomeView } from "@/views/HomeView";

export const metadata: Metadata = {
    title: "Carrera y Caminata a Santa Rosa de Lima 2025 | Carúpano",
    description:
        "Únete a la 1ª Carrera y Caminata a Santa Rosa de Lima el 30 de agosto en Carúpano. 10K y 5K con premios. Inscríbete hasta el 27 de agosto en santarosa10k.com. ¡Vive la pasión del deporte y la comunidad!",
    keywords: [
        "Carrera Santa Rosa",
        "Caminata Carúpano",
        "Santa Rosa 10K",
        "evento deportivo Carúpano",
        "running Venezuela",
        "30 agosto 2025",
        "carrera 5K Venezuela",
        "atletismo Sucre"
    ],
    robots: "index, follow",
    authors: [{ name: "Titanes Runners Carupano" }],
    openGraph: {
        title: "Carrera y Caminata a Santa Rosa de Lima - Carúpano 2025",
        description:
            "Corre o camina en la 1ª edición de Santa Rosa 10K. Premios en efectivo, hidratación por @aguaselitesucre y un día de unión en Carúpano. ¡Inscríbete ya!",
        url: "https://santarosa10k.com",
        type: "website",
        locale: "es_VE",
        siteName: "Santa Rosa 10K",
        images: [
            {
                url: "https://santarosa10k.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Carrera y Caminata a Santa Rosa de Lima 2025 - Carúpano",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Carrera y Caminata a Santa Rosa de Lima 2025",
        description: "10K y 5K en Carúpano. Premios en efectivo. Inscríbete hasta el 27 de agosto.",
        images: ["https://santarosa10k.com/og-image.jpg"],
    },
    alternates: {
        canonical: "https://santarosa10k.com",
    },
};

export default function Page() {
    return <HomeView />;
}
