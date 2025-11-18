import { Map, Route, Trophy, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const RaceInfo = () => {
  const features = [
    {
      icon: Route,
      title: "Recorrido Urbano",
      description: "5 km por las calles de La Laguna, Guamasa. Circuito homologado con salida y llegada en el mismo punto.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Map,
      title: "Circuito Certificado",
      description: "Recorrido medido y certificado oficialmente. Ideal para conseguir tu mejor marca personal.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Trophy,
      title: "Clasificaciones",
      description: "Premios para los tres primeros clasificados en categorías masculina y femenina. Trofeos especiales para locales.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Heart,
      title: "Marcha Nórdica",
      description: "Participa también en la marcha nórdica organizada por el Club Deportivo TrimForte. Apta para todos los niveles.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
  ];

  return (
    <section id="recorrido" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Información de la Carrera
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre el recorrido y la competición
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-2 border-border hover:border-primary/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className={`p-4 ${feature.bgColor} rounded-2xl flex-shrink-0`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Marcha Nórdica Special Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 bg-gradient-card overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
                  <Heart className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-3xl font-black text-foreground mb-4">
                  I Marcha Nórdica Santa Rosa de Lima
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Tras la gran acogida en la edición de la incorporación de la marcha nórdica, 
                  repetimos experiencia para que puedas participar en esta modalidad.
                </p>
                <div className="inline-block bg-card border border-border rounded-2xl px-6 py-3">
                  <p className="text-sm font-semibold text-foreground">
                    Organizado por: <span className="text-primary">Club Deportivo TrimForte</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
