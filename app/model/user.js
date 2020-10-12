/*
 * @Author: your name
 * @Date: 2020-10-09 10:43:39
 * @LastEditTime: 2020-10-12 13:55:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/app/model/user.js
 */
'use strict';
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    openId: {
      type: STRING(128),
      field: 'openId',
    },
    username: STRING(30),
    password: STRING(128),
    phone: STRING(128),
    createdAt: {
      type: DATE,
      field: 'created_at',
    },
    updatedAt: {
      type: DATE,
      field: 'updated_at',
    },
  }, {
    timestamps: true,
  });
  return User;
};
