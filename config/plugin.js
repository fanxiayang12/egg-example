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
  }
};
