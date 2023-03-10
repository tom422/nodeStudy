const express = require('express')

const app = express()

 
 
// 定义一个全局中间件的简化形式
app.use((req, res, next) => {
    // 获取到请求到达服务器的时间
    const time = Date.now()
    // 为 req 对象，挂载自定义属性，从而把时间共享给后面的所有的路由
    req.startTime = time
    next()
})

app.get('/', (req, res) => {
    console.log("调用了 / 这个路由");
    res.send('Home page.' + req.startTime)
})


app.get('/user', (req, res) => {
    console.log("调用了 /user 这个路由");
    res.send('User page.' + req.startTime)
})


app.listen(8080, () => {
    console.log('http://127.0.0.1:8080');
})