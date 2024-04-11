import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
  }
}>()

app.post('/api/v1/user/signup', async (c) => {
  // this route is for user signup
  const dbUrl = c.env.DATABASE_URL
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL, 
  }).$extends(withAccelerate())

  const body = await c.req.json();

  await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    }
  })
  return c.text('hello');
})

app.post('/api/v1/user/signin', (c) => {
  // this route is for user signin
  return c.text('hello');
})
9873816182

app.post('/api/v1/blog', (c) => {
  // this route is for posting a new blog
  return c.text('hello');
})

app.put('/api/v1/blog', (c) => {
  // this route is for updating any blog
  return c.text('hello');
})

app.get('/api/v1/blog/:id', (c) => {
  // this route is for getting back a blog with a specific id
  return c.text("blogs with a particular id")
})

app.get('/api/v1/blog/bulk', (c) => {
  // this route is for getting back all the routes
  return c.text("blogs")
})

export default app
