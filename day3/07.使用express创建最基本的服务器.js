// 1. 导入 express 
const express = require('express')
// 2. 创建 web 服务器
const app = express()


// 4. 监听客户端的 GET 和 POST 请求，并向客户端响应具体的内容
app.get('/user', (req, res) => {
    // 调用 express 提供的 res.send() 方法， 向客户端响应一个 JSON 对象
    res.send({ name: 'zs', age: 20, gender: '男' })
})
app.post('/user', (req, res) => {
    // 调用 express 提供的 res.send() 方法， 向客户端响应一个 JSON 对象
    res.send('请求成功')
})


// 3. 启动 web 服务器
app.listen(8080, () => {
    console.log('express server runing at http:/127.0.0.1:8080');
})