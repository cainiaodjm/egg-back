/*
 * @Author: your name
 * @Date: 2020-10-27 01:33:19
 * @LastEditTime: 2020-10-29 11:34:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/app/common/util/qiniu.js
 */
'use strict';
const qiniu = require('qiniu');
const Bucket = 'cainiaodjmalbum';
const AccessKey = 'J9_f9Xom1_XZo3Qj-yNgCU9TnZMb5Xs5zrEA6MZj';
const SecretKey = 'JdU-eiFvH4H3uxXOlFaQoFxwURj1Jx5WLPQZIazG';
// eslint-disable-next-line no-unused-vars
const DomainName = 'qisuu8qa3.hb-bkt.clouddn.com';
const Expires = 7200;
class QiniuYun {
  constructor(bucket = Bucket, accessKey = AccessKey, secretKey = SecretKey, expires = Expires) {
    this.bucket = bucket;
    this.accessKey = accessKey;
    this.secretKey = secretKey;
    this.expires = expires;
  }

  static uploadToken() {
    const mac = new qiniu.auth.digest.Mac(AccessKey, SecretKey);
    const options = {
      scope: Bucket,
      expires: Expires,
      // callbackUrl必须是公网才能访问 暂时不作处理
      //   callbackUrl: 'http://127.0.0.1:7001/qiniu/v1/callback',
      //   callbackBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}',
      //   callbackBodyType: 'application/json',
      returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}',
    };
    const upPolicy = new qiniu.rs.PutPolicy(options);
    const uploadToken = upPolicy.uploadToken(mac);
    return uploadToken;
  }
  static uploadFile(key, path) {
    const config = new qiniu.conf.Config();
    config.zone = qiniu.zone.Zone_z1;
    const formUploader = new qiniu.form_up.FormUploader(config);
    const putExtra = new qiniu.form_up.PutExtra();


    const token = this.uploadToken();
    // 文件上传
    return new Promise((resolve, reject) => {
      formUploader.putFile(token, key, path, putExtra, function(respErr,
        respBody, respInfo) {
        if (respErr) {
          reject(respErr);
        }
        if (respInfo.statusCode === 200) {
          resolve(respBody);
        } else {
          reject(respInfo);
        }
      });
    });


  }
}
exports.DomainName = DomainName;
exports.QiniuYun = QiniuYun;
