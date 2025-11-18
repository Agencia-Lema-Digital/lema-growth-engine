import { CheckCircle2 } from "lucide-react";

export const ICPSection = () => {
  const icpList = [
    "Empresas de serviços, negócios locais e negócios B2C",
    "Empresas com mais de 2 anos",
    "Faturamento mensal acima de R$ 35 mil",
    "Que já investem (ou querem investir) em tráfego pago",
    "Que precisam organizar o comercial para vender mais"
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-foreground">
            Somos especialistas em negócios que<br />
            <span className="text-gradient">já querem crescer de verdade.</span>
          </h2>
          
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-xl">
            <div className="space-y-6">
              {icpList.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-background/50 rounded-lg hover:bg-background transition-all duration-300"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
