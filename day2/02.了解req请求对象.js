const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
    // req.url 是客户端请求的 URL 地址
    const url = req.url
    // req.method 是客户端请求的 method 类型
    const method = req.method
    const str = `Your request url is ${url}, and request method is ${method}`
    console.log(str);
    // 调用 res.end() 方法，向客户端响应一些内容
    res.end(str)
})
server.listen(8080,()=>{
    console.log('server running at http://127.0.0.1:8080');
})