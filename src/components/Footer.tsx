import { Hammer } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="md:col-span-5 lg:col-span-4">
            <a href="#" className="flex items-center gap-3 group mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Hammer className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-heading font-bold text-lg leading-none tracking-tight">МайсторРемонти</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">Професионални ремонтни дейности</div>
              </div>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-8">
              Професионални ремонтни дейности — шпакловка, боядисване, бани ключ до ключ, ВиК и покриви. София и региона.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-primary hover:bg-orange-500 text-white font-heading font-bold px-6 py-3 rounded-full text-sm transition-[background-color] duration-200 w-fit">
              Обади се за безплатен оглед
            </a>
          </div>

          <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">Навигация</p>
            <ul className="flex flex-col gap-3">
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 w-fit">Услуги</a></li>
              <li><a href="#process" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 w-fit">Процес</a></li>
              <li><a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 w-fit">Преди и След</a></li>
              <li><a href="#trust" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 w-fit">Защо нас</a></li>
              <li><a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 w-fit">Запитване</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">Контакти</p>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:+359881234567" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors duration-200">
                  +359 88 123 4567
                </a>
              </li>
              <li className="flex gap-4">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">Viber</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">WhatsApp</a>
              </li>
              <li className="text-sm text-muted-foreground">
                София и региона
              </li>
              <li className="text-sm text-muted-foreground">
                Пон – Съб: 08:00 – 19:00
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex items-center justify-between border-t border-white/5">
          <p className="text-muted-foreground text-xs">
            © 2026 МайсторРемонти. Всички права запазени.
          </p>
          {/* Admin login intentionally removed as per user request */}
        </div>
      </div>
    </footer>
  );
}
