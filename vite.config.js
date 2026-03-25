import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './', // 這行非常重要，通常是 /lab04_web/
  plugins: [react()],
})
