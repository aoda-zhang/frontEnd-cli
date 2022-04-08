#! /usr/bin/env node

// 命令执行（必选）
const program = require('commander')
// 特定图形绘制（可选）
const figlet = require('figlet')
// 特定样式命令行（可选，注意版本问题）
const chalk = require('chalk')
// 获取package.json 特定信息
const packageJson=require('../package.json')


program
  // 自定义定义命令和参数
  .command('create <项目名称>')
  .description('创建一个新的项目')
  // -f or --force 为强制创建，如果创建的目录存在则直接覆盖
  .option('-f, --force', '如果项目存在则会直接覆盖')
  .action((name, options) => {
    // 执行具体的项目创建动作
    require('../lib/index.js')(name, options)
  })
  
program
   // 配置版本号信息
  .version(`v${require('../package.json').version}`)
  .usage('<command> [option]')

// 帮助命令
  program
  .on('--help', () => {
    // 使用 figlet 绘制 脚手架Logo
    console.log('\r\n' + figlet.textSync('aoda', {
      font: 'Ghost',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 80,
      whitespaceBreak: true
    }));
    // 新增说明信息
    console.log(chalk.green('抱歉未能给您解决脚手架带来的问题，如需帮助，请联系我，电话 19102632826，base：成都'));
  })
  
// 解析用户执行的命令
program.parse(process.argv);
