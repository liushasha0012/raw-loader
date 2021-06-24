const path = require('path');
const fs = require('fs');
const {runLoaders} = require('loader-runner');

runLoaders(
  {
    resource: path.join(__dirname, './src/demo.txt'), // 要使用 loader 的源文件
    loaders: [path.join(__dirname, './src/raw-loader.js')], // 要用的 loader
    context: {
        minimize: true
    },
    readResource: fs.readFile.bind(fs) // 读取源文件的方法
  },
  (err, result) => {
    err ? console.log(err) : console.log(result);
  }
);