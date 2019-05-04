'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.service.home.list();

    // redis
    let key = 'key';
    let val = 'val';
    await this.app.redis.set(key,val);
    this.logger.info(val);
    let value = await this.app.redis.get(key);
    this.logger.info(value);

    await this.ctx.render('home.tpl');
  }

  async doc() {
    // mongo
    let pager = await this.service.doc.pageList(1, 2);

    const {
      ctx
    } = this;
    const {
      helper
    } = ctx;

    ctx.json(helper.api.data(pager));
  }
}

module.exports = HomeController;
