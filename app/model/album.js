/*
 * @Author: your name
 * @Date: 2020-10-12 16:17:00
 * @LastEditTime: 2020-10-22 18:29:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/app/model/album.js
 */
'use strict';
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Album = app.model.define('album', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: INTEGER,
      field: 'user_id' },
    albumName: {
      type: STRING(128),
      field: 'album_name',
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
    tableName: 'tb_album',
  });
  return Album;
};
