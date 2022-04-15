/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1649505117677_8939';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '372919916',
      database: 'react_blog'
    },
    app: true,
    agent: false
  }

  config.security = {
    csrf: {
      enable: false,  //关闭egg安全模式
      ignoreJSON: true
    },
    domainWhiteList:['*'] //
  }

  config.cors = {
    origin: 'http://localhost:3000', //所有域名允许跨域
    credentials : true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };  //解决跨域

  return {
    ...config,
    ...userConfig,
  };
};
