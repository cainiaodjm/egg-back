/*
 * @Author: your name
 * @Date: 2020-10-09 10:29:18
 * @LastEditTime: 2020-10-12 14:01:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/config/config.unittest.js
 */
'use strict';

// change to your own sequelize configurations for test
exports.sequelize = {
  dialect: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  database: 'shop_unittest',
  username: 'root',
  password: 'djm19941104',
  define: {
    freezeTableName: true,
  },
};
