'use strict';

const fs = require('fs');
const path = require('path');

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const {
    router,
    controller
  } = app;

  app.logger.info('AUTO router');
};
