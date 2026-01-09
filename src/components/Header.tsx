import logo from "@/assets/logo-lema-light.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsla(255,90%,62%,0.7)] backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="Lema Digital" className="h-12" />
        </div>
      </div>
    </header>
  );
};
