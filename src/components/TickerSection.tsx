import { Sparkle } from "lucide-react";

export default function TickerSection() {
  const words = [
    "РЕМОНТИ",
    "ПРЕМИУМ КАЧЕСТВО",
    "БЕЗКОМПРОМИСНО ИЗПЪЛНЕНИЕ",
    "ФИКСИРАНА ЦЕНА",
    "ПИСМЕНА ГАРАНЦИЯ",
    "СОФИЯ И РЕГИОНА",
    "МАЙСТОР РЕМОНТИ",
    "РЕМОНТИ",
    "ПРЕМИУМ КАЧЕСТВО",
    "БЕЗКОМПРОМИСНО ИЗПЪЛНЕНИЕ",
    "ФИКСИРАНА ЦЕНА",
    "ПИСМЕНА ГАРАНЦИЯ",
    "СОФИЯ И РЕГИОНА",
    "МАЙСТОР РЕМОНТИ"
  ];

  return (
    <div className="w-full bg-[#1F2226] py-4 md:py-6 overflow-hidden border-y border-[#2B2F36] flex flex-nowrap whitespace-nowrap">
      <div className="animate-ticker-custom">
        {words.map((word, i) => (
          <span key={i} className="text-[#878F9B] font-heading font-black tracking-widest px-8 md:px-12 text-sm md:text-base flex items-center">
            {word} <Sparkle className="w-3.5 h-3.5 text-primary ml-8 md:ml-12" fill="currentColor" aria-hidden="true" />
          </span>
        ))}
      </div>
      <div className="animate-ticker-custom" aria-hidden="true">
        {words.map((word, i) => (
          <span key={`dup-${i}`} className="text-[#878F9B] font-heading font-black tracking-widest px-8 md:px-12 text-sm md:text-base flex items-center">
            {word} <Sparkle className="w-3.5 h-3.5 text-primary ml-8 md:ml-12" fill="currentColor" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
