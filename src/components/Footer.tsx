import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#242830] bg-[#202126]" data-testid="footer">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.svg" alt="МайсторРемонти" className="h-10 md:h-12 w-auto" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Професионални ремонтни дейности — шпакловка, боядисване, бани ключ до ключ, ВиК и покриви. София и региона.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">
              Навигация
            </p>
            <nav className="flex flex-col gap-3">
              <a href="/#uslugi" data-testid="footer-nav-uslugi" className="relative py-1 text-sm text-muted-foreground hover:text-white transition-colors duration-300 w-fit after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-primary after:transition-all after:duration-300">Услуги</a>
              <a href="/#proces" data-testid="footer-nav-proces" className="relative py-1 text-sm text-muted-foreground hover:text-white transition-colors duration-300 w-fit after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-primary after:transition-all after:duration-300">Процес</a>
              <a href="/#galeria" data-testid="footer-nav-galeria" className="relative py-1 text-sm text-muted-foreground hover:text-white transition-colors duration-300 w-fit after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-primary after:transition-all after:duration-300">Преди и След</a>
              <a href="/#zashto-nas" data-testid="footer-nav-zashto-nas" className="relative py-1 text-sm text-muted-foreground hover:text-white transition-colors duration-300 w-fit after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-primary after:transition-all after:duration-300">Защо нас</a>
              <a href="/#zapitvane" data-testid="footer-nav-zapitvane" className="relative py-1 text-sm text-muted-foreground hover:text-white transition-colors duration-300 w-fit after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-primary after:transition-all after:duration-300">Запитване</a>
            </nav>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">
              Контакти
            </p>
            <div className="space-y-4 text-sm">
              <a href="tel:+359897357959" data-testid="footer-phone" className="flex items-center gap-3 hover:text-primary transition-colors duration-200">
                <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
                +359 897 357 959
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MessageCircle className="w-4 h-4 text-primary" aria-hidden="true" />
                <a href="viber://chat?number=%2B359897357959" data-testid="footer-viber" className="hover:text-primary transition-colors duration-200">Viber</a>
                <span className="text-white/20">·</span>
                <a href="https://wa.me/359897357959" data-testid="footer-whatsapp" className="hover:text-primary transition-colors duration-200">WhatsApp</a>
              </div>
              <p className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                София и региона
              </p>
              <p className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
                Пон – Съб: 08:00 – 19:00
              </p>
            </div>
            <a href="tel:+359897357959" data-testid="footer-cta" className="mt-7 inline-flex items-center gap-2 bg-primary hover:bg-orange-500 text-white font-heading font-extrabold px-6 py-3 rounded-full text-sm transition-[background-color] duration-200">
              <Phone className="w-4 h-4" aria-hidden="true" />
              Обади се за безплатен оглед
            </a>
          </div>

        </div>

        <div className="mt-14 pt-7 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© 2026 МайсторРемонти. CRAFTIX Всички права запазени.</p>
          <a href="https://webserotonin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-200 w-fit">Powered by: WEBSEROTONIN</a>
        </div>
      </div>
    </footer>
  );
}
