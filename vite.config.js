import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/Project-final/",   // 👈 THIS is the fix!
  plugins: [react(), tailwindcss()],
})
