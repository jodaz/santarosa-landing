import { Calendar, DollarSign, Route, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const RaceInfo = () => {
  const infoCards = [
    {
      icon: Calendar,
      title: "Fecha y Lugar",
      description: "📅 30 de agosto de 2025\n\n📍 Av. Rómulo Gallegos, Carúpano\n\n¡Marca tu calendario y prepárate para un día épico de deporte y unión comunitaria!",
      color: "text-primary",
      bgColor: "bg-primary/10",
      link: "#",
    },
    {
      icon: DollarSign,
      title: "Inscripciones",
      description: "¡Asegura tu lugar! Inscripciones abiertas en santarosa10k.com.\n\nPreventa limitada: Carrera 1400 BS | Caminata 700 BS.\n\n¡No te quedes fuera, los cupos vuelan! 🚀",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      link: "https://santarosa10k.com/inscripciones",
    },
    {
      icon: Route,
      title: "Recorrido",
      description: "10K para corredores competitivos y 5K para caminantes recreativos.\n\nTres puntos de hidratación cortesía de @aguaselitesucre.\n\n¡Explora la ruta en Strava y visualiza tu victoria!",
      color: "text-primary",
      bgColor: "bg-primary/10",
      link: "#ruta",
    },
    {
      icon: Package,
      title: "Expo Run y Entrega de Kits",
      description: "🗓️ Viernes 29 de agosto | 10 AM - 5 PM\n\n📍 Concha Acústica Luis Mariano Rivera\n\nRecoge tu kit, conoce a los patrocinadores y vive la emoción previa.\n¡Te esperamos!",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      link: "#kit",
    },
  ];

  return (
    <section id="informacion" className="py-20 bg-blue-900 relative overflow-hidden">
      {/* Decorative yellow scribbles */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-500">
          <path d="M10,20 Q30,10 50,20 T90,20" stroke="currentColor" fill="none" strokeWidth="2" />
          <path d="M15,40 Q35,30 55,40 T95,40" stroke="currentColor" fill="none" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-500">
          <path d="M10,80 Q30,90 50,80 T90,80" stroke="currentColor" fill="none" strokeWidth="2" />
          <path d="M15,60 Q35,70 55,60 T95,60" stroke="currentColor" fill="none" strokeWidth="2" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-edo font-bold text-white mb-4">
            INFORMACIÓN
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {infoCards.map((card, index) => (
            <a 
              key={index}
              href={card.link}
              className="block"
            >
              <Card 
                className="border-2 border-white/20 bg-white hover:border-yellow-500/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className={`p-4 ${card.bgColor} rounded-2xl flex-shrink-0`}>
                      <card.icon className={`w-8 h-8 ${card.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black mb-3 font-edo">
                        {card.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
