/*
 * @Author: your name
 * @Date: 2020-10-20 17:08:37
 * @LastEditTime: 2020-10-26 17:46:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/app/common/util/jwt.js
 */
'use strict';
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

class Jwt {
  constructor(data) {
    this.data = data;
  }
  // 生成token
  generateToken() {
    const data = this.data;
    const cert = fs.readFileSync(path.join(__dirname, '../../../config/pem/rsa_private_key.pem'));
    const token = jwt.sign({
      data,
    }, cert, { algorithm: 'RS256' }, { expiresIn: '1h' });
    return token;
  }

  // 校验token
  verifyToken() {
    const token = this.data;
    let result;
    const cert = fs.readFileSync(path.join(__dirname, '../../../config/pem/rsa_public_key.pem'));
    jwt.verify(token, cert, { algorithms: [ 'RS256' ] }, function(err, decoded) {
      // todo 好像没有过期的错误 后续处理
      if (decoded) {
        result = {
          message: 'success',
          success: true,
          decoded,
        };
      }
      if (err) {
        result = {
          message: err.message,
          success: false,
        };
      }

    });
    return result;

  }
}
module.exports = Jwt;
