import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import '@/styles/globals.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/permanent-marker';

export const metadata: Metadata = {
    metadataBase: new URL('https://santarosa10k.com'),
    title: {
        default: 'Santa Rosa 10K - Carrera y Caminata 2025 | Carúpano',
        template: '%s | Santa Rosa 10K'
    },
    description: 'Evento deportivo oficial en Carúpano, Venezuela. Carrera 10K y 5K con premios en efectivo.',
    applicationName: 'Santa Rosa 10K',
    referrer: 'origin-when-cross-origin',
    keywords: ['carrera', 'running', 'Carúpano', 'Venezuela', 'Santa Rosa', '10K', '5K', 'atletismo'],
    creator: 'Titanes Runners Carupano',
    publisher: 'Santa Rosa 10K',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    // verification: {
    //     google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    // },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body>
                <div id="root">{children}</div>
            </body>
            <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_ANALYTICS}`} />
        </html>
    );
}
