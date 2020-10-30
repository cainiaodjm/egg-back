/*
 * @Author: your name
 * @Date: 2020-10-09 10:43:51
 * @LastEditTime: 2020-10-29 17:36:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/app/controller/user.js
 */
'use strict';
const Controller = require('egg').Controller;
const Crypto = require('../common/util/crypto');
function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UserController extends Controller {
  async login() {
    const { ctx, service } = this;

    try {
      this.ctx.validate({
        username: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
      });
      const params = { ...ctx.request.body };
      await service.user.login(params.username, params.password);

    } catch (error) {

      ctx.logger.warn(error.errors);
      ctx.body = {
        code: 200,
        msg: error.errors.map(error => {
          return `${error.field} ${error.message}`;
        }),
        success: false,
      };
      return;
    }
  }
  async register() {
    const ctx = this.ctx;
    try {
      ctx.validate({
        username: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
      });
      const params = { ...ctx.request.body };
      console.log(params);
      const password = new Crypto(params.password).encrypt();
      const user = await this.service.user.register(params.username, password);
      if (!user) {
        ctx.body = {
          code: 200,
          msg: '该用户已被注册',
        };
        return;
      }
      ctx.body = {
        code: 200,
        msg: '注册成功',
        data: user,
      };
      return;
    } catch (error) {
      console.log(error);
      ctx.logger.warn(error.errors);
      ctx.body = {
        code: 200,
        msg: error.errors.map(error => {
          return `${error.field} ${error.message}`;
        }),
        success: false,
      };
      return;
    }
  }
  async index() {
    const ctx = this.ctx;
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    ctx.body = await ctx.model.User.findAll(query);
  }

  async show() {
    // console.log(ctx.model.User)
    const ctx = this.ctx;
    const user = await ctx.model.User.findByPk(toInt(ctx.params.id));
    ctx.body = user;
  }

  async create() {
    const { ctx, service } = this;

    // const createRule = {
    //   username: { type: 'string' },
    //   password: { type: 'string' },
    // };
    //   // 校验参数
    // ctx.validate(createRule);
    // 组装参数
    const req = ctx.request.body;
    // 调用 Service 进行业务处理
    const res = await service.user.create(req);
    // 设置响应内容和响应状态码
    ctx.body = res;
    ctx.status = 201;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    const { username, password, phone } = ctx.request.body;
    await user.update({ username, password, phone });
    ctx.body = user;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    await user.destroy();
    ctx.status = 200;
  }
}

module.exports = UserController;
