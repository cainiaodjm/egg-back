/*
 * @Author: your name
 * @Date: 2020-10-09 10:43:39
 * @LastEditTime: 2020-10-09 11:33:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/app/model/user.js
 */
'use strict';
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING(30),
    password: STRING(128),
    phone: STRING(128),
    created_at: DATE,
    updated_at: DATE,
  });
  console.log(User, 'User--------');

  return User;
};
