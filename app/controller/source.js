'use strict';

const Controller = require('egg').Controller;

class SourceController extends Controller {
  async $list() {
    this.logger.info('list');

    var data = await this.ctx.service.source.list(this.ctx.request.files[0], this.ctx.request.body.worksheet);
    await this.ctx.render('news.tpl', data);
  }
}

module.exports = SourceController;
