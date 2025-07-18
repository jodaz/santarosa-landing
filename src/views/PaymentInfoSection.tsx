import React, { useState } from "react";

const categories = ["Carrera 10K", "Caminata 5K"] as const;

type Category = (typeof categories)[number];

const categoryForms: Record<Category, string> = {
    "Carrera 10K":
        "https://docs.google.com/forms/d/e/1FAIpQLSfiT2vL3iEm-GvfTPo3bSbRPcVeLz1sWzg40Xg-qzYr28d0hQ/viewform?embedded=true",
    "Caminata 5K":
        "https://docs.google.com/forms/d/e/1FAIpQLSf1aFwsWAMCkr7h0I7T986l2xYhhVipdJCrhiDgZDz9ByT1ug/viewform?embedded=true",
};

function PaymentInfoSection() {
    const [category, setCategory] = useState<Category>("Carrera 10K");
    const [iframeWidth, setIframeWidth] = useState<number>(getIframeWidth());

    function getIframeWidth() {
        if (typeof window === "undefined") return 320;
        const w = window.innerWidth;
        if (w >= 1024) return 640;
        if (w >= 768) return 480;
        return Math.max(320, w - 32);
    }

    // Update iframe width on resize
    React.useEffect(() => {
        function handleResize() {
            setIframeWidth(getIframeWidth());
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section
            className=" py-12 px-8 rounded-lg mb-8 w-full flex flex-col gap-10"
            id="payment-info"
        >
            <h2 className="font-edo text-5xl md:text-6xl font-bold mb-12 text-black text-center">
                ¡REALIZA TU INSCRIPCIÓN!
            </h2>
            <div className="flex flex-col lg:flex-row gap-8 items-start lg:justify-evenly w-full">
                <div className="mb-4 w-full lg:max-w-lg mx-0 md:mx-0 text-xl height-full">
                    <div className="mb-6">
                        <p className="text-gray-700 mb-4">
                            Rellena los campos y completa tu inscripción de la
                            carrera 10k SANTA ROSA DE LIMA 2025
                            <br />
                            para mayor información síguenos en Instagram{" "}
                            <a
                                href="https://www.instagram.com/santarosa10k/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-blue-600 hover:underline"
                            >
                                @santarosa10k
                            </a>
                        </p>
                        <p className="text-red-600 font-medium mb-4">
                            ¡Recuerda enviar tu comprobante de pago al contacto!
                        </p>
                        <div className="mb-4 text-gray-700">
                            ¡Para notificar el pago debe agregar la referencia y
                            enviar el comprobante al Whatsapp!:
                            <br />
                            <br />
                            <span className="font-semibold">WHATSAPP</span>
                            <br />
                            Pedro Giuseppi
                            <br />
                            <span className="font-semibold">
                                {"📱 +58 4248878453"}
                            </span>
                        </div>
                        <div className="mb-4 text-gray-700">
                            <span className="font-bold">PAGOMOVIL</span>
                            <br />
                            JOSÉ LUGO
                            <br />
                            0105
                            <br />
                            9452385
                            <br />
                            0424-8474994
                        </div>
                        <div className="mb-2 text-gray-700">
                            <span className="font-bold">
                                TRANSFERENCIA BANCARIA
                            </span>
                            <br />
                            Jose Lugo
                            <br />
                            Número de cuenta: 01050089381089061315
                            <br />
                            Documento de identidad: 9452385
                        </div>
                    </div>
                    <label
                        htmlFor="category"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        ¿A cuál categoría perteneces?
                    </label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) =>
                            setCategory(e.target.value as Category)
                        }
                        className="w-full p-2 border rounded focus:outline-none focus:ring"
                    >
                        <option>Carrera Adultos 10K</option>
                        <option>Caminata 5K</option>
                    </select>
                </div>
                <iframe
                    src={categoryForms[category]}
                    width={iframeWidth}
                    height="2000"
                    title="Formulario de pago"
                >
                    Loading…
                </iframe>
            </div>
        </section>
    );
}

export default PaymentInfoSection;
