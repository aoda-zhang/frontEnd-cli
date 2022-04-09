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
  return axios.get(config?.CLI_GETREPO_URL);
}
module.exports = {
  getRepoList,
};
