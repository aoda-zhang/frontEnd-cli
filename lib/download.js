/**
 * 下载远端模版
 * */
const wrapLoading = require("./wrapLoading");
const path = require("path");
const config = require("../config/index");
module.exports = async function download(repo, downlowdUtil, targetDir) {
  const requestUrl = `${config?.CURRENT_GIT_USER}/${repo}`;
  await wrapLoading(
    downlowdUtil,
    config?.CLI_DOWNLOADING_HELP_MESSAGE,
    requestUrl,
    path.resolve(process.cwd(), targetDir)
  );
};
