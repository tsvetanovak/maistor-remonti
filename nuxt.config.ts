import fs from 'node:fs'
import path from 'node:path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  experimental: {
    appManifest: false
  },

  hooks: {
    'prepare:types'({ buildDir }) {
      try {
        const tsconfigPath = path.join(buildDir, 'tsconfig.json')
        const appPath = path.join(buildDir, 'tsconfig.app.json')
        const nodePath = path.join(buildDir, 'tsconfig.node.json')
        if (fs.existsSync(tsconfigPath)) {
          fs.copyFileSync(tsconfigPath, appPath)
          fs.copyFileSync(tsconfigPath, nodePath)
        }
      } catch (e) {
        // ignore fallback
      }
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],

  css: [
    '~/assets/styles/main.css'
  ],

  app: {
    head: {
      title: 'Майстор Ремонти | Строителни & Ремонтни Услуги София',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Професионални строителни и ремонтни услуги в София и региона. Цялостни ремонти, бани, покриви, Ел и ВиК, топлоизолация. Гаранция за качество и безплатна оглед/оферта.' 
        },
        { name: 'theme-color', content: '#0f172a' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Manrope:wght@400;600;700;800&display=swap' 
        }
      ]
    }
  },

  typescript: {
    strict: true
  }
})
