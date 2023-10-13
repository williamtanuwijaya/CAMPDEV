import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Specify the public path for your assets (change '/your-app/' to your actual subpath)
    base: '/',
  },
})
