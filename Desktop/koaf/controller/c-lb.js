const userModel = require('../lib/mysql.js')
const md5 = require('md5')
const checkNotLogin = require('../middlewares/check.js').checkNotLogin
const checkLogin = require('../middlewares/check.js').checkLogin


// render
exports.getlb = async ctx => {
    await ctx.render('lb', {
        session: ctx.session,
    })
}

//
// // refresh_lb
// exports.refresh_lb = async ctx => {
// // 返回的市一个用户的jason格式
// // 可以尝试 button的方式，也可以试试ejs的方式
// // name: "muzhi",
// // pos: 1,
// // score: 200,
// // 'lates_sub_date': 2019/5/5,
// // 'pos_changes': "10+"
// ctx.body = {
//
// }
// ;
// }

exports.refresh_lb = async ctx => {
    // contest_name = ctx.request.body
    let res
    // find kof
    await userModel.findLB_kof()
        .then(result => {
            res = result
        })

    await ctx.render('lb', {
        session: ctx.session,
        posts: res,
    })
}
