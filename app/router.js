/*
 * @Author: your name
 * @Date: 2020-10-07 18:06:10
 * @LastEditTime: 2020-10-26 11:26:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/app/router.js
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
const prefixVersion = '/album/v1';
module.exports = app => {
  const jwt = app.middleware.jwt();
  const { router, controller } = app;
  router.get('/', jwt, controller.home.index);
  router.resources('user', `${prefixVersion}/user`, jwt, controller.user);
  router.post(`${prefixVersion}/login`, controller.user.login);
  router.post(`${prefixVersion}/register`, controller.user.register);
  // 挂载鉴权路由
  app.passport.mount('github');
  // 文件上传

};
