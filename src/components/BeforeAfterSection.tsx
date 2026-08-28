import { useState, useRef } from "react";
import { ArrowLeftRight } from "lucide-react";

function ImageSlider({ beforeImage, afterImage, title, subtitle }: { beforeImage: string, afterImage: string, title: string, subtitle: string }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setPosition(percent);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[350px] sm:h-[400px] lg:h-[450px] cursor-ew-resize select-none overflow-hidden group rounded-sm"
      onMouseMove={(e) => {
        if (e.buttons === 1) handleMove(e.clientX);
      }}
      onTouchMove={(e) => {
        handleMove(e.touches[0].clientX);
      }}
      onMouseDown={(e) => handleMove(e.clientX)}
    >
      {/* After Image */}
      <img src={afterImage} className="absolute inset-0 w-full h-full object-cover pointer-events-none" alt="After" />
      
      {/* Before Image with Clip-Path */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img src={beforeImage} className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 pointer-events-none" alt="Before" />
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 z-20 w-[2px] bg-primary pointer-events-none"
        style={{ left: `${position}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
          <ArrowLeftRight className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Top Labels */}
      <div className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-background/90 text-[10px] sm:text-xs font-bold text-white tracking-[0.2em] pointer-events-none">
        ПРЕДИ
      </div>
      <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-primary text-[10px] sm:text-xs font-bold text-white tracking-[0.2em] pointer-events-none">
        СЛЕД
      </div>

      {/* Bottom Text Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none">
        <h3 className="font-heading font-bold text-lg md:text-xl text-white leading-tight mb-1">{title}</h3>
        <p className="text-xs sm:text-sm text-white/70">{subtitle}</p>
      </div>
    </div>
  );
}

export default function BeforeAfterSection() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-muted/10 border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 lg:mb-20 max-w-3xl">
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-6">
            ПРЕДИ И СЛЕД
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.05] mb-6">
            Разликата се вижда в детайла.
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Плъзнете дръжката, за да сравните — фабрично пилени ъгли под 45°, стъклено гладки тавани, нови инсталации и завършени бани и покриви.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <ImageSlider 
            beforeImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
            afterImage="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop"
            title="Цялостен ремонт на баня"
            subtitle="Джоли под 45°, вградена структура, линеен сифон"
          />
          <ImageSlider 
            beforeImage="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop"
            afterImage="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop"
            title="Шпакловка и боядисване"
            subtitle="Сатенена шпакловка и машинно боядисване на таван"
          />
          <ImageSlider 
            beforeImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
            afterImage="https://images.unsplash.com/photo-1632759145355-6677ccfba4d3?q=80&w=2071&auto=format&fit=crop"
            title="Ремонт на покрив"
            subtitle="Пренаредени керемиди, нова подкеремидна мембрана"
          />
        </div>
      </div>
    </section>
  );
}
