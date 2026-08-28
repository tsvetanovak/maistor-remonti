import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";

const categories = [
  {
    id: 'A',
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
    id: 'B',
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
    id: 'D',
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
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-primary"></span>
            Услуги
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.08] mb-5">
            Детайлно. Категоризирано. Без скрити позиции.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
            Разгледайте пълния обхват на всяка категория — всяка оферта се изготвя позиция по позиция, с прозрачни цени в евро (€).
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:items-start relative">
          {/* Categories Sidebar */}
          <div className="flex overflow-x-auto lg:flex-col gap-3 pb-4 lg:pb-0 lg:w-1/3 hide-scrollbar lg:sticky lg:top-32 h-fit">
            {categories.map((cat) => {
              const isActive = activeCategory.id === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenItem("01"); // Auto open first item on category change
                  }}
                  className={`shrink-0 lg:shrink flex flex-col text-left border px-5 py-4 rounded-xl transition-[background-color,border-color] duration-300 min-w-[240px] lg:min-w-0 ${
                    isActive 
                      ? 'bg-primary/10 border-primary' 
                      : 'bg-transparent border-white/10 hover:border-white/30'
                  }`}
                >
                  <span className="font-mono text-[10px] tracking-widest text-white/50 uppercase mb-1">
                    Категория {cat.id}
                  </span>
                  <span className={`font-semibold transition-colors duration-300 ${isActive ? 'text-primary' : 'text-white/60 group-hover:text-white'}`}>
                    {cat.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Category Details */}
          <div className="lg:w-2/3 bg-background border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-2">
              Категория {activeCategory.id}
            </p>
            <h3 className="font-heading font-extrabold text-xl md:text-2xl tracking-tight">
              {activeCategory.title}
            </h3>
            <p className="text-muted-foreground text-sm mt-2 mb-8 pb-8 border-b border-white/10">
              {activeCategory.desc}
            </p>

            <div className="space-y-2">
              {activeCategory.items.map((item, idx) => (
                <div key={idx} className="border-b border-white/5 last:border-0">
                  <button
                    onClick={() => setOpenItem(openItem === item.num ? null : item.num)}
                    className="w-full flex flex-1 items-center justify-between transition-all font-heading font-semibold text-left text-sm md:text-base hover:text-primary hover:no-underline py-5"
                  >
                    <span className="flex items-center gap-4">
                      <span className="font-mono text-xs text-muted-foreground">{item.num}</span>
                      {item.title}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openItem === item.num ? 'rotate-180 text-primary' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openItem === item.num && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pl-9 space-y-3">
                          {item.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-3">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground leading-relaxed">{detail}</span>
                            </div>
                          ))}
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
    </section>
  );
}
