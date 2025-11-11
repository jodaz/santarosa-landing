import { GoogleAnalytics } from "@next/third-parties/google";

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
