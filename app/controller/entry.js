'use strict';

const Controller = require('egg').Controller;

class TransferController extends Controller {
  async transfer() {  // /entry/transfer
    this.logger.info('transfer');

    var data = await this.ctx.service.entry.transfer();

    const {
      ctx
    } = this;
    const {
      helper
    } = ctx;

    ctx.json(helper.api.data(data));
  }
}

module.exports = TransferController;
