const Service = require('egg').Service;

const _ = require('lodash');

class HospitalService extends Service {
    async get(id) {
        this.logger.info(id);

        // read config
        const {
            apiIp,
            serviceId
        } = this.config;

        const url = `${apiIp}${serviceId.commonService}/hospital/${id}`;

        let data = await this.ctx.helper.post(url);

        return data.data;
    }
}

module.exports = HospitalService;