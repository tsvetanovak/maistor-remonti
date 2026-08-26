<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-brand-500 selection:text-white">
    <CommonHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <CommonFooter />
  </div>
</template>

<script setup lang="ts">
import CommonHeader from '~/components/common/Header.vue'
import CommonFooter from '~/components/common/Footer.vue'
</script>
