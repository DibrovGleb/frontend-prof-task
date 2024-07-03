import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://dibrovgleb.github.io/frontend-prof-task/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components"
    },
  },
})
