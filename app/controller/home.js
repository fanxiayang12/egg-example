'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.service.home.list();

    // redis
    let key = 'key';
    let val = 'val';
    await this.app.redis.set(key, val);
    this.logger.info(val);
    let value = await this.app.redis.get(key);
    this.logger.info(value);

    await this.ctx.render('home.tpl');
  }
  async run() {
    const cfg = {
      "basic": {
        "projectId": "1",
        "hospitalId": "100"
      },
      "emr": {
        "host": "10.10.10.13",
        "port": "3306",
        "user": "root",
        "password": "root",
        "database": "emdata"
      },
      "mappings": [{
        "table": "ip_medical_history_info",
        "field": "admission_number",
        "event": "ip",
        "form": "ip_medical_history_info",
        "group": "ip_medical_history_info",
        "item": "admission_number"
      }]
    };
    this.service.imp.run(cfg);

    const {
      ctx
    } = this;
    const {
      helper
    } = ctx;
    ctx.json(helper.api.data({}));
  }
}

module.exports = HomeController;
