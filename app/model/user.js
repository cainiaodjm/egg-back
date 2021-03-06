/*
 * @Author: your name
 * @Date: 2020-10-09 10:43:39
 * @LastEditTime: 2020-10-20 15:38:47
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
      field: 'open_id',
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
    freezeTableName: true,
    tableName: 'tb_user',
  });
  return User;
};
