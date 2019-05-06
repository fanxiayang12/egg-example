'use strict';

const Controller = require('egg').Controller;

class DocController extends Controller {
  async page() {
    // mongo
    let pager = await this.service.doc.pageList(2, 1);

    const {
      ctx
    } = this;
    const {
      helper
    } = ctx;

    ctx.json(helper.api.data(pager));
  }
  async find() {
    const {
      ctx
    } = this;
    const {
      helper
    } = ctx;

    // mongo
    let d = await this.service.doc.findById(ctx.query.id);

    ctx.json(helper.api.data(d));
  }
}

module.exports = DocController;
