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
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1552744539012_9622';
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  config.eureka = {
    instance: {
      hostName: 'egg-eureka-app.local',
      // secureVipAddress: '',  
      // vipAddress: '',
      homePageUrl: '/', // just path, will automatically join with ip and port or hostname if given
      statusPageUrl: '/info', // just path, will automatically join with ip and port or hostname if given
      healthCheckUrl: '/health' // just path, will automatically join with ip and port or hostname if given
    },
    registry: {
      server: 'http://10.10.10.12:8761/eureka/apps/', // if use eureka cluster, then pass an (Array<url>, or String split by ',') eg: ['eureka1host/path','eureka2/path] or 'eureka1host/path, eureka2host/path'
      heartbeatInterval: 5000,
      registryFetchInterval: 1000,
      //... other config follow eureka-js-client https://github.com/jquatier/eureka-js-client#advanced-configuration-options
    }
  }

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    appName: appInfo.name,
    pageSize: 5,
  };

  return {
    ...config,
    ...userConfig
  };
};
