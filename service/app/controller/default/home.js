'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const {
      ctx
    } = this;
    ctx.body = 'result';
  }

  async getArticleList() {
    const {
      ctx
    } = this;
    let sql = 'SELECT article.id as id , ' +
      'article.title as title , ' +
      'article.introduction as intro , ' +
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%d') as addTime , " +
      'article.view_count as view_count , ' +
      'type.typeName as typeName , ' +
      'type.childTypeName as childTypeName ' +
      'FROM article LEFT JOIN type ON article.type_id = type.Id';
    const result = await this.app.mysql.query(sql)
    ctx.body = {
      data: result
    }
  }

  async getArticleById() {
    const {
      ctx
    } = this;
    let id = ctx.params.id;
    let sql = 'SELECT article.id as id , ' +
      'article.title as title , ' +
      'article.introduction as intro , ' +
      'article.article_content as article_content , ' +
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%d') as addTime , " +
      'article.view_count as view_count , ' +
      'type.typeName as typeName , ' +
      'type.id as typeId , ' +
      'type.childTypeName as childTypeName ' +
      'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
      'WHERE article.id=' + id;
    const result = await this.app.mysql.query(sql);
    ctx.body = {
      data: result
    }
  }

  async getFrontTypeInfo() {
    const result = await this.app.mysql.select('front_type')
    this.ctx.body = {
      data: result
    }
  }

  async getBackTypeInfo() {
    const result = await this.app.mysql.select('back_type')
    this.ctx.body = {
      data: result
    }
  }

  async getListInfo() {
    let id = this.ctx.params.id
    let sql = 'SELECT article.id as id , ' +
      'article.title as title , ' +
      'article.introduction as intro , ' +
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%d') as addTime , " +
      'article.view_count as view_count , ' +
      'type.typeName as typeName , ' +
      'type.childTypeName as childTypeName ' +
      'FROM article LEFT JOIN type ON article.type_id = type.Id ' + 
      `WHERE type_id = '${id}'` 
    const result = await this.app.mysql.query(sql)
    this.ctx.body = {
      data: result
    }
  }
  
}
// RESTful app 实现前后端分离，简单，具有约束性
// 通过请求方式约束代码 get-获取 post-新建/更改 put-更改 delete-删除

module.exports = HomeController;