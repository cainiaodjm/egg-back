/*
 * @Author: your name
 * @Date: 2020-10-20 15:05:07
 * @LastEditTime: 2020-10-30 15:28:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/app/model/photo.js
 */
'use strict';
module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize;
  const Photo = app.model.define('photo', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: INTEGER, field: 'user_id' },
    albumId: { type: INTEGER, field: 'album_id' },
    url: {
      type: STRING(255),
    },
    isApproved: {
      type: BOOLEAN,
      field: 'is_approved',
    },
    isDelete: {
      type: BOOLEAN,
      field: 'is_delete',
    },
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
    tableName: 'tb_photo',
  });
  return Photo;
};
