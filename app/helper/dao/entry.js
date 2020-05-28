const { MysqlDao } = require('enuo-core-egg');

module.exports = app => {
    var instance = new MysqlDao(app, 'em_term', 'sys_entry');
    return instance;
};