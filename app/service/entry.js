const Service = require('egg').Service;
const _ = require('lodash');

class TransferService extends Service {
    async transfer() {
        let counter = 0;
        let records = await this.ctx.helper.dao.record.find() || []
        for (let i in records) {
            let record = records[i]
            let id = _.parseInt(i)
            let entry = {
                id,
                name: record.name,
                alias: record.abstract,
                type: _.parseInt(record.type),
                remark: record._id,
            };
            await this.ctx.helper.dao.entry.insert(entry)
            let rules = await this.ctx.helper.dao.rule.find({'parentId': record._id}) || []
            counter += rules.length
            for (let j in rules) {
                let rule = rules[j]
                let replacer = _.keys(rule.result).join(',')
                let regular = {
                    id: _.parseInt(i + j),
                    entry_id: id,
                    priority: rule.priority ? _.parseInt(rule.priority) : null,
                    negative: rule.negative,
                    regex: rule.regex,
                    replacer,
                    remark: rule._id,
                };
                await this.ctx.helper.dao.regular.insert(regular)
                this.logger.info();
            }
        }
        return `${records.length},${counter}`;
    }
    async hasParent() {     // 134
        let counter = 0
        let rules = await this.ctx.helper.dao.rule.find() || []
        for (let rule of rules) {
            let exists = await this.ctx.helper.dao.record.count({_id: rule.parentId})
            if (exists) {
                counter ++;
            }
        }
        return counter
    }
}

module.exports = TransferService;