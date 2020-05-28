const { MongoDao } = require('enuo-core-egg');

module.exports = app => {
    var instance = new MongoDao(app, 'disease_record_rule');
    return instance;
};