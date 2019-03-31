'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    this.logger.info('list');

    const data = await this.ctx.service.news.list();
    const dataList = {
      list: data
    };
    await this.ctx.render('news/list.tpl', dataList);
  }
}

module.exports = NewsController;
