import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, verify, sign } from 'hono/jwt'
import { userRouter } from '../routes/user'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_Secret: string
  }
}>()

app.use('api/v1/blog/*', async (c, next) => {
  const jwt = c.req.header("authorization");
  if(!jwt) {
    c.status(401)
    return c.json({ error: "unauthorized"})
  }
  const token = jwt.split(" ")[1];

  const payload = verify(token, c.env.JWT_Secret);

  if(!payload){
    c.status(401)
    return c.json({ error: "unauthorized"})
  }
  c.set('userID' , payload)
  await next();
})

app.route('/api/v1/user', userRouter);


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

app.get('/', (c) => {
  // this is a only / route which tells us that if the server is running fine or not
  return c.text("jbofgj")
})


export default app
