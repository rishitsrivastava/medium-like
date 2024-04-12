import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, verify, sign } from 'hono/jwt'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_Secret: string
  }
}>()

app.post('/api/v1/user/signup', async (c) => {
  // this route is for user signup
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL, 
  }).$extends(withAccelerate())

  const body = await c.req.json();

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    }
  })

  const token = sign({ id: user.id }, c.env.JWT_Secret
  );

  return c.json({
    jwt: token
  })

})

app.post('/api/v1/user/signin', async (c) => {
  
  const prisma = new PrismaClient({}).$extends(withAccelerate());
  
  const body = await c.req.json();

  const user = await prisma.user.findUnique({
    where: {
      email: body.email
    }
  });

  if(!user) {
    c.status(403);
    return c.json({error: "this user not found"});
  }

  const token = sign({id: user.id}, c.env.JWT_Secret);

  return c.json({jwt: token})

})

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
