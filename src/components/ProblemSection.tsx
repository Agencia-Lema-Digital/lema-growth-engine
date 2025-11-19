import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    "Leads chegam, mas ninguém converte",
    "Alto investimento com baixo retorno",
    "Marketing sem estratégia clara",
    "Processos comerciais confusos ou inexistentes",
    "Falta de posicionamento e diferenciação",
    "Vendas dependendo de sorte ou indicação"
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            O seu marketing não precisa de mais movimento.<br />
            <span className="text-gradient">Precisa de resultado.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            Muitos negócios investem em anúncios, postam conteúdo e tentam crescer… mas continuam sem previsibilidade.
            <br />
            <strong className="text-foreground">Isso acontece quando marketing e vendas não caminham juntos.</strong>
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <AlertCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-left text-foreground">{problem}</p>
              </div>
            ))}
          </div>
          
          <a href="https://form.respondi.app/Q8JFntIQ" target="_blank" rel="noopener noreferrer" className="block w-full max-w-xl mx-auto px-4">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full whitespace-normal h-auto px-4 md:px-8 py-4 text-sm md:text-base">
              → Quero entender como melhorar meus resultados
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
