const { Name_OR_PASSWORD_IS_REQUIRED, Name_IS_ALREADY_EXISTS } = require("../config/error");
const userService = require("../service/user.service");

const verifyUser = async (ctx, next) => {
  // 2.验证客户端传递过来的user是否可以保存到数据库中
  // 2.1 验证用户名是否存在
  const { name, password } = ctx.request.body;
  if (!name || !password) {
    return ctx.app.emit("error", Name_OR_PASSWORD_IS_REQUIRED, ctx);
  }
  // 2.2 判断name是否已经被占用
  const isNameTaken = await userService.checkNameExists(name);
  if (isNameTaken) {
    return ctx.app.emit("error", Name_IS_ALREADY_EXISTS, ctx);
  }
  await next();
};

module.exports = verifyUser;
