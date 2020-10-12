/*
 * @Author: your name
 * @Date: 2020-10-09 13:18:37
 * @LastEditTime: 2020-10-09 17:35:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/app/app.js
 */
'use strict';
module.exports = app => {
  app.passport.verify(async (ctx, user) => {
    console.log(ctx, user);
    // 检查用户
    // assert(user.provider, 'user.provider should exists');
    // assert(user.id, 'user.id should exists');

    // 从数据库中查找用户信息
    //
    // Authorization Table
    // column   | desc
    // ---      | --
    // provider | provider name, like github, twitter, facebook, weibo and so on
    // uid      | provider unique id
    // user_id  | current application user id
    // const auth = await ctx.model.Authorization.findOne({
    //   uid: user.id,
    //   provider: user.provider,
    // });
    // const existsUser = await ctx.model.User.findOne({ id: auth.user_id });
    // if (existsUser) {
    //   return existsUser;
    // }
    // // 调用 service 注册新用户
    // const newUser = await ctx.service.user.register(user);
    // return newUser;
    return {
      uid: '1',
      provider: 'github',
    };
  });

  // 将用户信息序列化后存进 session 里面，一般需要精简，只保存个别字段
  app.passport.serializeUser(async (ctx, user) => {
    console.log(ctx, user);
    // 处理 user
    // ...
    // return user;
  });

  // 反序列化后把用户信息从 session 中取出来，反查数据库拿到完整信息
  app.passport.deserializeUser(async (ctx, user) => {
    console.log(ctx, user);
    // 处理 user
    // ...
    // return user;
  });
};

module.exports = app => {
  app.once('server', server => {
    console.log(server);
    // websocket
  });
  app.on('error', (err, ctx) => {
    // report error
    console.log(err, ctx);
  });
  app.on('request', ctx => {
    // log receive request
    console.log(ctx);
  });
  app.on('response', ctx => {
    // ctx.starttime is set by framework
    const used = Date.now() - ctx.starttime;
    console.log(used);
    // log total cost
  });
};
