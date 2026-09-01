import { FileText, BadgeCheck, Wallet, Sparkles } from "lucide-react";

export default function TrustSection() {
  const cards = [
    {
      icon: FileText,
      title: "Фиксирана цена в договор",
      desc: "Цената от офертата е финална. Никакви „непредвидени разходи“ по средата на ремонта."
    },
    {
      icon: BadgeCheck,
      title: "Писмена гаранция",
      desc: "Всяка извършена дейност е покрита с писмена гаранция за качество на труда."
    },
    {
      icon: Wallet,
      title: "Поетапно плащане",
      desc: "Плащате само за реално свършената работа — етап по етап, срещу протокол."
    },
    {
      icon: Sparkles,
      title: "Чист обект след нас",
      desc: "Работим с предпазни фолиа и оставяме обекта почистен. Без строителен боклук по коридорите."
    }
  ];

  return (
    <section id="zashto-nas" className="py-24 md:py-32 relative blueprint-grid bg-[#16171A]" data-testid="whyus-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div>
                <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4" data-testid="whyus-kicker">
                  Защо нас
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.08] mb-5">
                  Доверието се гради с факти, не с обещания.
                </h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
                  Работим така, както бихме искали да работят в нашия собствен дом — прецизно, чисто и с отговорност.
                </p>
              </div>
              <div>
                <p className="font-heading font-black text-stroke text-[7rem] lg:text-[10rem] leading-none select-none hidden lg:block mt-8">
                  100%
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#26292E] border border-[#26292E]">
            {cards.map((card, idx) => (
              <div key={idx} className="bg-[#151719]">
                <div 
                  className="p-7 md:p-8 h-full group hover:bg-white/[0.02] transition-colors duration-300" 
                  data-testid={`whyus-card-${idx}`}
                >
                  <span className="w-11 h-11 border border-primary/40 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:border-primary transition-[background-color,border-color] duration-300">
                    <card.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading font-extrabold text-base md:text-lg mb-2.5 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
