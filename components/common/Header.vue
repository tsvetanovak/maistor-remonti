<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
    <!-- Top Bar -->
    <div class="bg-navy-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <!-- Top Left Info -->
        <div class="flex items-center gap-4 flex-wrap justify-center md:justify-start">
          <div class="flex items-center gap-1.5 text-slate-300">
            <Clock class="w-3.5 h-3.5 text-accent-400" />
            <span>Пон - Съб: 08:00 - 20:00</span>
          </div>
          <span class="hidden sm:inline text-slate-700">|</span>
          <div class="flex items-center gap-1.5 text-slate-300">
            <MapPin class="w-3.5 h-3.5 text-accent-400" />
            <span>гр. София и региона</span>
          </div>
        </div>

        <!-- Top Right Contact -->
        <div class="flex items-center gap-4">
          <a 
            href="mailto:office@maistor-remonti.bg" 
            class="hidden lg:flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail class="w-3.5 h-3.5 text-brand-400" />
            <span>office@maistor-remonti.bg</span>
          </a>
          <a 
            href="tel:+359881234567" 
            class="flex items-center gap-1.5 font-semibold text-accent-400 hover:text-accent-300 transition-colors"
          >
            <PhoneCall class="w-3.5 h-3.5 animate-pulse" />
            <span>24/7 Спешни ремонти: 088 123 4567</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Brand Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-600 to-navy-900 text-white flex items-center justify-center shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform duration-300">
            <Wrench class="w-6 h-6 text-accent-400" />
          </div>
          <div class="flex flex-col">
            <span class="text-xl font-extrabold tracking-tight text-navy-800 uppercase flex items-center gap-1">
              Майстор <span class="text-brand-600">Ремонти</span>
            </span>
            <span class="text-xs font-medium text-slate-500 tracking-wide">
              Строителни услуги с гаранция
            </span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation Links -->
        <nav class="hidden lg:flex items-center gap-1 xl:gap-2">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.name" 
            :to="item.href"
            class="px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-600 hover:bg-brand-50/60 rounded-lg transition-colors"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>

        <!-- Right Action Button (Desktop) -->
        <div class="hidden sm:flex items-center gap-3">
          <a 
            href="#contact" 
            class="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 shadow-md shadow-accent-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <Phone class="w-4 h-4 mr-2" />
            Безплатна оферта
          </a>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <div class="flex lg:hidden">
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            type="button"
            class="p-2.5 rounded-xl text-slate-700 hover:text-brand-600 hover:bg-slate-100 focus:outline-none transition-colors"
            aria-label="Отвори меню"
          >
            <Menu v-if="!isMobileMenuOpen" class="w-7 h-7" />
            <X v-else class="w-7 h-7" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Slide-over / Dropdown Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="isMobileMenuOpen" 
        class="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-2 pb-6 space-y-3"
      >
        <div class="space-y-1">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.name" 
            :to="item.href"
            @click="isMobileMenuOpen = false"
            class="block px-4 py-3 text-base font-semibold text-slate-800 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-colors"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <div class="pt-4 border-t border-slate-100 space-y-3">
          <a 
            href="tel:+359881234567" 
            class="flex items-center justify-center w-full py-3 px-4 rounded-xl font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-md transition-colors"
          >
            <Phone class="w-5 h-5 mr-2" />
            088 123 4567 (Обади се)
          </a>
          <a 
            href="#contact" 
            @click="isMobileMenuOpen = false"
            class="flex items-center justify-center w-full py-3 px-4 rounded-xl font-semibold text-navy-900 bg-accent-400 hover:bg-accent-500 transition-colors"
          >
            Заяви безплатен оглед
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  Wrench, 
  Phone, 
  PhoneCall, 
  Clock, 
  MapPin, 
  Mail, 
  Menu, 
  X 
} from 'lucide-vue-next'

const isMobileMenuOpen = ref(false)

const navItems = [
  { name: 'Начало', href: '#hero' },
  { name: 'За нас', href: '#about' },
  { name: 'Услуги', href: '#services' },
  { name: 'Проекти', href: '#projects' },
  { name: 'Цени', href: '#prices' },
  { name: 'Отзиви', href: '#reviews' },
  { name: 'Контакти', href: '#contact' },
]
</script>
