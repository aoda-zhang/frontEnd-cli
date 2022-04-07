/**
 * 具体的项目创建处理逻辑
*/
const { getRepoList } = require('./http')
const ora = require('ora')
const inquirer = require('inquirer')
// const chalk = require('chalk')

/**请求动画加载 */ 
async function wrapLoading(fn, message, ...args) {
  // 使用 ora 初始化，传入提示信息 message
  const spinner = ora(message);
  // 开始加载动画
  spinner.start();

  try {
    // 执行传入方法 fn
    const result = await fn(...args);
    spinner.succeed();
    return result; 
  } catch (error) {
    spinner.fail('模板获取失败, 请稍后重试 ...')
  } 
}

class Generator {
  constructor (name, targetDir){
    // 目录名称
    this.name = name;
    // 创建位置
    this.targetDir = targetDir;
  }

  /** 获取用户选择的模板*/ 
  async getRepo() {
    const repoList = await wrapLoading(getRepoList, '脚手架模版获取中...');
    if (!repoList) return;
    // 过滤我们需要的模板名称
    const repos = repoList.map(item => item.name);
    // 2）用户选择自己新下载的模板名称
    const { repo } = await inquirer.prompt({
      name: 'repo',
      type: 'list',
      choices: repos,
      message: '您的项目主要基于那个模板来创建'
    })

    // 3）return 用户选择的名称
    return repo;
  }
/**核心创建逻辑 */   
  // 1）获取模板名称
  // 2）获取 tag 名称
  // 3）下载模板到模板目录
  async create(){
// 1）获取模板名称
const repo = await this.getRepo()
    console.log('您当前选择的模版是:'+repo)
  }
}

module.exports = Generator;
