// 导入数据库操作模块
const db = require('../db/index')
// 导入 bcryptjs 这个包
const bcryptjs = require('bcryptjs')
// 用这个包来生成 Token 字符串
const jwt = require('jsonwebtoken')
const config =  require('../config')


// 注册新用户的处理函数
exports.regUser = (req, res) => {
    const userInfo = req.body;
    // console.log(userInfo);
    // 判断数据是否合法
    if (!userInfo.username || !userInfo.password) {
        return res.cc('用户名或密码不能为空！') 
        // res.send({ status: 1, message: '用户名或密码不能为空！' })
    }

    // 定义 SQL 语句， 查询用户名是否被占用
    const sqlStr = 'select * from ev_users where username = ? '
    db.query(sqlStr,userInfo.username,(err,results)=>{
        // 执行 SQL 语句失败
        // if (err) {
        //     // return res.send({ status:1, message:err.message })
        //     return res.cc(err)
        // }

        // 判断用户名是否被占用
        if (results.length > 0) {
            // return res.send({ status:1, message:'用户名被占用，请更换其他用户名！'})
            return res.cc('用户名被占用，请更换其他用户名！')
        }
        
        // 调用 bcrypt.hashSync() 对密码进行加密
        // console.log(userInfo);
        userInfo.password = bcryptjs.hashSync(userInfo.password,10)
        // console.log(userInfo);
        
        // 定义插入新用户的 SQL 语句
        const sql = 'insert into ev_users set ?'
        // 调用 db.query() 执行 sql 语句
        db.query(sql, { username: userInfo.username, password: userInfo.password},(err, results) => {
            // 执行 SQL 语句失败
            // if (err) return res.send({ status: 1, message: err.message })
            if (err) return res.cc(err)
            // SQL 语句执行成功，但影响行数不为 1
            if (results.affectedRows !== 1) {
            //   return res.send({ status: 1, message: '注册用户失败，请稍后再试！' })
                return res.cc('注册用户失败，请稍后再试！')
            }
            // 注册成功
            // res.send({ status: 0, message: '注册成功！' })
            return res.cc('注册成功！', 0)
          })
    })

    // res.send('reguser OK')
}

// 登录的处理函数

exports.login = (req, res) => {

    // 接收表单的数据
    const userinfo = req.body
    // 定义 SQL 语句失败
    const sql = `select * from ev_users where username=?`
    // 执行 SQL 语句 根据用户名查询用户信息
    db.query(sql, userinfo.username, function (err, results) {
        // 执行 SQL 语句失败
        if (err) return res.cc(err)
        // 执行 SQL 语句成功，但是查询到数据条数不等于 1
        if (results.length !== 1) return res.cc('账号为空 登录失败！')
        // TODO：判断用户输入的登录密码是否和数据库中的密码一致
        const compareResult = bcryptjs.compareSync(userinfo.password,results[0].password)
        if (!compareResult) return res.cc('登录失败！')

        // TODO:  在服务端生成 token 字符串
        const user = { ...results[0], password:'',user_pic:'' }

        const tokenStr = jwt.sign(user, config.jwtSecretKey,  { expiresIn:config.expiresIn })
        res.send({
            status: 0,
            message: '登录成功！',
            // 为了方便客户端使用 Token，在服务器端直接拼接上 Bearer 的前缀
            token: 'Bearer ' + tokenStr,
          })
          

      })
      
   
}
