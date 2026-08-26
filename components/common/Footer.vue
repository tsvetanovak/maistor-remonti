<template>
  <footer class="bg-navy-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Footer Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
        
        <!-- Column 1: Brand & Bio -->
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white flex items-center justify-center shadow-lg shadow-brand-500/20">
              <Wrench class="w-5 h-5 text-slate-900" />
            </div>
            <span class="text-xl font-extrabold text-white tracking-tight uppercase">
              Майстор <span class="text-accent-400">Ремонти</span>
            </span>
          </div>
          <p class="text-sm text-slate-400 leading-relaxed">
            Професионални строителни и ремонтни услуги с над 15 години опит в София и региона. Гаранция за качество, коректност и спазване на сроковете.
          </p>
          <div class="flex items-center gap-2 text-xs font-semibold text-accent-400 bg-accent-500/10 border border-accent-500/20 rounded-lg p-2.5 w-fit">
            <ShieldCheck class="w-4 h-4 text-accent-400" />
            <span>100% Гаранция и писмен договор</span>
          </div>
        </div>

        <!-- Column 2: Quick Links -->
        <div>
          <h3 class="text-base font-bold text-white uppercase tracking-wider mb-4 border-l-4 border-brand-500 pl-3">
            Бърза навигация
          </h3>
          <ul class="space-y-2.5 text-sm">
            <li v-for="link in quickLinks" :key="link.name">
              <a 
                :href="link.href" 
                class="hover:text-accent-400 transition-colors flex items-center gap-1.5 group"
              >
                <ChevronRight class="w-3.5 h-3.5 text-slate-500 group-hover:text-accent-400 transition-colors" />
                <span>{{ link.name }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Core Services -->
        <div>
          <h3 class="text-base font-bold text-white uppercase tracking-wider mb-4 border-l-4 border-accent-500 pl-3">
            Основни услуги
          </h3>
          <ul class="space-y-2.5 text-sm">
            <li v-for="service in services" :key="service">
              <a 
                href="#services" 
                class="hover:text-accent-400 transition-colors flex items-center gap-1.5 group"
              >
                <ChevronRight class="w-3.5 h-3.5 text-slate-500 group-hover:text-accent-400 transition-colors" />
                <span>{{ service }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 4: Contact Info -->
        <div class="space-y-4">
          <h3 class="text-base font-bold text-white uppercase tracking-wider mb-4 border-l-4 border-brand-500 pl-3">
            Контакти
          </h3>
          <div class="space-y-3 text-sm">
            <div class="flex items-start gap-3">
              <MapPin class="w-5 h-5 text-accent-400 shrink-0 mt-0.5" />
              <span>гр. София, бул. "Витоша" 100</span>
            </div>
            <div class="flex items-center gap-3">
              <Phone class="w-5 h-5 text-accent-400 shrink-0" />
              <a href="tel:+359881234567" class="hover:text-white font-semibold transition-colors">
                +359 88 123 4567
              </a>
            </div>
            <div class="flex items-center gap-3">
              <Mail class="w-5 h-5 text-accent-400 shrink-0" />
              <a href="mailto:office@maistor-remonti.bg" class="hover:text-white transition-colors">
                office@maistor-remonti.bg
              </a>
            </div>
            <div class="flex items-center gap-3">
              <Clock class="w-5 h-5 text-accent-400 shrink-0" />
              <span>Пон - Съб: 08:00 - 20:00</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2026 Майстор Ремонти. Всички права запазени.</p>
        <div class="flex items-center gap-6">
          <a href="#" class="hover:text-slate-300 transition-colors">Политика за поверителност</a>
          <a href="#" class="hover:text-slate-300 transition-colors">Общи условия</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { 
  Wrench, 
  ShieldCheck, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from 'lucide-vue-next'

const quickLinks = [
  { name: 'Начало', href: '#hero' },
  { name: 'За нас', href: '#about' },
  { name: 'Галерия и Проекти', href: '#projects' },
  { name: 'Цени', href: '#prices' },
  { name: 'Отзиви от клиенти', href: '#reviews' },
  { name: 'Контакти', href: '#contact' },
]

const services = [
  'Цялостни ремонти на апартаменти',
  'Модерни бани и сантехника',
  'Покривни ремонти и хидроизолация',
  'Електро и ВиК инсталации',
  'Гипсокартон и декоративни мазилки',
  'Топлоизолация и саниране'
]
</script>
