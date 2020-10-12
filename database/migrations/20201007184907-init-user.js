/*
 * @Author: your name
 * @Date: 2020-10-09 17:03:13
 * @LastEditTime: 2020-10-12 14:34:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/database/migrations/20201007184907-init-user.js
 */
'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 user 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('user', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      openId: STRING(128),
      username: STRING(30),
      password: STRING(128),
      phone: STRING(128),
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 user 表
  down: async queryInterface => {
    await queryInterface.dropTable('user');
  },
};
