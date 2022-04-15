'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/',controller.home.index)
  router.get('/default/index', controller.default.home.index)
  router.get('/default/getArticleList', controller.default.home.getArticleList)
  router.get('/default/getArticleById/:id', controller.default.home.getArticleById)
  router.get('/default/getFrontTypeInfo', controller.default.home.getFrontTypeInfo)
  router.get('/default/getBackTypeInfo', controller.default.home.getBackTypeInfo)
  router.get('/default/getListInfo/:id', controller.default.home.getListInfo)
};
