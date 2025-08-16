import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: 'globalThis',
  },
  build: {
    outDir: "dist"
  },
  server: {
    port: 5173,
    host: "0.0.0.0"
  }
})
