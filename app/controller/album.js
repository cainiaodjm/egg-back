/*
 * @Author: your name
 * @Date: 2020-10-29 11:58:15
 * @LastEditTime: 2020-10-30 15:43:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/app/controller/album.js
 */
'use strict';

const Controller = require('egg').Controller;
const Jwt = require('../common/util/jwt');

class Album extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async create() {
    // 创建相册
    const { ctx, service } = this;
    const userInfo = await Jwt.getTokenInfo(ctx);
    try {
      this.ctx.validate({
        name: {
          type: 'string',
        },
      });
      const userId = userInfo.data.user.id;
      const params = { ...ctx.request.body };
      const isExist = await service.album.isExistAlbum(params.name);
      if (isExist) {
        ctx.body = {
          code: 200,
          msg: '相册已存在',
        };
        return;
      }
      const album = await service.album.createAlbum(userId, params.name);
      ctx.body = {
        code: 200,
        msg: '创建成功',
        data: album,
      };
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
  async update() {
    //
  }
}

module.exports = Album;
