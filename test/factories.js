/*
 * @Author: your name
 * @Date: 2020-10-09 11:27:49
 * @LastEditTime: 2020-10-09 11:27:56
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/test/factories.js
 */
'use strict';

const { factory } = require('factory-girl');

module.exports = app => {
  app.factory = factory;
  // define your own test data structures
  factory.define('user', app.model.User, {
    username: factory.sequence('User.name', n => `name_${n}`),
    password: '123456',
  });
};
