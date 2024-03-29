const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const userRouter = require("../router/user.router");
// 1.创建app对象
const app = new Koa();

// 2.对app使用中间件
app.use(bodyParser());
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

// 3.导出app
module.exports = app;
