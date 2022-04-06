#! /usr/bin/env node

const program = require('commander')

program
  // 自定义定义命令和参数
  .command('创建前端项目 <app-name>')
  .description('创建一个新的项目')
  // -f or --force 为强制创建，如果创建的目录存在则直接覆盖
  .option('-f, --force', '如果项目存在则会直接覆盖')
  .action((name, options) => {
    // 打印执行结果
    console.log('name:',name,'options:',options)
  })
  
program
   // 配置版本号信息
  .version(`v${require('../package.json').version}`)
  .usage('<command> [option]')
  
// 解析用户执行命令传入参数
program.parse(process.argv);
