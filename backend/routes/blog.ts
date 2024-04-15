import { Bindings } from 'hono/types';
import { Hono } from "hono";


export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_Secret: string
    }
}>();


blogRouter.post('/', (c) => {
    // this route is for posting a new blog
    return c.text('hello');
  })
  
blogRouter.put('/blog', (c) => {
    // this route is for updating any blog
    return c.text('hello');
  })
  
blogRouter.get('/:id', (c) => {
    // this route is for getting back a blog with a specific id
    return c.text("blogs with a particular id")
  })
  
blogRouter.get('/bulk', (c) => {
    // this route is for getting back all the routes
    return c.text("blogs")
  })
  
// blogRouter.get('/', (c) => {
//     // this is a only / route which tells us that if the server is running fine or not
//     return c.text("jbofgj")
//   })
  