import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

const brand = '#015AB1'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon-32.png', 'apple-touch-icon.png'],
      manifest: {
        name: 'DEVIN JSC',
        short_name: 'DEVIN JSC',
        description: 'DEVIN JSC',
        lang: 'bg',
        theme_color: brand,
        background_color: brand,
        display: 'standalone',
        orientation: 'any',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,ico,woff2}'],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['.pinggy-free.link', '.pinggy.net'],
  },
  preview: {
    host: true,
    port: 4173,
  },
})
