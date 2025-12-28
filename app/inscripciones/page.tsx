import { InscripcionesView } from "@/views/InscripcionesView";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Inscripciones - Carrera y Caminata a Santa Rosa de Lima",
    description: "Inscripciones cerradas para la Carrera y Caminata a Santa Rosa de Lima. ¡Prepárate para el próximo año!",
};

export default function Page() {
    return <InscripcionesView />;
}
