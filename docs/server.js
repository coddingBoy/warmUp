const Koa = require('koa')
const app = new Koa()

// app.use(async ctx => {
//     ctx.body = 'Hello World'
// })

app.use(async ctx => {
    console.log(ctx, 'ctx')
    if (ctx.request.url === '/index.html') {
        ctx.body = 'jianjie'
    }
    else {
        ctx.body = 'hello world'
    }
})

app.listen(3000)
