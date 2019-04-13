const { MysqlDao } = require('enuo-core-egg');

function HospitalDao(mysql) {
    var instance = new MysqlDao(mysql, 'emdata', 'pr_hospital_info');
    return instance;
}

module.exports = HospitalDao;