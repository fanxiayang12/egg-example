const Service = require('egg').Service;

const _ = require('lodash');
const HospitalDao = require('../dao/hospital/hospitalDao');

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
    async getById(id) {
        this.logger.info(id);

        const { mysql } = this.app;
        const hospitalDao = new HospitalDao(mysql);
        let data = await hospitalDao.get({ id });

        return data;
    }
    async pageList(pageIndex, pageSize) {
        this.logger.info(pageIndex);

        const { mysql } = this.app;
        const hospitalDao = new HospitalDao(mysql);
        let data = await hospitalDao.pageList(pageIndex, pageSize);

        return data;
    }
}

module.exports = HospitalService;