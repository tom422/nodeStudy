const fs = require('fs')

// 出现路径拼接错误问题，是因为提供了 ./ 或 ../ 开头的相对路径
// 如果要解决这个问题，可以·直接提供一个完整的路径就行
// fs.readFile('./files/1.txt','utf-8',function(err,dataStr){
//     if (err) {
//         return console.log('读取文件失败！' + err.message)
//     }
//     console.log('读取文件成功!' + dataStr)
// })


// 移植性非常差，不利于维护
// fs.readFile('/workspaces/nodeStudy/day1/files/1.txt','utf-8',function(err,dataStr){
//     if (err) {
//         return console.log('读取文件失败！' + err.message)
//     }
//     console.log('读取文件成功!' + dataStr)
// })

// __dirname 标识当前文件所处的目录
// console.log(__dirname);
fs.readFile(__dirname + '/files/1.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败！' + err.message)
    }
    console.log('读取文件成功!' + dataStr)
})