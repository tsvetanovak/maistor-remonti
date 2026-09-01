export default function ProcessSection() {
  const steps = [
    {
      num: "/01",
      title: "Запитване и консултация",
      desc: "Уточняваме нуждите ви и всеки детайл по обекта — по телефона или чрез формата за запитване."
    },
    {
      num: "/02",
      title: "Оглед на място и прецизно замерване",
      desc: "Безплатен оглед за София и региона. Замерване с лазер и оценка на реалното състояние."
    },
    {
      num: "/03",
      title: "Детайлна оферта и договор",
      desc: "Прозрачни цени за труд и материали, в евро (€), без скрити такси. Фиксиран срок в писмен договор."
    },
    {
      num: "/04",
      title: "Чисто и качествено изпълнение",
      desc: "Финален оглед заедно с вас, писмена гаранция и напълно почистен обект след нас."
    }
  ];

  return (
    <section id="proces" className="py-24 md:py-32 bg-[#16181a]" data-testid="process-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div>
                <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4" data-testid="process-kicker">
                  Как работим
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.08] mb-5">
                  Четири стъпки. Нулева несигурност.
                </h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
                  Всеки проект следва един и същ прецизен ред — от първото обаждане до финалния оглед и почистването.
                </p>
              </div>
              <div>
                <p className="font-heading font-black text-stroke text-[7rem] lg:text-[10rem] leading-none select-none hidden lg:block mt-8">
                  04
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            {steps.map((step, idx) => (
              <div key={idx}>
                <div 
                  className="group flex gap-6 md:gap-10 py-8 md:py-10 border-t border-[#262930] last:border-b hover:bg-white/[0.02] transition-colors duration-300 px-2 md:px-4" 
                  data-testid={`process-step-${idx + 1}`}
                >
                  <span className="font-mono text-primary text-sm md:text-base pt-1 shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-heading font-extrabold text-lg md:text-2xl tracking-tight mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
