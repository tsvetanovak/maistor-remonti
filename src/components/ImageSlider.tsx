import { useState, useRef } from "react";
import { MoveHorizontal } from "lucide-react";

export function ImageSlider({ beforeImage, afterImage, title, subtitle, testId }: { beforeImage: string, afterImage: string, title: string, subtitle: string, testId: string }) {
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
      data-testid={testId}
      className="relative aspect-[4/3] overflow-hidden border border-white/10 select-none cursor-ew-resize touch-pan-y group"
      onMouseMove={(e) => {
        if (e.buttons === 1) handleMove(e.clientX);
      }}
      onTouchMove={(e) => {
        handleMove(e.touches[0].clientX);
      }}
      onMouseDown={(e) => handleMove(e.clientX)}
    >
      <img alt={`След — ${title}`} className="absolute inset-0 w-full h-full object-cover" draggable="false" src={afterImage} />
      
      <img alt={`Преди — ${title}`} className="absolute inset-0 w-full h-full object-cover" draggable="false" src={beforeImage} style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }} />

      <div className="absolute top-0 bottom-0 w-px bg-primary" style={{ left: `${position}%` }}>
        <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
          <MoveHorizontal className="w-5 h-5 text-white" aria-hidden="true" />
        </span>
      </div>

      <span className="absolute top-4 left-4 font-mono text-xs tracking-widest bg-[#2A2E36] px-3 py-1.5 text-white/90 pointer-events-none">ПРЕДИ</span>
      <span className="absolute top-4 right-4 font-mono text-xs tracking-widest bg-primary px-3 py-1.5 text-white pointer-events-none">СЛЕД</span>
      
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-10 pointer-events-none">
        <p className="font-heading font-extrabold text-sm md:text-base">{title}</p>
        <p className="text-xs text-white/70 mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}
