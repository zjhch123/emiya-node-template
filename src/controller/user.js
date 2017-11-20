const { User } = require('../model');

const fn_addUser = async (ctx, next) => {
  await next()
  const email = ctx.request.body.email
  const pwd = ctx.request.body.password
  const name = ctx.request.body.name
  const user = await User.create({
    email: email,
    password: pwd,
    name: name,
    gender: true,
    isNewRecord: true
  })
  ctx.body = {
    code: 200
  }
}

module.exports = {
  'POST /user': fn_addUser,
  'GET /user': fn_addUser, 
}
