// 获取远端模版文件
const axios = require("axios");
const config = require("../config/index");

axios.interceptors.response.use((res) => {
  return res.data;
});

/**
 * 获取特定用户码云账户中的所有公开模板列表
 * @returns Promise
 */
async function getRepoList() {
  return axios.get(
    `https://gitee.com/api/v5/orgs/${config?.CURRENT_GIT_USER}/repos`
  );
}

/**
 * 获取版本信息
 * @param {string} repo 模板名称
 * @returns Promise
 */
async function getTagList(repo) {
  return axios.get(
    `https://gitee.com/api/v5/repos/${config?.CURRENT_GIT_USER}/${repo}/tags`
  );
}
module.exports = {
  getRepoList,
  getTagList,
};
