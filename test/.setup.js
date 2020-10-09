/*
 * @Author: your name
 * @Date: 2020-10-09 11:28:19
 * @LastEditTime: 2020-10-09 11:28:28
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/test/.setup.js
 */
'use strict';

const { app } = require('egg-mock/bootstrap');
const factories = require('./factories');

before(() => {
  // defined app.factory for build test data
  factories(app);
});


afterEach(async () => {
  // clear database after each test case
  await Promise.all([
    // define your own model.destroy here
    app.model.User.destroy({ truncate: true, force: true }),
  ]);
});