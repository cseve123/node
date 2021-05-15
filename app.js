const Koa = require('koa')
// const Router = require('koa-router')
// const requireDirectory = require('require-directory')

// 使用require-directory自动导入
// const book = require('./api/v1/book')
// const classic = require('./api/v1/classic')

// 拆分后的主模块
const InitManger = require('./core/init')

// 应用程序对象 中间件（本质是一个函数）
const app = new Koa()
// const router = new Router()
// 发送HTTP KOA接收HTTP
// function test () {
//     console.log('dddd')
// }

// 注册才能成为中间件 use就是注册
// app.use(test)
/**
 * ctx 上下文
 * next 下一个中间件 返回promise
 * 语法上必须是async await
 */
// app.use(async (ctx, next) => {
//     console.log(1)
//     const a = await next()
//     // 使用洋葱模型await 之后才得到r
//     const r = ctx.r
//     console.log(a)
//     console.log(2)
// })
// app.use(async (ctx, next) => {
//     console.log(3)
//     await next()
//     console.log(4)
//     ctx.r = '12'
//     // return 'acb'
// })
// 按语句执行 1 next 3 next 4 2

// http请求
// app.use((ctx, next) => {
//     console.log(ctx.path)
//     console.log(ctx.method)
//     if (ctx.path === '/class/list' && ctx.method === 'GET') {
//         ctx.body = {key: 'clssList'}
//     }
// })
// router.get('/class/list', (ctx, next) => {
//     ctx.body = {key: 'router-classList'}

// })
// REST
// router.post()
// router.del()
// router.put()

// 数据类型进行划分 编码的逻辑
// 兼容客户端不升级的涉及到要同时维护多个版本
// 可以写在一个里，也可以按版本分开
// 开闭原则 修改关闭 扩展打开
// 未避免导入循环每个模块自己应用router
 
// app.use(router.routes())
// app.use(book.routes())
// app.use(classic.routes())
// 使用自动导入路径和过滤函数 简化的方式只有思考了才有提高
// requireDirectory(module, './api', {
//     visit: whenLoadMoule
// })
// function whenLoadMoule (obj) {
//     if (obj instanceof Router) {
//         app.use(obj.routes())
//     }
// }
// 分文件加让职能单一注入模块
InitManger.initCore(app)
app.listen(3000)


// nodemon 自动重启 npm i -g nodemon