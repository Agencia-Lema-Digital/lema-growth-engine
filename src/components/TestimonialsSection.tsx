import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "A Lema Digital organizou completamente nosso comercial e hoje temos previsibilidade nas vendas.",
      author: "Cliente da Agência Lema Digital",
      role: "Empresa de Serviços"
    },
    {
      text: "Finalmente temos uma estratégia clara que conecta nossos anúncios com vendas reais.",
      author: "Cliente da Agência Lema Digital",
      role: "Negócio Local"
    },
    {
      text: "A assessoria da Lema transformou nossa forma de atrair e converter clientes.",
      author: "Cliente da Agência Lema Digital",
      role: "Negócio B2C"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Nossos resultados<br />
            <span className="text-gradient">falam por nós.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div>
                  <p className="font-semibold text-foreground">— {testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
