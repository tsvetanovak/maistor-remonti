import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ImageSlider } from "../components/ImageSlider";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#141719] text-foreground font-sans flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#17181B]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center">
          <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors font-medium">
            <ArrowLeft className="w-5 h-5" />
            Назад към Начало
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-16">
            <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Галерия
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-6">
              Всички Проекти
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed">
              Разгледайте пълното ни портфолио от завършени обекти. От цялостни ремонти на бани до изграждане на покриви и настилки — резултатите говорят сами.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ImageSlider 
              testId="gallery-1"
              beforeImage="/1.jpg?v=3"
              afterImage="/2.jpg?v=3"
              title="Цялостен ремонт на баня"
              subtitle="Плочки пилени под 45°, вградена структура, линеен сифон"
            />
            <ImageSlider 
              testId="gallery-2"
              beforeImage="/3.jpg?v=1"
              afterImage="/4.jpg?v=1"
              title="Изграждане на тротоар"
              subtitle="Нивелиране на терена, полагане на бордюри и плочи"
            />
            <ImageSlider 
              testId="gallery-3"
              beforeImage="/5.jpg?v=1"
              afterImage="/6.jpg?v=1"
              title="Ремонт на покрив"
              subtitle="Пренаредени керемиди, нова подкеремидна мембрана"
            />
            <ImageSlider 
              testId="gallery-4"
              beforeImage="/7.jpg?v=1"
              afterImage="/8.jpg?v=1"
              title="Завършен обект"
              subtitle="Прецизна работа и внимание към детайла"
            />
            <ImageSlider 
              testId="gallery-5"
              beforeImage="/9.jpg?v=1"
              afterImage="/10.jpg?v=1"
              title="Интериорен ремонт"
              subtitle="Цялостно обновяване на помещението"
            />
            <ImageSlider 
              testId="gallery-6"
              beforeImage="/11.jpg?v=1"
              afterImage="/12.jpg?v=1"
              title="Ремонт на баня по дизайн"
              subtitle="Цялостно изпълнение по дизайнерски проект"
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
