// 1. 导入 fs 模块
const fs = require('fs')

// 2. 调用 fs.readFile() 读取文件内容
fs.readFile('./素材/成绩.txt','utf-8',function(err,dataStr){
    // 3.判断是否读取成功
    if (err) {
        return console.log('读取文件失败！' + err.message)
    }

    console.log('读取文件成功！' + dataStr);
})