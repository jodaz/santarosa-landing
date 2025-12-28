import { MapPin, Droplet } from "lucide-react";
import Ruta from "@/assets/images/ruta.png";
import Image from "next/image";

export default function RouteSection() {
  return (
    <section id="ruta" className="py-20 bg-blue-900 relative overflow-hidden">
      {/* Decorative yellow scribbles */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-500">
          <path d="M10,20 Q30,10 50,20 T90,20" stroke="currentColor" fill="none" strokeWidth="2" />
          <path d="M15,40 Q35,30 55,40 T95,40" stroke="currentColor" fill="none" strokeWidth="2" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-edo font-bold text-white mb-8">
            LA RUTA
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <p className="text-white text-lg leading-relaxed">
                ¡Descubre el recorrido que te llevará al triunfo! 🗺️
              </p>
              <p className="text-white text-lg leading-relaxed">
                Un trayecto vibrante por la Av. Rómulo Gallegos: 10K lleno de adrenalina para corredores y 5K perfecto para caminantes.
              </p>
              <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                <Droplet className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold mb-1">Puntos de Hidratación</p>
                  <p className="text-white/90">
                    Con tres puntos de hidratación estratégicos gracias a @aguaselitesucre.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold mb-1">Mapa en Strava</p>
                  <a 
                    href="#" 
                    className="text-yellow-500 hover:text-yellow-400 underline font-edo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver ruta en Strava →
                  </a>
                </div>
              </div>
              <p className="text-white text-lg leading-relaxed">
                ¡Prepárate para conquistar la ruta!
              </p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <Image
                src={Ruta}
                alt="Mapa de la ruta"
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

