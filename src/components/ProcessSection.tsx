

const steps = [
  {
    num: "01",
    title: "Запитване и консултация",
    description: "Уточняваме нуждите ви и всеки детайл по обекта — по телефона или чрез формата за запитване.",
  },
  {
    num: "02",
    title: "Оглед на място и прецизно замерване",
    description: "Безплатен оглед за София и региона. Замерване с лазер и оценка на реалното състояние.",
  },
  {
    num: "03",
    title: "Детайлна оферта и договор",
    description: "Прозрачни цени за труд и материали, в евро (€), без скрити такси. Фиксиран срок в писмен договор.",
  },
  {
    num: "04",
    title: "Чисто и качествено изпълнение",
    description: "Финален оглед заедно с вас, писмена гаранция и напълно почистен обект след нас.",
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Text Content (Left Side) */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32 h-fit">
            <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-6 pt-[1px]">
              КАК РАБОТИМ
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.05] mb-6">
              Четири стъпки.<br />Нулева несигурност.
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed">
              Всеки проект следва един и същ прецизен ред — от първото обаждане до финалния оглед и почистването.
            </p>

            <div className="mt-16 lg:mt-32">
              <span 
                className="font-heading font-black text-[10rem] lg:text-[14rem] leading-none opacity-40 block -ml-2 select-none"
                style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.5)', color: 'transparent' }}
              >
                04
              </span>
            </div>
          </div>

          {/* Steps List (Right Side) */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-12 border-t border-white/10 py-8 lg:py-10">
                <span className="font-mono text-lg font-semibold text-primary shrink-0">
                  /{step.num}
                </span>
                <div className="flex flex-col">
                  <h3 className="font-heading font-bold text-xl md:text-2xl tracking-tight mb-3 text-foreground leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      
      {/* Decorative background element matching the text-stroke styling */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-20 transform translate-x-1/4 translate-y-1/4">
        <p className="font-heading font-black text-stroke text-[7rem] lg:text-[20rem] leading-none select-none hidden lg:block">
          04
        </p>
      </div>
    </section>
  );
}
