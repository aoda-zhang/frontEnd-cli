const { getRepoList } = require("./http");
const inquirer = require("inquirer");
const wrapLoading = require("./wrapLoading");
const config = require("../config/index");
module.exports = async function getRepo() {
  const repoList = await wrapLoading(
    getRepoList,
    config?.CLI_INIT_HELP_MESSAGE
  );
  if (!repoList) return;
  // 过滤我们需要的模板名称
  const repos = repoList.map((item) => item?.name);
  // 2）用户选择自己新下载的模板名称
  const { repo } = await inquirer.prompt({
    name: "repo",
    type: "list",
    // 提供用户选择的模板目录
    // choices: repos,
    choices: repos,
    message: config?.CLI_CREATE_CHOICE_HELP_MESSAGE,
  });

  // 3）return 用户选择的名称
  return repo;
};
