/*
 * @Author: your name
 * @Date: 2020-10-20 14:59:31
 * @LastEditTime: 2020-10-30 15:20:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/app/service/album.js
 */
'use strict';
const Service = require('egg').Service;

class AlbumService extends Service {
  async createAlbum(userId, albumName) {
    const _album = {
      userId,
      albumName,
    };
    const album = await this.ctx.model.Album.create(_album);
    return album;
  }
  async isExistAlbum(name) {
    const album = await this.ctx.model.Album.findOne({
      where: {
        albumName: name,
      },
    });
    if (album === null) {
      return false;
    }
    return true;

  }
}
module.exports = AlbumService;
