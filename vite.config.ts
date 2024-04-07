import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueDevTools()],
  resolve: {
    dedupe: ['vue'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    include: ['vue']
  },
  define: {
    'process.env': {}
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      //@ts-ignore
      output: {
        globals: {
          vue: 'Vue'
        },
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name == 'main.css') return 'antwithouts.min.css'
          return chunkInfo.name
        },
        entryFileNames: 'antwithouts.min.js',
        chunkFileNames: 'antwithouts.min.js'
      }
    },
    outDir: '../dist/antwithouts',
    chunkSizeWarningLimit: 512
  }
})
