/*
 * @Author: your name
 * @Date: 2020-10-23 16:04:52
 * @LastEditTime: 2020-10-26 11:18:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/app/common/util/cryptoUtil.js
 */
'use strict';
const path = require('path');
const fs = require('fs');
const CryptoJS = require('crypto-js');
class Crypto {
  constructor(content) {
    this.content = content;
  }
  encrypt() {
    const cert = fs.readFileSync(path.join(__dirname, '../../../config/pem/rsa_private_key.pem'));

    const encryptText = CryptoJS.AES.encrypt(this.content, cert.toString()).toString();

    return encryptText;
  }
  decrypt() {
    const cert = fs.readFileSync(path.join(__dirname, '../../../config/pem/rsa_private_key.pem'));
    const decryptText = CryptoJS.AES.decrypt(this.content, cert.toString()).toString(CryptoJS.enc.Utf8);

    return decryptText;
  }
}
module.exports = Crypto;
