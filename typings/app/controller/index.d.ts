// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAlbum = require('../../../app/controller/album');
import ExportHome = require('../../../app/controller/home');
import ExportQiniu = require('../../../app/controller/qiniu');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    album: ExportAlbum;
    home: ExportHome;
    qiniu: ExportQiniu;
    user: ExportUser;
  }
}
