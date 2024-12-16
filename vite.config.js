import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Enable external access
  },
  define:{
    'process.env.VITE_WEB_3_API':JSON.stringify(process.env.VITE_WEB_3_API)
  }
})
