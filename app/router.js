/*
 * @Author: your name
 * @Date: 2020-10-07 18:06:10
 * @LastEditTime: 2020-10-29 15:33:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/app/router.js
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
const prefixVersion = '/album/v1';
const qiniuPrefixVersion = '/qiniu/v1';
module.exports = app => {
  const jwt = app.middleware.jwt();
  const { router, controller } = app;
  router.get('/', jwt, controller.home.index);
  router.resources('user', `${prefixVersion}/user`, jwt, controller.user);
  router.post(`${prefixVersion}/login`, controller.user.login);
  router.post(`${prefixVersion}/register`, controller.user.register);
  router.get(`${qiniuPrefixVersion}/getToken`, jwt, controller.qiniu.getPrivateToken);
  router.post(`${qiniuPrefixVersion}/callback`, controller.qiniu.handleCb);
  router.post(`${qiniuPrefixVersion}/upload`, controller.qiniu.uploadFile);
  router.resources('album', `${prefixVersion}/album`, jwt, controller.album);
  // 挂载鉴权路由
  app.passport.mount('github');
  // 文件上传
};
