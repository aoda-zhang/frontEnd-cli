/**
 * 具体的项目创建处理逻辑
*/
const util = require('util')
const chalk=require('chalk')
const downloadGitRepo = require('download-git-repo')
const getRepo=require('./getRepo')
const getTag=require('./getTag')
const download=require('./download')
class Generator {
  constructor (name, targetDir){
    // 目录名称
    this.name = name;
    // 创建位置
    this.targetDir = targetDir;
    // 对 download-git-repo 进行 promise 化改造
    this.downloadGitRepo = util.promisify(downloadGitRepo);
  }

  /**
 * 核心创建逻辑
 *1）获取模板名称
 *2）获取 tag 名称
 *3）下载模板到模板目录
 * */
async create(){
  // 1）获取模板名称
  const repo = await getRepo()
  // 2) 获取 tag 名称
  const tag = await getTag(repo)
  // 3）下载模板到模板目录
  await download(repo, tag,this.downloadGitRepo,this.targetDir)

  // 4）模板使用提示
  console.log(`\r\n 项目已创建成功 ${chalk.cyan(this.name)}`)
  console.log(`\r\n  cd ${chalk.cyan(this.name)}`)
  console.log('  npm i\r\n')
  console.log('  npm run dev\r\n')
}

}

module.exports = Generator;
