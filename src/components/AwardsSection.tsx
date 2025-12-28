import { Trophy, Medal } from "lucide-react";

export default function AwardsSection() {
  return (
    <section id="premiacion" className="py-20 bg-blue-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-edo font-bold text-white mb-12">
            PREMIACIÓN
          </h2>
          
          <div className="bg-white/10 rounded-lg p-8 space-y-8">
            <div className="flex items-start gap-4">
              <Trophy className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-edo font-bold text-white mb-4">
                  Premios en Efectivo que Motivan! 🏆
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-yellow-500 font-edo font-bold text-xl mb-2">
                      Absolutos (Femenino y Masculino)
                    </p>
                    <p className="text-white text-lg">
                      $150
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-yellow-500 font-edo font-bold text-xl mb-3">
                      Por Categoría
                    </p>
                    <ul className="space-y-2 text-white">
                      <li className="flex items-center gap-2">
                        <Medal className="w-5 h-5 text-yellow-500" />
                        <span><strong>1er lugar:</strong> $70</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Medal className="w-5 h-5 text-yellow-500" />
                        <span><strong>2do lugar:</strong> $50</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Medal className="w-5 h-5 text-yellow-500" />
                        <span><strong>3er lugar:</strong> $30</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-white text-lg mt-6 font-edo">
                  ¡Da lo mejor y lleva tu recompensa!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

