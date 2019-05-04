'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks'
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  autorouter: {
    enable: true,
    package: 'egg-router',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  helper: {
    enable: true,
    package: 'egg-helper',
  },
  swaggerdoc: {
    enable: true,
    package: 'egg-swagger-doc',
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  mongo: {
    enable: true,
    package: 'egg-mongo',
  },
};
