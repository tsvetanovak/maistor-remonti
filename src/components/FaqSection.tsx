import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { question: "01Колко време отнема изпълнението?", answer: "Срокът зависи от обема на дейностите — точният график фиксираме писмено в договора след безплатния оглед. Ориентировъчно: шпакловка и боя на стая — 3–5 дни, цялостна баня ключ до ключ — 10–15 работни дни, покривен ремонт — според квадратурата и сезона." },
  { question: "02Как става плащането?", answer: "Работим поетапно — плащате само за реално свършената работа, етап по етап, срещу приемо-предавателен протокол. Без големи аванси и без плащане „на доверие“." },
  { question: "03Наистина ли огледът е безплатен?", answer: "Да — първоначалният оглед за София и региона е напълно безплатен и необвързващ. Идваме на място, замерваме с лазер и изготвяме детайлна оферта в евро (€) за труд и материали." },
  { question: "04Давате ли гаранция за свършената работа?", answer: "Да. Всяка дейност е покрита с писмена гаранция за качеството на труда. При хидроизолация и покривни ремонти гаранцията е с удължен срок, записан в договора." },
  { question: "05Кой осигурява материалите?", answer: "Както пожелаете. Можем да изготвим оферта с включени материали на доставчици, с които работим от години, или да работим с ваши материали — и в двата случая цената за труд остава фиксирана." },
  { question: "06Работите ли в обзаведени жилища?", answer: "Да. Облепваме всичко с предпазни фолиа и строително тиксо, работим организирано и след нас обектът остава почистен. Прахът и боклуците са наш проблем, не ваш." }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#16181A]" data-testid="faq-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div>
                <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4" data-testid="faq-h-kicker">
                  Често задавани въпроси
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.08] mb-5">
                  Ясни отговори, преди още да попитате.
                </h2>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div>
              <div className="border-t border-[#262930]" data-testid="faq-accordion" data-orientation="vertical">
                {faqs.map((faq, index) => {
                  const num = faq.question.substring(0, 2);
                  const text = faq.question.substring(2);
                  const isOpen = openIndex === index;
                  
                  return (
                    <div key={index} data-state={isOpen ? "open" : "closed"} data-orientation="vertical" className="border-b border-[#262930]">
                      <h3 data-orientation="vertical" data-state={isOpen ? "open" : "closed"} className="flex">
                        <button
                          type="button"
                          data-state={isOpen ? "open" : "closed"}
                          data-orientation="vertical"
                          className="flex flex-1 items-center justify-between transition-all [&[data-state=open]>svg]:rotate-180 font-heading font-semibold text-left text-sm md:text-base hover:text-primary hover:no-underline py-6"
                          data-testid={`faq-question-${index}`}
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                        >
                          <span className="flex gap-4">
                            <span className="font-mono text-xs text-primary pt-1">{num}</span>
                            {text}
                          </span>
                          <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" aria-hidden="true" />
                        </button>
                      </h3>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-6 pr-4 pl-8 md:pl-10 text-muted-foreground text-sm md:text-base leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
