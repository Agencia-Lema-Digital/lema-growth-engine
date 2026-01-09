import { useState, useEffect } from "react";
import logoLight from "@/assets/logo-lema-light.png";
import logoDark from "@/assets/logo-lema-dark.png";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-all duration-300 ${
        isScrolled 
          ? "bg-[#e5e5e5] border-black/10" 
          : "bg-[hsla(255,90%,62%,0.3)] border-white/10"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center md:justify-start">
          <img 
            src={isScrolled ? logoDark : logoLight} 
            alt="Lema Digital" 
            className="h-12 transition-opacity duration-300" 
          />
        </div>
      </div>
    </header>
  );
};
