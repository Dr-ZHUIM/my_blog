'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async detail() {
    const { ctx } = this;
    ctx.body = `<h1>test</h1>`
  }
}

// RESTful app 实现前后端分离，简单，具有约束性
// 通过请求方式约束代码 get-获取 post-新建/更改 put-更改 delete-删除

module.exports = HomeController;
