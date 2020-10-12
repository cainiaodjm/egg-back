/*
 * @Author: your name
 * @Date: 2020-10-07 18:06:10
 * @LastEditTime: 2020-10-09 14:50:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/app/router.js
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.resources('user', '/user', controller.user);
  // 挂载鉴权路由
  app.passport.mount('github');
  // 文件上传

};
