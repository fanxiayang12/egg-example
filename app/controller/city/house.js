'use strict';

const Controller = require('egg').Controller;

class CityHouseController extends Controller {
  async 'get|post index'() {
    this.ctx.body = 'city index';
  }
}

module.exports = CityHouseController;
