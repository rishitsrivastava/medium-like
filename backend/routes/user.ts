
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signupInput, signinInput } from '@rishit1618/common';

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
    const {success} = signupInput.safeParse(body)
    if(!success) {
      c.status(411)
      return c.json({
        message: "Inputs are wrong"
      })
    }
    
    try {

      const d = {data: {
        username: body.username,
        name: body.name,
        password: body.password,
      }}

      const user = await prisma.user.create(d)  
      const token = await sign({ id: user.id }, c.env.JWT_Secret);  

      return c.text(token)
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
      const {success} = signupInput.safeParse(body)
      if(!success) {
        c.status(411)
        return c.json({
          message: "Inputs are wrong"
        })
      }
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

