import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function InquirySection() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");

  const services = [
    "Шпакловка и боядисване",
    "Цялостен ремонт на баня",
    "ВиК услуги",
    "Ремонт на покрив",
    "Цялостен ремонт"
  ];

  const checkIcon = (
    <div className="w-5 h-5 shrink-0 rounded-full border border-primary text-primary flex items-center justify-center">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-3 h-3 stroke-[3px]">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
            <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-6">
              ЗАПИТВАНЕ / КАЛКУЛАТОР
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.05] mb-6">
              Поискайте оферта за 60 секунди.
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed mb-12">
              Три бързи стъпки — след това се свързваме с вас до 24 часа, за да уговорим безплатен оглед.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                {checkIcon}
                <span className="text-muted-foreground text-sm sm:text-base">Безплатен и необвързващ оглед за София и региона</span>
              </div>
              <div className="flex items-center gap-4">
                {checkIcon}
                <span className="text-muted-foreground text-sm sm:text-base">Детайлна оферта в евро (€) — труд и материали по позиции</span>
              </div>
              <div className="flex items-center gap-4">
                {checkIcon}
                <span className="text-muted-foreground text-sm sm:text-base">Фиксирана цена и срок, записани в договор</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form Container */}
          <div className="w-full lg:w-1/2 bg-[#121212] border border-white/5 p-6 sm:p-10 rounded-sm">
            
            {/* Progress Bar */}
            <div className="flex items-center justify-between mb-10">
              <div className="flex-1 flex gap-2 mr-8">
                <div className={`h-[2px] flex-1 ${step >= 1 ? 'bg-primary' : 'bg-white/10'}`}></div>
                <div className={`h-[2px] flex-1 ${step >= 2 ? 'bg-primary' : 'bg-white/10'}`}></div>
                <div className={`h-[2px] flex-1 ${step >= 3 ? 'bg-primary' : 'bg-white/10'}`}></div>
              </div>
              <span className="font-mono text-xs text-muted-foreground">{step}/3</span>
            </div>

            {/* Step Content */}
            <div className="min-h-[250px]">
              {step === 1 && (
                <div className="animate-in fade-in duration-500">
                  <h3 className="font-heading font-bold text-lg mb-6">Каква услуга ви трябва?</h3>
                  
                  {/* Grid of Options - Unified border style */}
                  <div className="border border-white/10 rounded-sm overflow-hidden bg-white/10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
                      {services.map((svc) => (
                        <button
                          key={svc}
                          onClick={() => setSelectedService(svc)}
                          className={`text-left px-5 py-5 font-medium text-sm transition-colors duration-200 bg-[#121212] ${
                            selectedService === svc 
                              ? 'text-primary' 
                              : 'text-muted-foreground hover:bg-white/[0.02] hover:text-white'
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                      {/* Empty cell for the 6th spot to complete the 3x2 grid if needed, not strictly necessary but keeps borders clean */}
                      {services.length % 2 !== 0 && (
                        <div className="bg-[#121212] hidden sm:block"></div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="animate-in fade-in duration-500">
                  <h3 className="font-heading font-bold text-lg mb-6">Данни за контакт</h3>
                  <div className="space-y-4">
                    <input type="text" placeholder="Име" className="w-full bg-transparent border border-white/10 px-5 py-4 text-sm focus:border-primary outline-none transition-colors" />
                    <input type="tel" placeholder="Телефон" className="w-full bg-transparent border border-white/10 px-5 py-4 text-sm focus:border-primary outline-none transition-colors" />
                    <textarea placeholder="Допълнителна информация (по желание)" className="w-full bg-transparent border border-white/10 px-5 py-4 text-sm focus:border-primary outline-none transition-colors resize-none h-24" />
                  </div>
                </div>
              )}
            </div>

            {/* Form Footer */}
            <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
              <button 
                onClick={() => setStep(Math.max(1, step - 1))}
                className={`inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Назад
              </button>

              {step === 1 || step === 2 ? (
                <button 
                  onClick={() => setStep(step + 1)}
                  disabled={step === 1 && !selectedService}
                  className="inline-flex items-center justify-center gap-2 bg-[#8c4623] hover:bg-primary disabled:opacity-50 text-white font-medium px-8 py-3 rounded-full text-sm transition-colors duration-200"
                >
                  Напред
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button 
                  onClick={() => {
                    alert("Запитването е изпратено!");
                    setStep(1);
                    setSelectedService("");
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-[#8c4623] hover:bg-primary text-white font-medium px-8 py-3 rounded-full text-sm transition-colors duration-200"
                >
                  Изпрати
                </button>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
