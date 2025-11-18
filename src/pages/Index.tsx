import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { PUVSection } from "@/components/PUVSection";
import { PillarsSection } from "@/components/PillarsSection";
import { ICPSection } from "@/components/ICPSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StrategicSessionSection } from "@/components/StrategicSessionSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <PUVSection />
      <PillarsSection />
      <ICPSection />
      <BenefitsSection />
      <TestimonialsSection />
      <StrategicSessionSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
