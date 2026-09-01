import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled ? "bg-[#14192A]/90 backdrop-blur-md border-b border-white/10" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="/#top" data-testid="brand-logo" className="flex items-center gap-3 group">
          <img src="/logo.svg" alt="МайсторРемонти" className="h-10 md:h-12 w-auto" />
        </a>
        
        <nav className="hidden lg:flex items-center gap-8" data-testid="desktop-nav">
          <a href="/#uslugi" data-testid="nav-uslugi" className="relative py-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-300">Услуги</a>
          <a href="/#proces" data-testid="nav-proces" className="relative py-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-300">Процес</a>
          <a href="/#galeria" data-testid="nav-galeria" className="relative py-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-300">Преди и След</a>
          <a href="/#zashto-nas" data-testid="nav-zashto-nas" className="relative py-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-300">Защо нас</a>
          <a href="/#zapitvane" data-testid="nav-zapitvane" className="relative py-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-300">Запитване</a>
        </nav>
        
        <div className="flex items-center gap-3">
          <a href="tel:+359897357959" data-testid="header-call-button-desktop" className="hidden md:inline-flex items-center gap-2 bg-transparent border border-white hover:bg-white text-white hover:text-black font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:px-6">
            <Phone className="w-4 h-4" />
            Свържи се сега
          </a>
          
          <a href="tel:+359897357959" data-testid="header-call-button-mobile" className="md:hidden w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full hover:bg-orange-500 transition-colors shadow-lg shadow-primary/20" aria-label="Обади се сега">
            <Phone className="w-4 h-4" />
          </a>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-toggle" 
            className="lg:hidden w-10 h-10 flex items-center justify-center border border-white/15 rounded-full text-foreground hover:bg-white/5 transition-colors" 
            aria-label="Меню"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && createPortal(
        <div className="lg:hidden fixed inset-0 z-[45] bg-[#0A0D14]/98 backdrop-blur-xl flex flex-col items-center justify-center min-h-screen animate-in fade-in duration-200">
          <div className="flex flex-col items-center gap-8 w-full max-w-sm px-6">
            <a href="/#uslugi" onClick={() => setIsOpen(false)} className="text-3xl font-heading font-black text-white hover:text-primary transition-colors w-full text-center py-2 border-b border-white/5">Услуги</a>
            <a href="/#proces" onClick={() => setIsOpen(false)} className="text-3xl font-heading font-black text-white hover:text-primary transition-colors w-full text-center py-2 border-b border-white/5">Процес</a>
            <a href="/#galeria" onClick={() => setIsOpen(false)} className="text-3xl font-heading font-black text-white hover:text-primary transition-colors w-full text-center py-2 border-b border-white/5">Преди и След</a>
            <a href="/#zashto-nas" onClick={() => setIsOpen(false)} className="text-3xl font-heading font-black text-white hover:text-primary transition-colors w-full text-center py-2 border-b border-white/5">Защо нас</a>
            <a href="/#zapitvane" onClick={() => setIsOpen(false)} className="text-3xl font-heading font-black text-white hover:text-primary transition-colors w-full text-center py-2 border-b border-white/5">Запитване</a>
            
            <div className="pt-6 flex flex-col items-center gap-4 w-full">
              <p className="text-muted-foreground text-sm font-mono tracking-widest uppercase mb-2">Контакти</p>
              <a href="tel:+359897357959" className="inline-flex w-full justify-center items-center gap-3 bg-primary text-white font-heading font-extrabold text-lg px-8 py-4 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
                <Phone className="w-5 h-5" />
                Обади се сега
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
