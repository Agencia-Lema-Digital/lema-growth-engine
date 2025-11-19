import { Button } from "@/components/ui/button";
import iconAds from "@/assets/icon-ads-realistic.jpg";
import iconContent from "@/assets/icon-content-realistic.jpg";
import iconSales from "@/assets/icon-sales-realistic.jpg";
import { useEffect, useRef, useState } from "react";

export const PillarsSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          });
        },
        { threshold: 0.1 }
      );
      
      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);
  const pillars = [
    {
      title: "Anúncios Online (Tráfego Pago)",
      icon: iconAds,
      items: [
        "Campanhas inteligentes",
        "Estratégias orientadas por dados",
        "Geração de oportunidades reais (não só cliques)"
      ]
    },
    {
      title: "Atração Orgânica (Conteúdo Estratégico)",
      icon: iconContent,
      items: [
        "Fortalecimento de autoridade",
        "Posicionamento profissional",
        "Relacionamento constante com o público"
      ]
    },
    {
      title: "Vendas (Estrutura Comercial)",
      icon: iconSales,
      items: [
        "Processos claros e reproduzíveis",
        "Scripts e follow-up inteligente",
        "Funil de vendas organizado"
      ]
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            O nosso método integra o que<br />
            <span className="text-gradient">outras agências separam.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-xl ${
                visibleCards[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 rounded-xl overflow-hidden">
                <img src={pillar.icon} alt={pillar.title} className="w-full h-48 object-cover" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {pillar.title}
              </h3>
              
              <ul className="space-y-3">
                {pillar.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="https://form.respondi.app/Q8JFntIQ" target="_blank" rel="noopener noreferrer" className="block w-full max-w-xl mx-auto px-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 md:px-8 py-4 md:py-6 w-full whitespace-normal h-auto text-sm md:text-base">
              👉 Quero uma estratégia personalizada para minha empresa
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
