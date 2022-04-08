#! /usr/bin/env node

// 命令执行（必选）
const program = require("commander");
// 特定图形绘制（可选）
const figlet = require("figlet");
// 特定样式命令行（可选，注意版本问题）
const chalk = require("chalk");
// 自定义配置文件
const config = require("../config/index");

program
  // 自定义定义命令和参数
  .command("create <项目名称>")
  .description(config?.CLI_CREATE_HELP_MESSAGE)
  // -f or --force 为强制创建，如果创建的目录存在则直接覆盖
  .option("-f, --force", config?.CLI_FORCE_HELP_MESSAGE)
  .action((name, options) => {
    // 执行具体的项目创建动作
    require("../lib/index.js")(name, options);
  });

// program
//    // 配置版本号信息
//   .version(`v${require('../package.json').version}`)
//   .usage('<command> [option]')

// 帮助命令
program.on("--help", () => {
  // 使用 figlet 绘制 脚手架Logo
  console.log(
    "\r\n" +
      figlet.textSync(config?.CURRENT_CLI_LOGONAME, {
        font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      })
  );
  // 帮助说明提示
  console.log(chalk.green(config?.CLI_HELP_MESSAGE));
});

// 解析用户执行的命令
program.parse(process.argv);
