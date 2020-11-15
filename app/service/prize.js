const prize = require('../helper/dao/prize');

const Service = require('egg').Service;

class PrizeService extends Service {
    async insert(prize) {
        let data = await this.ctx.helper.dao.prize.insert(prize);

        return data;
    }
    async count(prize) {
        let data = await this.ctx.helper.dao.prize.count(prize);

        return data;
    }
    async pageList(pageIndex, pageSize, query) {
        let data = await this.ctx.helper.dao.doc.pageList(pageIndex, pageSize, query);

        return data;
    }
    async findById(id) {
        let data = await this.ctx.helper.dao.doc.findById(id);

        return data;
    }
}

module.exports = PrizeService;