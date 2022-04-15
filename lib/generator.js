/**
 * 具体的项目创建处理逻辑
 */
const util = require("util");
const chalk = require("chalk");
const downloadGitRepo = require("download-git-repo");
const getRepo = require("./getRepo");
const download = require("./download");
const config = require("../config/index");
class Generator {
  constructor(name, targetDir) {
    // 目录名称
    this.name = name;
    // 创建位置
    this.targetDir = targetDir;
    // 对 download-git-repo 进行 promise 化改造
    this.downloadGitRepo = util.promisify(downloadGitRepo);
  }

  /**
   * 核心创建逻辑
   * */
  async create() {
    const repo = await getRepo();
    download(repo, this.downloadGitRepo, this.targetDir)
      .then(() => {
        console.log(
          `\r\n 前端项目  ${chalk.cyan(this.name)} ${
            config?.CLI_CREATE_SUCCESS_HELP_MESSAGE
          }`
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

module.exports = Generator;
