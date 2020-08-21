/* eslint valid-jsdoc: "off" */

'use strict';
const hostname = require('os').hostname()
const workConfig = {
  password: '12345678',
  database: 'robin_db'
}
const personConfig = {
  password: '123456',
  database: 'midway_db'
}
let myConfig = workConfig
//适配工作电脑和个人电脑
if (hostname === 'Robin') {
  myConfig = personConfig
}
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
  config.keys = appInfo.name + '_1597679450500_1153';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: myConfig.password,
      // 数据库名
      database: myConfig.database,
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };


  return {
    ...config,
    ...userConfig,
  };
};

