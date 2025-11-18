import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export const StrategicSessionSection = () => {
  const sessionItems = [
    "Analisar seu momento atual",
    "Identificar gargalos de marketing e vendas",
    "Mapear oportunidades reais de crescimento",
    "Te mostrar o caminho para um sistema de vendas previsível"
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-secondary to-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-background via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-background">
            Vamos criar juntos um plano personalizado<br />
            para sua empresa crescer.
          </h2>
          
          <p className="text-lg md:text-xl text-background/90 mb-12 leading-relaxed">
            Na <strong>sessão estratégica gratuita</strong>, um especialista da Lema irá:
          </p>
          
          <div className="bg-background/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-background/20 mb-12">
            <div className="space-y-6">
              {sessionItems.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 text-left"
                >
                  <CheckCircle2 className="w-7 h-7 text-background flex-shrink-0" />
                  <p className="text-lg text-background font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
          
          <a href="https://form.respondi.app/Q8JFntIQ" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-background text-primary hover:bg-background/90 font-bold px-10 py-7 text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 animate-pulse">
              👉 Quero agendar minha sessão estratégica gratuita
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
