import { Card } from "@/components/ui/card";

export const Sponsors = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Organizers */}
        <div className="mb-16">
          <h3 className="text-3xl font-black text-center text-foreground mb-8">
            Organiza
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <p className="text-xl font-bold text-primary mb-1">Comisión de Fiestas</p>
                <p className="text-lg text-muted-foreground">Santa Rosa de Lima</p>
                <p className="text-sm font-semibold text-secondary mt-1">GUAMASA</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Coordination */}
        <div className="mb-16">
          <h3 className="text-3xl font-black text-center text-foreground mb-8">
            Coordinación
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <p className="text-2xl font-black text-primary">NGRAWA</p>
                <p className="text-sm text-muted-foreground mt-1">Cronometraje Deportivo</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Sponsors */}
        <div className="mb-16">
          <h3 className="text-3xl font-black text-center text-foreground mb-8">
            Patrocina
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <p className="text-xl font-bold text-primary">Cabildo Insular de Tenerife</p>
                <p className="text-sm text-muted-foreground mt-1">Deporte Teguinero</p>
              </div>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <p className="text-xl font-bold text-secondary">Ayuntamiento</p>
                <p className="text-sm text-muted-foreground mt-1">de La Laguna</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Collaborators */}
        <div>
          <h3 className="text-3xl font-black text-center text-foreground mb-8">
            Colaboran
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {["Decathlon", "Panadería La Esperanza", "Libby's", "Tecnomar", "Beats"].map((name, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
              >
                <p className="text-center font-bold text-foreground">{name}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
