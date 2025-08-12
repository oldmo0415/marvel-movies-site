import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ 如果你的仓库名不是 'marvel-movies-site'，把 base 改成 '/你的仓库名/'
export default defineConfig({
  plugins: [react()],
  base: '/marvel-movies-site/'
})
