import Ruta from "@/assets/images/ruta.png";

function CategoriesSection() {
    return (
        <section className="flex flex-col md:flex-row gap-8 py-12 p-8 bg-yellow-500 w-full">
            <div className="flex-1  text-black rounded-lg p-2 md:p-6">
                <h2 className="font-edo font-bold text-5xl md:text-6xl mb-2">
                    CATEGORÍAS
                </h2>
                <ul className="text-2xl space-y-4 mt-6 ">
                    <li>
                        <strong className="font-edo text-2xl">Juvenil</strong>{" "}
                        16 a 19 años
                    </li>
                    <li>
                        <strong className="font-edo text-2xl">Libre</strong> 20
                        a 39 años
                    </li>
                    <li>
                        <strong className="font-edo text-2xl">Máster A</strong>{" "}
                        40 a 49 años
                    </li>
                    <li>
                        <strong className="font-edo text-2xl">Máster B</strong>{" "}
                        50 a 59 años
                    </li>
                    <li>
                        <strong className="font-edo text-2xl">Máster C</strong>{" "}
                        60 años en adelante
                    </li>
                </ul>
            </div>
            <div className="flex-1 flex flex-col items-center">
                <h2 className="font-edo font-bold text-5xl text-white md:text-6xl mb-8 text-left w-full">
                    RUTA
                </h2>
                <ul className="text-xl space-y-4 mt-6 text-left w-full mb-4 font-bold">
                    <li className="">
                        <strong className="font-edo text-2xl">
                            Distancia total
                        </strong>{" "}
                        10.200 metros
                    </li>
                    <li>
                        <strong className="font-edo text-2xl">
                            Distancia caminata
                        </strong>{" "}
                        5.100 metros
                    </li>
                </ul>
                <img
                    src={Ruta}
                    alt="Ruta"
                    className="rounded-lg w-full object-contain bg-transparent rounded mb-2"
                />
            </div>
        </section>
    );
}

export default CategoriesSection;
