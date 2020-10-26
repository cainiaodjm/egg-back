/*
 * @Author: your name
 * @Date: 2020-10-09 13:31:08
 * @LastEditTime: 2020-10-26 15:01:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/app/service/user.js
 */
'use strict';
const Crypto = require('../common/util/crypto');
const Jwt = require('../common/util/jwt');
const Service = require('egg').Service;
class UserService extends Service {
  async create(username, password) {
    const _user = {
      username,
      password,
      openId: '',
      phone: '',
    };

    const user = await this.ctx.model.User.create(_user);

    return user;
  }
  async getUser(username) {
    const user = await this.ctx.model.User.findOne({
      where: {
        username,
      },
    });
    return user;
  }
  async register(username, password) {
    let user = await this.getUser(username);
    if (user) {
      return null;
    }
    user = await this.create(username, password);
    return user;
  }
  async login(username, password) {
    const user = await this.getUser(username);
    if (!user) {
      this.ctx.body = {
        code: 200,
        msg: '用户名不存在',
      };
      return;
    }
    const _password = new Crypto(user.password).decrypt();
    const token = new Jwt({
      user,
    }).generateToken();
    if (_password === password) {

      this.ctx.body = {
        code: 200,
        msg: '登录成功',
        data: {
          user,
          token,
        },
      };
      return;
    }
    this.ctx.body = {
      code: 200,
      msg: '密码错误',
    };
    return;


    // 获取查询到的user password 后面需要解密
    // const


  }
}
module.exports = UserService;
