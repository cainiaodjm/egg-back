/*
 * @Author: your name
 * @Date: 2020-10-07 18:06:10
 * @LastEditTime: 2020-10-28 16:44:16
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
      logging(sql) {

        console.log(sql);
        // new logger.warn(sql)
      },
      // 是否自动进行下划线转换（这里是因为DB默认的命名规则是下划线方式，而我们使用的大多数是驼峰方式）
      underscored: true,

      // 由于orm用的UTC时间，这里必须加上东八区，否则取出来的时间相差8小时
      dialectOptions: { // 让读取date类型数据时返回字符串而不是UTC时间
        dateStrings: true,
        typeCast(field, next) {
          if (field.type === 'DATETIME') {
            return field.string();
          }
          return next();
        },
      },
      pool: {
        max: 5,
        min: 0,
        idle: 10000,
      },
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
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.multipart = {
    mode: 'file',
  };

  // add your middleware config here 在这配置的都是全局的中间件
  // config.middleware = [ 'jwt' ];
  // config.jwt = {
  //   enable: true,
  // };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
