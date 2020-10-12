/*
 * @Author: your name
 * @Date: 2020-10-07 18:06:10
 * @LastEditTime: 2020-10-12 10:48:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/config/config.default.js
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'shop',
    username: 'root',
    password: 'djm19941104',
    define: {
      freezeTableName: true,
    },
  };
  config.passportGithub = {
    key: 'bb5c9de6c4d0a17ed834',
    secret: 'bad70348be04491c3ae8c4ab3ed87305fe49614b',
    callbackURL: '/passport/github/callback',
    proxy: false,
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1602064979863_4674';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
