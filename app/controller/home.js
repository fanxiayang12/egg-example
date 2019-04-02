'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.service.home.list();
    await this.ctx.render('home.tpl');
  }
}

module.exports = HomeController;
