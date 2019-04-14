const { MysqlDao } = require('enuo-core-egg');

module.exports = app => {
    var instance = new MysqlDao(app, 'emdata', 'pr_hospital_info');
    return instance;
};