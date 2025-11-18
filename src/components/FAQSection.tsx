import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Como funciona a sessão estratégica?",
      answer: "É uma reunião online de aproximadamente 60 minutos onde analisamos seu negócio, identificamos oportunidades e traçamos um plano personalizado de crescimento."
    },
    {
      question: "Tem algum custo?",
      answer: "Não! A sessão estratégica é 100% gratuita e sem compromisso. É nossa forma de conhecer sua empresa e mostrar como podemos ajudar."
    },
    {
      question: "É consultoria?",
      answer: "Mais do que isso. Oferecemos uma assessoria completa que integra marketing e vendas, com acompanhamento estratégico contínuo para garantir resultados sustentáveis."
    },
    {
      question: "Vocês atendem quais segmentos?",
      answer: "Somos especialistas em empresas de serviços, negócios locais e B2C com faturamento acima de R$ 35 mil mensais que buscam crescimento previsível."
    },
    {
      question: "Quanto tempo dura o processo?",
      answer: "Cada negócio é único. Após a sessão estratégica, apresentamos um plano personalizado com prazos e etapas claras para alcançar seus objetivos."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
