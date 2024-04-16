import { Hono } from 'hono'
import { userRouter } from '../routes/user'
import { blogRouter } from '../routes/blog'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_Secret: string
  }
}>()


app.route('/api/v1/user', userRouter);

app.route('/api/v1/blog', blogRouter)


export default app



// app.use('api/v1/blog/*', async (c, next) => {
//   const jwt = c.req.header("authorization");
//   if(!jwt) {
//     c.status(401)
//     return c.json({ error: "unauthorized"})
//   }
//   const token = jwt.split(" ")[1];

//   const payload = verify(token, c.env.JWT_Secret);

//   if(!payload){
//     c.status(401)
//     return c.json({ error: "unauthorized"})
//   }
//   c.set('userID' , payload)
//   await next();
// })