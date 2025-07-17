import { useState } from "react";

const categories = [
    "Carrera Adultos 10K",
    "Carrera Juvenil 5K",
    "Caminata 5K",
] as const;

type Category = (typeof categories)[number];

const categoryForms: Record<Category, string> = {
    "Carrera Adultos 10K":
        "https://docs.google.com/forms/d/e/1FAIpQLSfiT2vL3iEm-GvfTPo3bSbRPcVeLz1sWzg40Xg-qzYr28d0hQ/viewform?embedded=true",
    "Carrera Juvenil 5K":
        "https://docs.google.com/forms/d/e/1FAIpQLSd5EILfFPPxbg2Snq4cquiN7FXXCLTcN_dlSseNzJqpGREqFw/viewform?embedded=true", // Replace with actual form URL
    "Caminata 5K":
        "https://docs.google.com/forms/d/e/1FAIpQLSf1aFwsWAMCkr7h0I7T986l2xYhhVipdJCrhiDgZDz9ByT1ug/viewform?embedded=true", // Replace with actual form URL
};

function PaymentInfoSection() {
    const [category, setCategory] = useState<Category>("Carrera Adultos 10K");

    return (
        <section className="bg-white py-8 px-4 max-w-3xl mx-auto rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-2">SECCIÓN DEL PAGO</h2>
            <div className="mb-4">
                <label
                    htmlFor="category"
                    className="block text-gray-700 font-medium mb-2"
                >
                    ¿A cuál categoría perteneces?
                </label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value as Category)}
                    className="w-full p-2 border rounded focus:outline-none focus:ring"
                >
                    <option>Carrera Adultos 10K</option>
                    <option>Carrera Juvenil 5K</option>
                    <option>Caminata 5K</option>
                </select>
            </div>
            <div className="text-gray-700 mb-2">{category}</div>
            <iframe
                src={categoryForms[category]}
                width="640"
                height="2000"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                title="Formulario de pago"
            >
                Loading…
            </iframe>
        </section>
    );
}

export default PaymentInfoSection;
