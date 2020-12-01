const Koa = require('koa')

const app = new Koa()

app.use(async (ctx) => {
  ctx.body = { status: "running" }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`running on port ${PORT}`))
