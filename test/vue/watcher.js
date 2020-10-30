/*
 * @Author: your name
 * @Date: 2020-10-30 13:58:34
 * @LastEditTime: 2020-10-30 14:54:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/test/vue/watcher.js
 */
'use strict';
class Watcher {
  constructor(vm, expOrFn, cb) {
    this.vm = vm;
    this.getter = parsePath(expOrFn);
    this.cb = cb;
    this.value = this.get();
  }
  get() {
    window.target = this;
    const value = this.getter.call(this.vm, this.vm);
    window.target = undefined;
    return value;
  }
  update() {
    const oldValue = this.value;
    this.value = this.get();
    this.cb.call(this.vm, this.value, oldValue);
  }
}
const bailRE = /[^\w.$]/;
function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }
  const segments = path.split('.');
  return function(obj) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return;
      obj = obj[segments[i]];
    }
    return obj;
  };
}
module.exports = Watcher;
