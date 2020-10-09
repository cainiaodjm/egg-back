/*
 * @Author: your name
 * @Date: 2020-10-09 11:28:45
 * @LastEditTime: 2020-10-09 11:42:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/test/app/controller/user.test.js
 */
'use strict';

const { assert, app } = require('egg-mock/bootstrap');

describe('test/app/controller/user.test.js', () => {
  describe('GET /user', () => {
    it('should work', async () => {
      await app.factory.createMany('user', 3);
      const res = await app.httpRequest().get('/user?limit=2');

      assert(res.status === 200);
      assert(res.body.length === 2);
      //   assert(res.body.length === 2);
      assert(res.body[0].username);
      assert(res.body[0].password);
    });
  });

  describe('GET /user/:id', () => {
    it('should work', async () => {
      const user = await app.factory.create('user');
      const res = await app.httpRequest().get(`/user/${user.id}`);
      assert(res.status === 200);
      assert(res.body.username === user.username);
    });
  });

  describe('POST /user', () => {
    it('should work', async () => {
      app.mockCsrf();
      let res = await app.httpRequest().post('/user')
        .send({
          username: 'jack',
          password: '123456',
        });
      assert(res.status === 201);
      assert(res.body.id);

      res = await app.httpRequest().get(`/user/${res.body.id}`);
      assert(res.status === 200);
      assert(res.body.username === 'jack');
    });
  });

  describe('DELETE /user/:id', () => {
    it('should work', async () => {
      const user = await app.factory.create('user');

      app.mockCsrf();
      const res = await app.httpRequest().delete(`/user/${user.id}`);
      assert(res.status === 200);
    });
  });
});
