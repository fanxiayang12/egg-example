const { MongoDao } = require('enuo-core-egg');

module.exports = app => {
    var instance = new MongoDao(app, 'pr_organize_info');
    return instance;
};