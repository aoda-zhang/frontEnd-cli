module.exports = {
  // TODO 完善提示信息
  // TODO 完善远端文件过滤
  // TODO 完善流程逻辑，询问用户 具体的方向 node后端，web前端
  // TODO config文件抽离
  // TODO 完善工程化（请求封装，proxy代理设置，路由配置，webpack扩展配置，多语言扩展）
  /**脚手架当前支持创建的项目技术 */
  CURRENT_SUPPORT_KEY: ["vue-template", "vue3.0-template"],
  /**当前采用的git用户账号*/
  CURRENT_GIT_USER: "aodagit",
  /**当前生成的cli自定义logo名*/
  CURRENT_CLI_LOGONAME: "aoda",
  /**cli帮助提示信息*/
  CLI_HELP_MESSAGE:
    "抱歉未能给您解决脚手架带来的问题，如需帮助，请联系我，电话 19102632826，base：成都",
  /**cli创建提示信息*/
  CLI_CREATE_HELP_MESSAGE: "创建一个新的项目",
  /**cli强行覆盖提示信息*/
  CLI_FORCE_HELP_MESSAGE: "如果项目存在则会直接覆盖",
  /**项目创建成功后的提示*/
  CLI_CREATE_SUCCESS_HELP_MESSAGE: "如果项目存在则会直接覆盖",
};
