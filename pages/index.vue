<template>
  <div>
    <!-- Hero / Ready Section -->
    <section id="hero" class="relative bg-gradient-to-b from-navy-900 via-navy-800 to-slate-900 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <!-- Background pattern glow -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-600/20 via-transparent to-transparent pointer-events-none"></div>
      
      <div class="max-w-5xl mx-auto text-center relative z-10 space-y-6">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 text-accent-400 text-sm font-semibold mb-2">
          <CheckCircle2 class="w-4 h-4 text-accent-400" />
          <span>Фаза 1: Основата и Header/Footer са готови!</span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
          Професионални строителни и <br class="hidden sm:inline" />
          <span class="bg-gradient-to-r from-accent-400 via-amber-300 to-accent-500 bg-clip-text text-transparent">
            ремонтни услуги в София
          </span>
        </h1>

        <p class="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          Добре дошли в новия уебсайт за **Майстор Ремонти**. Модулната архитектура, Tailwind CSS стиловете, мобилната навигация (Header) и футърът (Footer) са напълно имплементирани без административен вход.
        </p>

        <!-- Status Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 text-left">
          <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-brand-500/50 transition-colors">
            <div class="w-12 h-12 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center mb-4">
              <Wrench class="w-6 h-6" />
            </div>
            <h3 class="text-lg font-bold text-white mb-1">Nuxt 3 + Vue 3</h3>
            <p class="text-sm text-slate-400">Composition API, TypeScript и олекотен модулен сбор.</p>
          </div>

          <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-accent-500/50 transition-colors">
            <div class="w-12 h-12 rounded-xl bg-accent-500/20 text-accent-400 flex items-center justify-center mb-4">
              <Layout class="w-6 h-6" />
            </div>
            <h3 class="text-lg font-bold text-white mb-1">Header & Footer</h3>
            <p class="text-sm text-slate-400">Репликирани от референтния сайт (без вход за админи).</p>
          </div>

          <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-green-500/50 transition-colors">
            <div class="w-12 h-12 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center mb-4">
              <ShieldCheck class="w-6 h-6" />
            </div>
            <h3 class="text-lg font-bold text-white mb-1">Готови за Фаза 2</h3>
            <p class="text-sm text-slate-400">Очаквам първата конкретна секция/страница за изграждане.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { 
  CheckCircle2, 
  Wrench, 
  Layout, 
  ShieldCheck 
} from 'lucide-vue-next'

useSeoMeta({
  title: 'Майстор Ремонти | Строителни услуги и ремонти София',
  description: 'Професионални строителни и ремонтни услуги в София. Цялостни ремонти на апартаменти, бани, покриви, Ел и ВиК инсталации.'
})
</script>
