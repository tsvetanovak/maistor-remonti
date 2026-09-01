import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

const categories = [
  {
    id: 'A',
    testId: 'banq',
    title: 'Цялостен ремонт на баня',
    desc: 'Ключ до ключ — от къртене до последния силикон',
    items: [
      { 
        num: '01', 
        title: 'Демонтаж',
        details: [
          'Къртене на стари плочки',
          'Демонтаж на стара санитария',
          'Изкъртване до тухла / бетон',
          'Извозване на строителни отпадъци до регламентирано депо'
        ]
      },
      { 
        num: '02', 
        title: 'Инсталации',
        details: [
          'Нова ВиК инсталация (PP-R) и канализация (PVC)',
          'Вграждане на модерни линейни / точкови сифони с клапи против миризми',
          'Изграждане на ел. инсталация за LED огледала, осветление и вентилатори'
        ]
      },
      { 
        num: '03', 
        title: 'Подготовка и хидроизолация',
        details: [
          'Нивелиращи замазки с прецизни наклони',
          'Влагоустойчив гипсокартон',
          '2 слоя сертифицирана течна хидроизолация',
          'Хидроизолационни ленти по всички ъгли'
        ]
      },
      {
        num: '04',
        title: 'Лепене на плочки и оформление',
        details: [
          'Фаянс, гранитогрес, мозайки',
          'Фабрично пилене на ъгли под 45° (джоли)',
          'Антибактериално фугиране и санитарен силикон'
        ]
      },
      {
        num: '05',
        title: 'Тавани и оборудване',
        details: [
          'Окачени тавани с лунички',
          'Монтаж на вградени структури',
          'Санитария, мебели за баня, паравани и аксесоари'
        ]
      }
    ]
  },
  {
    id: 'B',
    testId: 'vik',
    title: 'ВиК услуги и инсталации',
    desc: 'От аварийни течове до нова инсталация',
    items: [
      { 
        num: '01', 
        title: 'Аварийни дейности',
        details: [
          'Отстраняване на течове',
          'Откриване на скрити аварии',
          'Отпушване на вертикални / хоризонтални щрангове',
          'Отпушване на сифони и тоалетни'
        ]
      },
      { 
        num: '02', 
        title: 'Монтажни работи',
        details: [
          'Монтаж на санитария — моноблокове, мивки, бидета, структури за вграждане',
          'Монтаж на смесители и термостати',
          'Свързване на бойлери, перални и съдомиялни машини',
          'Монтаж на душ кабини и стъклени паравани'
        ]
      },
      {
        num: '03',
        title: 'Ремонти и подмяна',
        details: [
          'Подмяна на стари щрангове с модерни PP-R тръби',
          'Монтаж / пломбиране на водомери',
          'Ремонт на тоалетни казанчета',
          'Подмяна на спирателни кранове'
        ]
      }
    ]
  },
  {
    id: 'C',
    testId: 'shpaklovka',
    title: 'Шпакловка и бояджийски услуги',
    desc: 'Стъклена гладкост на стени и тавани',
    items: [
      { 
        num: '01', 
        title: 'Подготвителни дейности',
        details: [
          'Къртене и чистене на стара мазилка',
          'Премахване на тапети и постни бои',
          'Нанасяне на дълбокопроникващ / контактен грунд',
          'Цялостно предпазно фолио и облепване със строително тиксо'
        ]
      },
      { 
        num: '02', 
        title: 'Шпакловане и изравняване',
        details: [
          'Шпакловка с мрежа (армиране срещу пукнатини)',
          'Гипсова шпакловка за големи неравности',
          'Шпакловка на гипсокартон (фугираща лента и винтове)',
          'Фина сатенена шпакловка за стъклена гладкост',
          'Монтаж на алуминиеви ъгли',
          'Безпрахово машинно или прецизно ръчно шлайфане'
        ]
      },
      { 
        num: '03', 
        title: 'Боядисване',
        details: [
          'Латекс (2–3 ръце)',
          'Боядисване на блажна / акрилна основа за влажни зони, дограма, тръби и радиатори',
          'Машинно боядисване за перфектен финиш',
          'Декоративни мазилки — Травертино, венециански и перлени ефекти',
          'Прецизно лазерно отсичане на цветове'
        ]
      },
    ]
  },
  {
    id: 'D',
    testId: 'pokriv',
    title: 'Ремонт на покриви и хидроизолация',
    desc: 'Сигурен покрив над главата през всеки сезон',
    items: [
      { 
        num: '01', 
        title: 'Текущ и основен ремонт',
        details: [
          'Разкриване на покрив',
          'Подмяна и пренареждане на керемиди',
          'Ремонт на капандури и покривни прозорци'
        ]
      },
      { 
        num: '02', 
        title: 'Хидроизолация',
        details: [
          'Подкеремидни паропропускливи мембрани',
          'Газопламъчни битумни мембрани за плоски покриви и гаражи',
          'Течна хидроизолация за открити тераси'
        ]
      },
      {
        num: '03',
        title: 'Тенекеджийски услуги',
        details: [
          'Безшевни американски или поцинковани улуци',
          'Водосточни тръби',
          'Обшивки на комини, бордове и улами'
        ]
      },
      {
        num: '04',
        title: 'Дървени конструкции',
        details: [
          'Ремонт и смяна на греди',
          'Наковаване на ОСБ / ламперия',
          'Изграждане на нови покривни конструкции, навеси, барбекюта и веранди'
        ]
      },
      {
        num: '05',
        title: 'Комини',
        details: [
          'Зидане и пренареждане',
          'Измазване',
          'Монтаж на защитни шапки'
        ]
      }
    ]
  }
];

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [openItem, setOpenItem] = useState<string | null>("01");

  return (
    <section id="uslugi" className="py-24 md:py-32 bg-[#212428] border-y border-white/10" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div>
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4" data-testid="services-kicker">
            Услуги
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[48px] font-black tracking-tight leading-[1.08] mb-5">
            Детайлно. Категоризирано. Без скрити <br className="hidden lg:block" />позиции.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
            Разгледайте пълния обхват на всяка категория — всяка оферта се изготвя позиция по позиция, с прозрачни цени в евро (€).
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 -mx-5 px-5 lg:mx-0 lg:px-0 scrollbar-hide snap-x" data-testid="services-tabs">
              {categories.map((cat) => {
                const isActive = activeCategory.id === cat.id;
                return (
                  <button
                    key={cat.id}
                    data-testid={`service-tab-${cat.testId}`}
                    onClick={() => {
                      setActiveCategory(cat);
                      setOpenItem("01");
                    }}
                    className={`snap-start shrink-0 lg:shrink text-left border px-5 py-4 transition-[background-color,border-color] duration-300 min-w-[240px] max-w-[280px] lg:max-w-none lg:min-w-0 ${
                      isActive 
                        ? 'bg-primary/10 border-primary' 
                        : 'bg-transparent border-white/10 hover:border-white/30'
                    }`}
                  >
                    <span className={`font-mono text-xs ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                      Категория {cat.id}
                    </span>
                    <span className={`block font-heading font-extrabold text-base mt-1 leading-snug ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {cat.title}
                    </span>
                  </button>
                );
              })}
            </div>
            
            <div className="mt-4 flex items-center gap-2 text-muted-foreground lg:hidden">
              <span className="text-xs uppercase tracking-widest font-mono">Плъзнете за още</span>
              <div className="h-px bg-white/10 flex-1"></div>
              <svg className="w-4 h-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div>
              <div className="border border-[#26292E] bg-[#151719]">
                <div className="p-6 md:p-8 border-b border-[#26292E]">
                  <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-2">
                    Категория {activeCategory.id}
                  </p>
                  <h3 className="font-heading font-black text-xl md:text-2xl tracking-tight">
                    {activeCategory.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    {activeCategory.desc}
                  </p>
                </div>

                <div className="px-6 md:px-8" data-testid={`service-accordion-${activeCategory.testId}`}>
                  {activeCategory.items.map((item, idx) => (
                    <div key={idx} className="border-b border-[#26292E] last:border-0" data-state={openItem === item.num ? "open" : "closed"}>
                      <h3 className="flex">
                        <button
                          onClick={() => setOpenItem(openItem === item.num ? null : item.num)}
                          data-state={openItem === item.num ? "open" : "closed"}
                          className="flex flex-1 items-center justify-between transition-all font-heading font-semibold text-left text-sm md:text-base hover:text-primary hover:no-underline py-5 [&[data-state=open]>svg]:rotate-180"
                        >
                          <span className="flex items-center gap-3">
                            <span className="font-mono text-xs text-muted-foreground">{item.num}</span>
                            {item.title}
                          </span>
                          <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                        </button>
                      </h3>
                      <AnimatePresence>
                        {openItem === item.num && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-4 pt-0">
                              <ul className="pb-5 space-y-2.5">
                                {item.details.map((detail, dIdx) => (
                                  <li key={dIdx} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
