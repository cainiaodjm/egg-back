/*
 * @Author: your name
 * @Date: 2020-10-26 17:06:58
 * @LastEditTime: 2020-10-29 10:59:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/app/controller/qiniu.js
 */
'use strict';

const Controller = require('egg').Controller;
const Qiniu = require('../common/util/qiniu');
const fs = require('mz/fs');
const path = require('path');
class QiuNiuController extends Controller {
  async getPrivateToken() {
    const uploadToken = Qiniu.QiniuYun.uploadToken();
    this.ctx.body = {
      code: 200,
      msg: 'success',
      data: {
        token: uploadToken,
      },
    };
  }
  async handleCb() {

    this.ctx.body = {
      code: 200,
      data: this.ctx.request.body,
      msg: 'success',
    };

  }
  // qisuu8qa3.hb-bkt.clouddn.com
  async uploadFile() {
    const { ctx } = this;
    const file = ctx.request.files[0];
    const name = path.basename(file.filename);
    try {
      const res = await Qiniu.QiniuYun.uploadFile(name, file.filepath);
      console.log(res);
      ctx.body = {
        code: 200,
        msg: 'success',
        data: {
          imgUrl: `${Qiniu.DomainName}/${res.hash}`,
          ...res,
        },
      };


    } catch (error) {
      ctx.body = {
        code: 200,
        msg: 'error',
        data: error,
      };
    } finally {
      await fs.unlink(file.filepath);
    }
  }
}


module.exports = QiuNiuController;
