'use strict';

const Controller = require('egg').Controller;

class HospitalController extends Controller {
  async get() {
    const {
      ctx
    } = this;
    const {
      helper
    } = ctx;
    var data = await this.service.hospital.get(ctx.query.id);
    ctx.json(helper.api.data(data));
  }
}

module.exports = HospitalController;
