const express = require('express')
const router = express.Router()

// 这里挂载对应的路由
router.get('/get',(req,res)=>{
    // 通过 req.query 获取客户端的通过查询的字符串，发送到服务器的数据
    const query = req.query
    // 调用 res.send() 方法, 向客户端相应处理的结果
    res.send({
        status:0,
        msg:'GET 请求成功', // 状态的描述
        data:query // 需要响应给客户端的数据
    })
})

// 定义 POST 接口
router.post('/post',(req,res)=>{
    // 通过 req.body 获取请求体中包含的 url-encoded 格式数据
    const body = req.body
    // 调用 res.send() 方法, 向客户端相应处理的结果
    res.send({
        status:0,
        msg:'POST 请求成功', // 状态的描述
        data:body // 需要响应给客户端的数据
    })
})

// 定义 DELETE 接口
router.delete('/delete',(req,res)=>{
     
    res.send({
        status:0,
        msg:'DELETE 请求成功',
        
    })
})

module.exports = router