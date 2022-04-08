/**
 * @description: 项目创建入口
 */
const path = require("path");
const fs = require("fs-extra");
const inquirer = require("inquirer");
const chalk = require("chalk");
const Generator = require("./generator");
const config = require("../config/index");

module.exports = async function (name, options) {
  // 当前命令行选择的目录
  const cwd = process.cwd();
  // 需要创建的目录地址
  const targetAir = path.join(cwd, name);
  // 目录是否已经存在？
  if (fs.existsSync(targetAir)) {
    // 是否为强制创建？
    if (options.force) {
      await fs.remove(targetAir);
    } else {
      // 询问用户是否确定要覆盖
      let { action } = await inquirer.prompt([
        {
          name: "action",
          type: "list",
          message: config?.CLI_FORCE_CHOICE_HELP_MESSAGE,
          choices: [
            {
              name: "Overwrite",
              value: "overwrite",
            },
            {
              name: "Cancel",
              value: false,
            },
          ],
        },
      ]);

      if (!action) {
        return;
      } else if (action === "overwrite") {
        // 移除已存在的目录
        console.log(
          `\r\n  ${chalk.red(config?.CLI_FORCE_SUCCESS_HELP_MESSAGE)} `
        );
        await fs.remove(targetAir);
      }
    }
  }

  // 创建项目
  const generator = new Generator(name, targetAir);
  generator.create();
};
