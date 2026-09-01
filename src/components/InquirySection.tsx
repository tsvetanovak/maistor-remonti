import { useState } from "react";
import { ArrowRight, ArrowLeft, CircleCheck } from "lucide-react";

export default function InquirySection() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");

  const services = [
    { id: "quote-service-shpaklovka", label: "Шпакловка и боядисване" },
    { id: "quote-service-banya", label: "Цялостен ремонт на баня" },
    { id: "quote-service-vik", label: "ВиК услуги" },
    { id: "quote-service-pokriv", label: "Ремонт на покрив" },
    { id: "quote-service-cyalosten", label: "Цялостен ремонт" }
  ];

  return (
    <section id="zapitvane" className="py-24 md:py-32 bg-[#212428] border-y border-white/10" data-testid="quote-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div>
              <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4" data-testid="quote-kicker">
                Запитване / Калкулатор
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[48px] font-black tracking-tight leading-[1.08] mb-5">
                Поискайте оферта <br />за 60 секунди.
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
                Три бързи стъпки — след това се свързваме с вас до 24 часа, за да уговорим безплатен оглед.
              </p>
            </div>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <CircleCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                Безплатен и необвързващ оглед за София и региона
              </li>
              <li className="flex gap-3">
                <CircleCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                Детайлна оферта в евро (€) — труд и материали по позиции
              </li>
              <li className="flex gap-3">
                <CircleCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                Фиксирана цена и срок, записани в договор
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <div className="border border-[#26292E] bg-[#151719] p-6 md:p-10">
              
              <div className="flex items-center gap-2 mb-8" data-testid="quote-progress">
                <div className={`h-1 flex-1 transition-colors duration-300 ${step >= 1 ? 'bg-primary' : 'bg-white/10'}`}></div>
                <div className={`h-1 flex-1 transition-colors duration-300 ${step >= 2 ? 'bg-primary' : 'bg-white/10'}`}></div>
                <div className={`h-1 flex-1 transition-colors duration-300 ${step >= 3 ? 'bg-primary' : 'bg-white/10'}`}></div>
                <span className="font-mono text-xs text-muted-foreground ml-3">{step}/3</span>
              </div>
              
              <div className="min-h-[250px]">
                {step === 1 && (
                  <div className="animate-in fade-in duration-500">
                    <p className="font-heading font-extrabold text-lg mb-5">Каква услуга ви трябва?</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {services.map((svc) => {
                        const isActive = selectedService === svc.label;
                        return (
                          <button
                            key={svc.id}
                            type="button"
                            data-testid={svc.id}
                            onClick={() => setSelectedService(svc.label)}
                            className={`w-full text-left border px-5 py-4 font-medium text-sm md:text-base transition-[background-color,border-color,color] duration-200 ${
                              isActive
                                ? 'bg-primary/10 border-primary text-foreground'
                                : 'border-white/10 text-muted-foreground hover:border-white/30 hover:text-foreground'
                            }`}
                          >
                            {svc.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="animate-in fade-in duration-500">
                    <p className="font-heading font-extrabold text-lg mb-5">Данни за контакт</p>
                    <div className="space-y-4">
                      <input type="text" placeholder="Име" className="w-full bg-transparent border border-white/10 px-5 py-4 text-sm focus:border-primary outline-none transition-colors" />
                      <input type="tel" placeholder="Телефон" className="w-full bg-transparent border border-white/10 px-5 py-4 text-sm focus:border-primary outline-none transition-colors" />
                      <textarea placeholder="Допълнителна информация (по желание)" className="w-full bg-transparent border border-white/10 px-5 py-4 text-sm focus:border-primary outline-none transition-colors resize-none h-24" />
                    </div>
                  </div>
                )}
                
                {step === 3 && (
                  <div className="animate-in fade-in duration-500 flex flex-col items-center justify-center h-full py-10 text-center">
                    <CircleCheck className="w-16 h-16 text-primary mb-4" />
                    <p className="font-heading font-extrabold text-2xl mb-2">Готово!</p>
                    <p className="text-muted-foreground">Запитването е прието. Ще се свържем с вас скоро.</p>
                  </div>
                )}
              </div>

              {step < 3 && (
                <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10">
                  <button 
                    type="button" 
                    data-testid="quote-back-button" 
                    disabled={step === 1}
                    onClick={() => setStep(step - 1)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-0 transition-colors duration-200"
                  >
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Назад
                  </button>
                  <button 
                    type="button" 
                    data-testid="quote-next-button" 
                    disabled={step === 1 && !selectedService}
                    onClick={() => setStep(step + 1)}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-orange-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-heading font-extrabold px-7 py-3.5 rounded-full text-sm transition-[background-color] duration-200"
                  >
                    {step === 2 ? "Изпрати" : "Напред"} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
