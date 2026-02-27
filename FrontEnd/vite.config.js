import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        // Use rewrite if your backend doesn't actually have an '/api' prefix
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
