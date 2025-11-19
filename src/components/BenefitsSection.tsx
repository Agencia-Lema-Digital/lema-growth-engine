import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    "Estratégia personalizada para sua realidade",
    "Previsibilidade nas vendas",
    "Clareza no funil comercial",
    "Marketing conectado a resultados",
    "Crescimento sustentável e mensurável",
    "Parceria consultiva (não tratamos clientes como números)"
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-foreground">
            O que você ganha trabalhando<br />
            <span className="text-gradient">com a Lema Digital?</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <Sparkles className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-left text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>
          
          <a href="https://form.respondi.app/Q8JFntIQ" target="_blank" rel="noopener noreferrer" className="block w-full max-w-xl mx-auto px-4">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full whitespace-normal h-auto px-4 md:px-8 py-4 text-sm md:text-base">
              → Quero saber como isso funciona na prática
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
