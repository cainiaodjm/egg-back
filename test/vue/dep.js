/*
 * @Author: your name
 * @Date: 2020-10-30 10:10:53
 * @LastEditTime: 2020-10-30 11:19:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/test/vue/dep.js
 */
'use strict';
class Dep {
  constructor() {
    this.subs = [];
  }
  addSub(sub) {
    this.subs.push(sub);
  }
  removeSub(sub) {
    remove(this.subs, sub);
  }
  depend() {
    if (window.target) {
      this.addSub(window.target);
    }
  }
  notify() {
    const subs = this.subs.slice();
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }
}
function remove(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}
module.exports = Dep;
