const Service = require('egg').Service;

class DocService extends Service {
    async pageList(pageIndex, pageSize, query) {
        let data = await this.ctx.helper.dao.doc.pageList(pageIndex, pageSize, query);

        return data;
    }
    async findById(id) {
        let data = await this.ctx.helper.dao.doc.findById(id);

        return data;
    }
}

module.exports = DocService;