/**
 * 下载远端模版
 *1）拼接下载地址
 *2）调用下载方法
 * */
const wrapLoading = require("./wrapLoading");
const path = require("path");
const config = require("../config/index");
module.exports = async function download(repo, tag, downlowdUtil, targetDir) {
  // 1）拼接下载地址
  const requestUrl = `${config?.CURRENT_GIT_USER}/${repo}${
    tag ? "#" + tag : ""
  }`;
  // 2）调用下载方法
  await wrapLoading(
    downlowdUtil,
    "远程模版下载中...",
    requestUrl,
    path.resolve(process.cwd(), targetDir)
  );
};
