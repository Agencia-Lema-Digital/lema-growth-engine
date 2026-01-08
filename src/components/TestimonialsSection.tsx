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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Nossos resultados<br />
            <span className="text-gradient">falam por nós.</span>
          </h2>
        </div>
        
        {/* Video Testimonials */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16 max-w-4xl mx-auto">
          <div className="flex-1 aspect-[9/16] max-w-[280px] mx-auto rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/G1ZcB1HeC80?loop=1&playlist=G1ZcB1HeC80"
              title="Depoimento 1"
              className="w-full h-full"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="flex-1 aspect-[9/16] max-w-[280px] mx-auto rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/Nb7Ofl1Pedo?loop=1&playlist=Nb7Ofl1Pedo"
              title="Depoimento 2"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
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
