const app = require("../app");
const { Name_OR_PASSWORD_IS_REQUIRED, Name_IS_ALREADY_EXISTS } = require("../config/error");

app.on("error", (error, ctx) => {
  let code = 0;
  let msg = "";
  switch (error) {
    case Name_OR_PASSWORD_IS_REQUIRED:
      code = -1001;
      msg = "用户名或密码不能为空~";
      break;
    case Name_IS_ALREADY_EXISTS:
      code = -1002;
      msg = "用户名已被占用~";
      break;
  }
  ctx.body = {
    code,
    msg,
  };
});
