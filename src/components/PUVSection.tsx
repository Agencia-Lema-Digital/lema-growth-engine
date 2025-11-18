import { Badge } from "@/components/ui/badge";

export const PUVSection = () => {
  const pillars = [
    "Personalizado",
    "Especializado",
    "Inovador",
    "Autoral",
    "Posicionamento"
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
            Por que a <span className="text-gradient">Lema Digital</span> existe?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            Somos a ponte entre o marketing que atrai e o comercial que converte.
            <br />
            Criamos estratégias <strong className="text-foreground">personalizadas, especializadas, inovadoras e autorais</strong> que 
            conectam <strong className="text-foreground">anúncios, conteúdo e vendas</strong> para transformar 
            visibilidade em faturamento real.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {pillars.map((pillar, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="px-6 py-3 text-base font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                {pillar}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
