import { motion } from "framer-motion";
import { ArrowDown, ShieldCheck, Ruler, Calendar, Sparkles } from "lucide-react";

export default function HeroSection() {
  const marqueeText = [
    "БЕЗКОМПРОМИСНО ИЗПЪЛНЕНИЕ",
    "ФИКСИРАНА ЦЕНА",
    "ПИСМЕНА ГАРАНЦИЯ",
    "СОФИЯ И РЕГИОНА",
    "МАЙСТОР РЕМОНТИ",
    "ПРЕМИУМ КАЧЕСТВО",
  ];

  return (
    <>
      <section className="relative min-h-[100svh] flex flex-col pt-24 pb-6 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/95 z-10" />

          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop" 
            alt="Строителство и ремонти" 
            className="w-full h-full object-cover grayscale opacity-10"
          />
          {/* Subtle radial gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/80 to-background z-20"></div>
          
          {/* Thin white grid lines */}
          <div className="absolute inset-0 z-30" style={{
            backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col w-full flex-1">
          
          {/* Main Content Centered Vertically */}
          <div className="flex flex-col items-start my-auto py-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-primary"></span>
              София и региона · Професионален майстор-изпълнител
            </motion.p>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-black tracking-tighter leading-[0.98] text-5xl sm:text-6xl lg:text-[6rem] max-w-6xl"
            >
              Прецизни ремонтни<br />дейности и довършителни<br />работи <span className="text-primary">без компромис</span><br />в качеството.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed"
            >
              Шпакловка, боядисване, цялостен ремонт на бани, ВиК инсталации и покривни ремонти. Гарантиран срок, фиксирана цена и чист обект след нас.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-orange-500 text-white font-heading font-bold px-8 py-4 rounded-full text-sm md:text-base transition-[background-color,padding] duration-300 hover:px-10">
                Поискай индивидуална оферта
                <ArrowDown className="w-5 h-5" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-primary hover:text-primary font-semibold px-8 py-4 rounded-full text-sm md:text-base transition-[border-color,color] duration-300">
                Виж нашите услуги
              </a>
            </motion.div>
          </div>

          {/* Feature List At the Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/10 bg-background/20 backdrop-blur-sm"
          >
            <div className="flex items-center justify-center gap-3 p-5 sm:border-r border-white/10 sm:border-b-0 border-b lg:border-b-0">
              <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">100% Писмена гаранция</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-5 lg:border-r border-white/10 lg:border-b-0 border-b">
              <Ruler className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">Безплатен първоначален оглед</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-5 sm:border-r border-white/10 sm:border-b-0 border-b">
              <Calendar className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">Коректни срокове</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-5">
              <Sparkles className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">Чиста и организирана работа</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Banner - Completely outside the Hero Section */}
      <div className="w-full bg-background/80 border-b border-white/10 py-4 mt-8 overflow-hidden z-40 backdrop-blur-md relative">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center min-w-max shrink-0">
              {marqueeText.map((text, idx) => (
                <div key={idx} className="flex items-center">
                  <span className="font-heading font-bold text-xs sm:text-sm tracking-[0.15em] uppercase text-muted-foreground">
                    {text}
                  </span>
                  <div className="mx-8 sm:mx-12 w-1.5 h-1.5 bg-primary rotate-45 shrink-0"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
