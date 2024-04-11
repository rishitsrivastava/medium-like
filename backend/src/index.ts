import { Hono } from 'hono'

const app = new Hono()

app.post('/api/v1/user/signup', (c) => {
  // this route is for user signup
  return c.text('hello');
})

app.post('/api/v1/user/signin', (c) => {
  // this route is for user signin
  return c.text('hello');
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
