import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "01Колко време отнема изпълнението?", answer: "Срокът се определя индивидуално според обема на работа. Фиксираме го в договора." },
  { question: "02Как става плащането?", answer: "Плаща се на етапи, след приемане на съответната завършена работа с протокол." },
  { question: "03Наистина ли огледът е безплатен?", answer: "Да, огледът и консултацията на място в рамките на град София са напълно безплатни." },
  { question: "04Давате ли гаранция за свършената работа?", answer: "Да, даваме писмена гаранция за качеството на труда за всички извършени от нас дейности." },
  { question: "05Кой осигурява материалите?", answer: "Можем да работим с материали на клиента или да поемем цялостната доставка и логистика ние." },
  { question: "06Работите ли в обзаведени жилища?", answer: "Да. Вземаме всички мерки за предпазване на мебелите и настилките с фолио и картон." }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="pt-12 pb-24 lg:pt-0 lg:pb-32 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column */}
          <div className="w-full lg:w-1/3 shrink-0 pt-6 md:pt-8">
            <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-6">
              ЧЕСТО ЗАДАВАНИ ВЪПРОСИ
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.05]">
              Ясни отговори, преди още да попитате.
            </h2>
          </div>

          {/* Right Column - Accordion */}
          <div className="w-full flex-1 border-t border-white/5">
            {faqs.map((faq, index) => {
              const num = faq.question.substring(0, 2);
              const text = faq.question.substring(2);
              return (
                <div key={index} className="border-b border-white/5">
                  <button
                    className="w-full flex items-center justify-between transition-all font-heading font-semibold text-left text-base md:text-lg hover:text-white py-6 md:py-8 group"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="flex items-center gap-6">
                      <span className="font-mono text-sm font-bold text-primary">{num}</span>
                      <span className="tracking-tight text-white/90 group-hover:text-white transition-colors">{text}</span>
                    </span>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : ''}`} />
                  </button>
                  {openIndex === index && (
                    <div className="pl-[3.5rem] pb-8 pr-4 text-muted-foreground text-base leading-relaxed animate-in fade-in slide-in-from-top-2">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
