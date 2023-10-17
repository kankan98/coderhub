// 1.导入app对象
const app = require("./app");
const { SERVER_PORT } = require("./config/server");
// 2.启动服务
app.listen(SERVER_PORT, () => {
  console.log("coderhub的服务启动成功~");
});
