'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const {
    router,
    controller
  } = app;
  // todo、约定路由
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
};
