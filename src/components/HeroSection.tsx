import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-strategy.jpg";
import logo from "@/assets/logo-lema.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary to-primary">
      <div className="absolute inset-0 opacity-20">
        <img src={heroImage} alt="Estratégia de crescimento" className="w-full h-full object-cover" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-8 animate-fade-in">
          <img src={logo} alt="Lema Digital" className="h-16 md:h-20" />
        </div>
        
        <div className="inline-block mb-6 px-4 py-2 bg-background/10 backdrop-blur-sm rounded-full border border-background/20 animate-fade-in">
          <p className="text-background text-sm font-medium">Assessoria de Marketing e Vendas</p>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-6 animate-fade-in leading-tight">
          Transformamos visibilidade<br />em vendas previsíveis.
        </h1>
        
        <p className="text-lg md:text-xl text-background/90 max-w-3xl mx-auto mb-10 animate-fade-in leading-relaxed">
          A Lema Digital une <strong>anúncios online, conteúdo estratégico e estrutura comercial</strong> para criar 
          sistemas de crescimento personalizados, autorais e sustentáveis para o seu negócio.
        </p>
        
        <a href="https://form.respondi.app/Q8JFntIQ" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-background text-primary hover:bg-background/90 font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in">
            👉 Quero agendar minha sessão estratégica
          </Button>
        </a>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
