// 1. 导入 mysql 模块
const mysql = require('mysql')
// 2. 建立与 MySQL 数据库的连接关系
const db = mysql.createPool({
    host: '127.0.0.1', // 数据库的 ip 地址
    user: 'root', // 登录数据库的账号
    password: '123456', // 登录数据库的密码
    database: 'db1' // 指定要操作那个数据库
})

// 测试 mysql 模块能否正常工作
/* db.query('select 1',(err,results)=>{
    // mysql
    if(err) return console.log(err.message);
    // 能够成功的执行的 sql 语句
    console.log(results);
    
}) */


/* // 查询 users 表中所有数据
const sqlStr = 'select * from tb_user'
db.query(sqlStr,(err,results)=>{
    // 查询数据失败
    if(err) return console.log(err.message);
    // 查询数据成功
    console.log(results);
}) */

/* // 向 users 表中，新增一条数据，其中 username 的值为 Spider-Man, password 的值为 pcc123
const user = { username:'Spider-Man', password:'pcc123' }
// 定义待执行的 SQL 语句
const sqlStr = 'insert into tb_user (username, password) values(?,?)'
// 执行 SQL 语句
db.query(sqlStr,[user.username,user.password],(err,results)=>{
    // 执行 SQL 语句 失败了
    if (err) return console.log(err.message);
    // 成功了
    // 注意：如果执行的是 insert into 插入入语句， 则 results 是一个对象
    // 可以通过 affectedRows 属性来判断是否插入数据成功
    if (results.affectedRows === 1) {
        console.log('插入数据成功！');
        
    }
    
}) */

/* // 演示插入数据的便捷方式
const user = { username:'Spider-Man2', password:'pcc4321' }
// 定义待执行的 SQL 语句
const sqlStr = 'insert into tb_user set ?'
// 执行 SQL 语句
db.query(sqlStr,user,(err,results)=>{
    // 执行 SQL 语句 失败了
    if (err) return console.log(err.message);
    // 成功了
    // 注意：如果执行的是 insert into 插入入语句， 则 results 是一个对象
    // 可以通过 affectedRows 属性来判断是否插入数据成功
    if (results.affectedRows === 1) {
        console.log('插入数据成功！');
        
    }
    
}) */


// 演示更新如何更新用户数据
/* const user = { id: 4, username: 'aaa', password: '0000' }
// 定义待执行的 SQL 语句
const sqlStr = 'update tb_user set username=?,password=? where id=? '
// 执行 SQL 语句
db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
    if (err) return console.log(err.message);
    // 注意： 执行的是 update 语句之后， 执行的结果， 也是一个对象 可以通过 affectedRows 属性来判断是否更新成功
    if (results.affectedRows === 1) {
        console.log('更新数据成功！');
    }

})
 */


// // 演示更新数据的便捷方式
// const user = { id: 4, username: 'aaaa', password: '000000' }
// // 定义待执行的 SQL 语句
// const sqlStr = 'update tb_user set ? where id=? '
// // 执行 SQL 语句
// db.query(sqlStr, [user, user.id], (err, results) => {
//     if (err) return console.log(err.message);
//     // 注意： 执行的是 update 语句之后， 执行的结果， 也是一个对象 可以通过 affectedRows 属性来判断是否更新成功
//     if (results.affectedRows === 1) {
//         console.log('更新数据成功！');
//     }

// })


// 删除 id 为 5 的 用户
/* const sqlStr = 'delete from tb_user where id=?'
db.query(sqlStr, 4, (err, results) => {
    if (err) return console.log(err.message);
    // 注意： 执行的是 delete 语句之后， 执行的结果， 也是一个对象 也会包含 affectedRows 属性来判断是否更新成功
    if (results.affectedRows === 1) {
        console.log('删除数据成功！');
    }

})
 */
// 标记删除
const sqlStr = 'update users set status=? where id=?'
db.query(sqlStr, [1, 6], (err, results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) {
        console.log('标记删除成功')
    }
})
