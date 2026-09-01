import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ShieldCheck, Ruler, CalendarCheck, Sparkles, Phone } from "lucide-react";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 800], [0, 0.8]);
  const contentOpacity = useTransform(scrollY, [0, 800], [1, 0]);
  const contentY = useTransform(scrollY, [0, 800], [0, 100]);

  return (
    <section id="top" className="relative min-h-[90vh] flex flex-col justify-end pt-32 pb-20 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 overflow-hidden blueprint-grid border-b border-white/10 bg-[#17181B]" data-testid="hero-section">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-[#17181B] via-[#17181B]/60 to-[#17181B]/30"></div>
        <motion.div 
          className="absolute inset-0 bg-[#15181A]" 
          style={{ opacity: bgOpacity }} 
        />
      </div>
      
      <motion.div 
        className="max-w-7xl mx-auto w-full px-5 sm:px-8 relative z-20"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-6"
        >
          София и региона · Професионален майстор-изпълнител
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading font-extrabold tracking-tighter leading-[0.98] text-[40px] sm:text-[56px] lg:text-[72px] max-w-5xl"
        >
          <span className="block overflow-hidden"><span className="block">Прецизни ремонтни</span></span>
          <span className="block overflow-hidden"><span className="block">дейности и довършителни</span></span>
          <span className="block overflow-hidden"><span className="block">работи <span className="text-primary">без компромис</span></span></span>
          <span className="block overflow-hidden"><span className="block">в качеството.</span></span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-7 text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed"
        >
          Шпакловка, боядисване, цялостен ремонт на бани, ВиК инсталации и покривни ремонти. Гарантиран срок, фиксирана цена и чист обект след нас.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a href="#zapitvane" className="inline-flex items-center gap-2 bg-primary hover:bg-orange-500 text-white font-heading font-extrabold px-8 py-4 rounded-full text-sm md:text-base transition-[background-color,padding] duration-300 hover:px-10">
            Поискай индивидуална оферта
            <ArrowDown className="w-4 h-4" />
          </a>
          <a href="#uslugi" className="inline-flex items-center gap-2 border border-white/20 hover:border-primary hover:text-primary font-semibold px-8 py-4 rounded-full text-sm md:text-base transition-[border-color,color] duration-300">
            Виж нашите услуги
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#2B3038] border border-[#2B3038]"
        >
          <div className="bg-[#1A202E] p-5 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
            <span className="text-sm font-medium leading-snug">100% Писмена гаранция</span>
          </div>
          <div className="bg-[#1A202E] p-5 flex items-center gap-3">
            <Ruler className="w-5 h-5 text-primary shrink-0" />
            <span className="text-sm font-medium leading-snug">Безплатен първоначален оглед</span>
          </div>
          <div className="bg-[#1A202E] p-5 flex items-center gap-3">
            <CalendarCheck className="w-5 h-5 text-primary shrink-0" />
            <span className="text-sm font-medium leading-snug">Коректни срокове</span>
          </div>
          <div className="bg-[#1A202E] p-5 flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-primary shrink-0" />
            <span className="text-sm font-medium leading-snug">Чиста и организирана работа</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
