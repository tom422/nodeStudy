const db = require('../db/index')

// 注册新用户的处理函数
exports.regUser = (req, res) => {
    const userInfo = req.body;
    console.log(userInfo);
    // 判断数据是否合法
    if (!userInfo.username || !userInfo.password) {
        return res.send({ status: 1, message: '用户名或密码不能为空！' })
    }

    // 定义 SQL 语句， 查询用户名是否被占用
    const sqlStr = 'select * from ev_users where username = ? '
    db.query(sqlStr,userInfo.username,(err,results)=>{
        // 执行 SQL 语句失败
        if (err) {
            return res.send({ status:1, message:err.message })
        }

        // 判断用户名是否被占用
        if (results.length > 0) {
            return res.send({ status:1, message:'用户名被占用，请更换其他用户名！'})
        }
        
        // TODO: 用户名可用，继续后续流程...
    })

    // res.send('reguser OK')
}

// 登录的处理函数

exports.login = (req, res) => {
    res.send('login OK')
}
