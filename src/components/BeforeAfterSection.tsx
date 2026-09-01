import { ImageSlider } from "./ImageSlider";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BeforeAfterSection() {
  return (
    <section id="galeria" className="py-24 md:py-32 bg-[#141719]" data-testid="gallery-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div>
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4" data-testid="gallery-kicker">
            Преди и След
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.08] mb-5">
            Разликата се вижда в детайла.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
            Плъзнете дръжката, за да сравните — фабрично пилени ъгли под 45°, стъклено гладки тавани, нови инсталации и завършени бани и покриви.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ImageSlider 
            testId="compare-slider-banya"
            beforeImage="/1.jpg?v=3"
            afterImage="/2.jpg?v=3"
            title="Цялостен ремонт на баня"
            subtitle="Плочки пилени под 45°, вградена структура, линеен сифон"
          />
          <ImageSlider 
            testId="compare-slider-steni"
            beforeImage="/3.jpg?v=1"
            afterImage="/4.jpg?v=1"
            title="Изграждане на тротоар"
            subtitle="Нивелиране на терена, полагане на бордюри и плочи"
          />
          <ImageSlider 
            testId="compare-slider-pokriv"
            beforeImage="/5.jpg?v=1"
            afterImage="/6.jpg?v=1"
            title="Ремонт на покрив"
            subtitle="Пренаредени керемиди, нова подкеремидна мембрана"
          />
        </div>

        <div className="mt-16 flex justify-center">
          <Link to="/gallery" className="inline-flex items-center gap-2 bg-primary hover:bg-orange-500 text-white font-heading font-extrabold px-8 py-4 rounded-full text-sm md:text-base transition-[background-color,padding] duration-300 hover:px-10">
            Разгледай всички проекти
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
