import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import webfontDownload from 'vite-plugin-webfont-dl';

export default defineConfig({
  plugins: [react(), tailwindcss(), webfontDownload()],
})
