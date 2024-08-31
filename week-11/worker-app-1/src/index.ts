import { Hono } from 'hono'
import userRouter from './routes/userRouter'
import postRouter from './routes/postRouter'
import tagRouter from './routes/tagRouter'

const app = new Hono()

app.route("/user",userRouter)
app.route("/post,",postRouter);
app.route("/tags",tagRouter);

export default app
