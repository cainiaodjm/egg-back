/*
 * @Author: your name
 * @Date: 2020-10-09 10:43:51
 * @LastEditTime: 2020-10-09 17:37:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/app/controller/user.js
 */
'use strict';
const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UserController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    ctx.body = await ctx.model.User.findAll(query);
  }

  async show() {
    // console.log(ctx.model.User)
    const ctx = this.ctx;
    const user = await ctx.model.User.findByPk(toInt(ctx.params.id));
    console.log(user);
    ctx.body = user;
  }

  async create() {
    const ctx = this.ctx;
    const { username, password, phone } = ctx.request.body;
    const user = await ctx.model.User.create({ username, password, phone });
    ctx.status = 201;
    ctx.body = user;
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
