/* eslint valid-jsdoc: "off" */

'use strict';

const os = require('os');
const path = require('path');

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
  config.cors = {
    origin:'*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.multipart = {
    mode: 'file',
    tmpdir: path.join(os.tmpdir(), 'tmp', appInfo.name),
    cleanSchedule: {
      // run tmpdir clean job on every day 04:30 am
      // cron style see https://github.com/eggjs/egg-schedule#cron-style-scheduling
      cron: '0 30 4 * * *',
    },
    fileExtensions: [   // will append to whilelist
      '.xlsx',
    ],
  };

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    appName: appInfo.name,
    apiIp: 'http://10.10.10.12:8080/',
    serviceId: {
      commonService: 'emdata-common-service',
      projectService: 'emdata-platform-keydefine',
      etlMappingService: 'em-etl-mapping',
      biService: 'emdata-bi-service',
      commonNode: 'emdata-common-service-node',
      weixinService: 'emdata-weixin-server',
      emrService: 'emdata-emr-server',
      standardService: 'emdata-standardize-service',
      otpService: 'otp-service',
      qaProjectService: 'emdata-qa-service',
      datacheck: 'datacheck-service'
    },
    pageSize: 5,
  };

  return {
    ...config,
    ...userConfig
  };
};
