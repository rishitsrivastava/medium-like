import { PrismaClient } from "@prisma/client/extension";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";


export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_Secret: string
    }
}>();

userRouter.post('/signup', async (c) => {
    // this route is for user signup
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL, 
    }).$extends(withAccelerate())
  
    const body = await c.req.json();
  
    try {
      const user = await prisma.user.create({
        data: {
          username: body.username,
          password: body.password,
        }
      })  
      const token = await sign({ id: user.id }, c.env.JWT_Secret);  
      console.log(token)
      return c.json({
        jwt: token
      })
    } catch(e) {
      c.status(401);
      return c.json({Error: e})
    }
  
  })
  
  userRouter.post('/signin', async (c) => {
    
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    
    
    try {
      const body = await c.req.json();
      const user = await prisma.user.findUnique({
        where: {
          username: body.username,
          password: body.password
        }
      });
    
      if(!user) {
  
        c.status(403);
        return c.json({error: "this user not found"});
      }
    
      const token = await sign({id: user.id}, c.env.JWT_Secret);
      return c.json({ jwt: token })
    
    } catch(e) {
      return c.json({Error: e})
    }
  })