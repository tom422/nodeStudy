const fs = require('fs')
const path = require('path')

// 注意： ../会抵消前面的路径
// const pathStr = path.join('/a','/b/c','../','./d','e')
// console.log(pathStr);  // \a\b\d\e

// fs.readFile(__dirname + '/files/1.txt')

fs.readFile(path.join(__dirname, '/files/1.txt'), 'utf-8', function (err, dataStr) {

    if (err) {
        return console.log('去取文件失败！' + err.message);

    }

    console.log('读取文件成功!' + dataStr);
     
})