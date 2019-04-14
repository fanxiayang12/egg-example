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

        let data = await this.ctx.helper.http.post(url);

        return data.data;
    }
    async getById(id) {
        this.logger.info(id);

        let data = await this.ctx.helper.dao.hospital.get({ id });

        return data;
    }
    async pageList(pageIndex, pageSize) {
        this.logger.info(pageIndex);

        let data = await this.ctx.helper.dao.hospital.pageList(pageIndex, pageSize);

        return data;
    }
}

module.exports = HospitalService;