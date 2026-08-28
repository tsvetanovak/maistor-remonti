import { FileText, BadgeCheck, CreditCard, Sparkles } from "lucide-react";

export default function TrustSection() {
  const features = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Фиксирана цена в договор",
      desc: "Цената от офертата е финална. Никакви „непредвидени разходи“ по средата на ремонта."
    },
    {
      icon: <BadgeCheck className="w-5 h-5" />,
      title: "Писмена гаранция",
      desc: "Всяка извършена дейност е покрита с писмена гаранция за качество на труда."
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Поетапно плащане",
      desc: "Плащате само за реално свършената работа — етап по етап, срещу протокол."
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Чист обект след нас",
      desc: "Работим с предпазни фолиа и оставяме обекта почистен. Без строителен боклук по коридорите."
    }
  ];

  return (
    <section id="trust" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column */}
          <div className="w-full lg:w-1/2">
            <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-6">
              ЗАЩО НАС
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.05] mb-6">
              Доверието се гради с факти, не с обещания.
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed">
              Работим така, както бихме искали да работят в нашия собствен дом — прецизно, чисто и с отговорност.
            </p>
            
            <div className="mt-16 lg:mt-24">
              <span 
                className="font-heading font-black text-[10rem] lg:text-[14rem] leading-none opacity-40 block -ml-2 select-none tracking-tighter"
                style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.5)', color: 'transparent' }}
              >
                100%
              </span>
            </div>
          </div>
          
          {/* Right Column (2x2 Grid) */}
          <div className="w-full lg:w-1/2 rounded-lg lg:rounded-2xl overflow-hidden border border-white/10 mt-10 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 bg-white/10 gap-px">
              {features.map((feature, i) => (
                <div key={i} className="bg-background p-8 lg:p-10 flex flex-col">
                  <div className="w-12 h-12 flex items-center justify-center border border-white/10 text-primary mb-6 rounded-md bg-background/50">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading font-bold text-lg lg:text-xl mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
