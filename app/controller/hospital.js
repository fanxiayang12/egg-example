'use strict';

const Controller = require('egg').Controller;

/**
 * @controller 医院
 */
class HospitalController extends Controller {
  /**
   * @router get /get
   * @summary 查询医院详情
   * @description 根据医院id,查询医院详情
   * @request query integer *id eg:673 医院id
   */
  async get() {
    const {
      ctx
    } = this;
    const {
      helper
    } = ctx;
    var data = await this.service.hospital.get(ctx.query.id);
    // var data = await this.service.hospital.getById(ctx.query.id);
    ctx.json(helper.api.data(data));
  }

  /**
   * @deprecated
   * @router post /pager
   * @summary 分页查询医院列表
   * @description 医院列表
   * @request query integer pageIndex eg:1 页号
   * @request query integer pageSize eg:10 页寸
   */
  async pager() {
    const {
      ctx
    } = this;
    const {
      helper
    } = ctx;
    var data = await this.service.hospital.pageList(ctx.query.pageIndex,ctx.query.pageSize);
    ctx.json(helper.api.data(data));
  }
}

module.exports = HospitalController;
