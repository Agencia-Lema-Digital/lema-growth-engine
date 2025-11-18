import logo from "@/assets/logo-lema.png";
import { Instagram, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logo} alt="Lema Digital" className="h-12" />
            <p className="text-sm text-secondary-foreground/80">
              Transformando visibilidade em vendas previsíveis
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-6">
              <a 
                href="https://instagram.com/lemaagdigital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com/lemaagdigital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:contato@lemadigital.com.br"
                className="hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            
            <p className="text-sm text-secondary-foreground/80">
              @lemaagdigital
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center text-sm text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} Lema Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
