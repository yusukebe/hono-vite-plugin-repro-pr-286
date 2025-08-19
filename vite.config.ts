import { defineConfig } from 'vite'
import devServer from '@hono/vite-dev-server'

export default defineConfig({
  base: '/foo',
  //base: '/foo.bar',
  //base: '/fooxbar',
  plugins: [
    devServer({
      entry: 'src/index.tsx'
    })
  ]
})
