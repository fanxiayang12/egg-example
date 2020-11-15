'use strict';

const Controller = require('egg').Controller;
const _ = require('lodash');

/**
 * @controller 抽奖
 */
class PrizeController extends Controller {
  /**
   * @router get /size
   * @summary 查询二维码的抽奖频次
   * @description 根据二维码编号
   * @request query string *code eg:1 二维码编号
   */
  async size() {
    const {
      ctx
    } = this;
    const {
      helper
    } = ctx;
    let code = ctx.query.code
    var data = await this.service.prize.count({code})
    ctx.json(helper.api.data(data));
  }

  /**
   * @router get /run
   * @summary 抽奖
   * @description 插入抽奖记录
   * @request query string *code eg:1 二维码编号
   */
  async run() {
    const {
      ctx
    } = this;
    const {
      helper
    } = ctx;
    let val = 5 // TODO:抽奖概率
    let code = ctx.query.code
    let ts = _.now()
    var data = await this.service.prize.insert({code, val, ts});
    ctx.json(helper.api.data(val));
  }
}

module.exports = PrizeController;
