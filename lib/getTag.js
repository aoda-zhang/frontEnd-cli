/**
 * 核心创建逻辑
 *1）基于 repo 结果，远程拉取对应的 tag 列表
 *2）用户选择自己需要下载的 tag
 *3）return 用户选择的 tag
 * */
const wrapLoading = require("./wrapLoading");
const { getTagList } = require("./http");
const inquirer=require('inquirer')
module.exports = async function getTag(repo) {
  // 1）基于 repo 结果，远程拉取对应的 tag 列表
  const tags = await wrapLoading(getTagList, "获取版本号", repo);
  if (!tags) return;
  // 过滤我们需要的 tag 名称
  const tagsList = tags.map((item) => item.name);
  // 2）用户选择自己需要下载的 tag
  const { tag } = await inquirer.prompt({
    name: "tag",
    type: "list",
    choices: tagsList,
    message: "请选择一个版本来创建项目",
  });
  // 3）return 用户选择的 tag
  return tag;
};
