/*
 * @Author: your name
 * @Date: 2020-10-07 18:06:10
 * @LastEditTime: 2020-10-09 13:57:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/config/plugin.js
 */
'use strict';

/** @type Egg.EggPlugin */
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

exports.passport = {
  enable: true,
  package: 'egg-passport',
};
exports.passportGithub = {
  enable: true,
  package: 'egg-passport-github',
};
