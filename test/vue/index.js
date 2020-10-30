/*
 * @Author: your name
 * @Date: 2020-10-30 09:44:28
 * @LastEditTime: 2020-10-30 13:51:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/test/vue/index.js
 */
'use strict';
const Dep = require('./dep');

function defineReactive(data, key, val) {
  const dep = new Dep();
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      dep.depend();
      return val;
    },
    set(newVal) {
      if (val === newVal) {
        return;
      }
      val = newVal;
      dep.notify();
    },
  });
}
defineReactive({}, 'a', 1);
module.exports = defineReactive;
