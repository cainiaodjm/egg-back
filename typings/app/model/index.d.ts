// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAlbum = require('../../../app/model/album');
import ExportPhoto = require('../../../app/model/photo');
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    Album: ReturnType<typeof ExportAlbum>;
    Photo: ReturnType<typeof ExportPhoto>;
    User: ReturnType<typeof ExportUser>;
  }
}
