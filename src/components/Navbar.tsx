import { Menu, X, Hammer, Phone } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Hammer className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-heading font-bold text-lg leading-none tracking-tight">МайсторРемонти</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">Професионални ремонтни дейности</div>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">Услуги</a>
            <a href="#process" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">Процес</a>
            <a href="#portfolio" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">Преди и След</a>
            <a href="#trust" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">Защо нас</a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">Запитване</a>
          </div>

          <div className="hidden md:flex items-center">
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-primary hover:bg-orange-500 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-[background-color,padding] duration-300 hover:px-6">
              <Phone className="w-4 h-4" />
              Свържи се сега
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-muted-foreground hover:text-foreground">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-white/10 px-4 pt-2 pb-6 space-y-4">
          <a href="#services" className="block text-muted-foreground hover:text-foreground font-medium text-sm">Услуги</a>
          <a href="#process" className="block text-muted-foreground hover:text-foreground font-medium text-sm">Процес</a>
          <a href="#portfolio" className="block text-muted-foreground hover:text-foreground font-medium text-sm">Преди и След</a>
          <a href="#trust" className="block text-muted-foreground hover:text-foreground font-medium text-sm">Защо нас</a>
          <a href="#contact" className="block text-muted-foreground hover:text-foreground font-medium text-sm">Запитване</a>
          <a href="#contact" className="md:hidden inline-flex w-full justify-center items-center gap-2 bg-primary text-white font-semibold text-sm px-5 py-3 rounded-full mt-4">
            Обади се сега
          </a>
        </div>
      )}
    </nav>
  );
}
