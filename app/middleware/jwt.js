/*
 * @Author: your name
 * @Date: 2020-10-20 17:54:17
 * @LastEditTime: 2020-10-29 16:36:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/app/middleware/jwt.js
 */
'use strict';
const Jwt = require('../common/util/jwt');
// eslint-disable-next-line no-unused-vars
module.exports = options => {
  return async function jwt(ctx, next) {

    const authorization = ctx.request.header.authorization;
    if (!authorization) {
      ctx.status = 401;
      ctx.body = {
        code: 200,
        msg: '请传入token',
      };
      return;
    }
    const token = authorization.split(' ')[1];
    // const token = authorization;
    const verifyRes = new Jwt(token).verifyToken();
    if (!verifyRes.success) {
      ctx.status = 401;
      ctx.body = {
        code: 200,
        msg: verifyRes.message,
      };
      return;
    }
    // if()
    await next();
  };
};
