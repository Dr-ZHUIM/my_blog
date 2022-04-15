'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {

    async index() {
        this.ctx.body = "hi api"
    }

    async checkLogin() {
        let userName = this.ctx.request.body.userName;
        let password = this.ctx.request.body.password;
        const sql = `SELECT userName FROM admin_user WHERE userName =  "${userName}"  AND password = "${password}" `;
        const res = await this.app.mysql.query(sql);
        if (res.length > 0) {
            let openId = new Date().getTime()
            this.ctx.session.openId = {
                'openId': openId
            }
            this.ctx.body = {
                'data': '登录成功',
                'openId': openId
            } //将openId传至后台，允许后台与前台验证登录状态，就不用再次查询数据库
        } else {
            this.ctx.body = {
                'data': '登录失败',
                'res': res
            }
        }
    }

    async getTypeInfo() {
        const resType = await this.app.mysql.select('type');
        this.ctx.body = {
            data: resType
        }
    }

    async addArticle() {
        //this.ctx.request.body     post的数据
        let tmpArticle = this.ctx.request.body;
        const res = await this.app.mysql.insert('article', tmpArticle);
        const insertSuccess = res.affectedRows === 1;
        const insertId = res.insertId;
        console.log(insertId);
        this.ctx.body = {
            insertId: insertId,
            isSuccess: insertSuccess
        }
    }

    async updateArticle() {
        let tmpArticle = this.ctx.request.body;
        const res = await this.app.mysql.update('article', tmpArticle) //update 第一个参数为表，第二个参数为替换的数据
        const updateSuccess = res.affectedRows === 1;
        this.ctx.body = {
            isSuccess: updateSuccess
        }
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
            'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
            'ORDER BY article.id DESC';
        const reslist = await this.app.mysql.query(sql);
        ctx.body = {
            list: reslist
        }
    }

    async deleteArticle() {
        let id = this.ctx.params.id;
        const res = await this.app.mysql.delete('article', { 'id': id })
        this.ctx.body = {data:res}
    }

      async getArticleById() {
          const {ctx} = this;
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
              data: result[0]
          }
      }

}

module.exports = AdminController