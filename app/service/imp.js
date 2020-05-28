const Service = require('egg').Service;

class ImpService extends Service {
    async run(id) {
        const {
            ctx
        } = this;
        const {
            helper
        } = ctx;
        // let data = await helper.dao.doc.findById(id);
        this.logger.info(' is running');

        // query
        // gather
        // post
    }
}

module.exports = ImpService;