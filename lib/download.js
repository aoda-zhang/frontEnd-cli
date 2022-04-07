/**
 * 下载远端模版
 *1）拼接下载地址
 *2）调用下载方法
 * */
const wrapLoading = require("./wrapLoading");
const path = require("path");
module.exports = async function download(repo, tag,downlowdUtil,targetDir) {
  // 1）拼接下载地址
  const requestUrl = `zhurong-cli/${repo}${tag ? "#" + tag : ""}`;
  // 2）调用下载方法
  await wrapLoading(
    downlowdUtil, // 远程下载方法
    "远程模版下载中...",
    requestUrl, // 远程下载地址
    path.resolve(process.cwd(), targetDir)
  ); // 参数2: 创建位置
};
