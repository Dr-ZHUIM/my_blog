'use strict';
module.exports = app => {
  const { router, controller } = app;
  var adminauth = app.middleware.adminauth()
  router.get('/admin/index', controller.admin.admin.index)
  router.post('/admin/checkLogin',controller.admin.admin.checkLogin)
  router.get('/admin/getTypeInfo', adminauth, controller.admin.admin.getTypeInfo)
  router.post('/admin/addArticle', adminauth, controller.admin.admin.addArticle)
  router.post('/admin/updateArticle', adminauth, controller.admin.admin.updateArticle)
  router.get('/admin/getArticleList', adminauth, controller.admin.admin.getArticleList)
  router.get('/admin/deleteArticle/:id', adminauth, controller.admin.admin.deleteArticle)
  router.get('/admin/getArticleById/:id', adminauth, controller.admin.admin.getArticleById)
};
