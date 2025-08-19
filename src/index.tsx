import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/a', (c) => {
  return c.render(
    <>
      <h1>Hello!</h1>
      <img src="/foo/hono-kun-logo.png" width="100" />
      <img src="/foo/favicon.ico" width="100" />
    </>
  )
})

app.get('/b', (c) => {
  return c.render(
    <>
      <h1>Hello!</h1>
      <a href="/foo.bar/static/foo.txt">foo.txt</a>
      <a href="/fooxbar/static/foo.txt">foo.txt</a>
    </>
  )
})

export default app
