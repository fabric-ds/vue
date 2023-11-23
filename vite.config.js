import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pkg from './package.json'

export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'esnext',
    minify: false,
    rollupOptions: {
      external: ['vue']
    },
    lib: {
      entry: './index.js',
      formats: ['es']
    }
  }
})
