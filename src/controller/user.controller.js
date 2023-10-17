const userService = require("../service/user.service");

class UserController {
  async create(ctx, next) {
    // 1.获取请求体中的数据
    const user = ctx.request.body;
    // 2.验证客户端传递过来的user是否可以保存到数据库中
    // 2.1 验证用户名是否存在
    const { name, password } = user;
    if (!name || !password) {
      ctx.body = {
        code: -1001,
        message: "用户名或密码不能为空~",
        data: null,
      };
      return;
    }
    // 2.将数据保存到数据库
    const result = await userService.create(user);
    // 3.查看存储的结果，是否成功
    ctx.body = {
      message: "创建用户成功~",
      data: result,
    };
  }
}

module.exports = new UserController();
