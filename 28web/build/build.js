require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')
const fs = require('fs-extra')

var spinner = ora('building for production...')
spinner.start()

let startTime = new Date()
console.log('开始打包了：', startTime.toLocaleString())
rm(path.join(config.build.assetsRootTemp, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    // 俩种方式
    // 一种直接叠加，文件数量会越来越多，好处是访问基本能保证一直正常
    // 一种是清空替换，文件数量可控，坏处是访问有可能出现错误
    var copyTime = new Date()
    console.log('编译完成，准备从临时目录复制到dist目录，编译花费：', (copyTime.getTime() - startTime.getTime())/1000 + ' 秒')
    // 先清空原有文件
    fs.emptyDir(path.join(config.build.assetsRoot), err => {
      if (err) throw err
      // 再迁移所有文件过去
      fs.move(path.join(config.build.assetsRootTemp), path.join(config.build.assetsRoot), { overwrite: true }, err => {
        if (err) return console.error(err)
          let endTime = new Date()
          console.log('复制迁移完成，复制花费：', (endTime.getTime() - copyTime.getTime())/1000 + ' 秒')
          console.log('打包完成：', endTime.toLocaleString())
          console.log('整个打包花费：', (endTime.getTime() - startTime.getTime())/1000 + ' 秒')
          process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
          }) + '\n\n')
      
          console.log(chalk.cyan('  Build complete.\n'))
          console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening index.html over file:// won\'t work.\n'
        ))
      })
    
          // fse.copy(path.join(config.build.assetsRootTemp, config.build.assetsSubDirectory),path.join(config.build.assetsRoot, config.build.assetsSubDirectory))
          
    })
    
    
  })
})
