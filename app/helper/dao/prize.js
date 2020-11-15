const { MongoDao } = require('enuo-core-egg');

module.exports = app => {
    var instance = new MongoDao(app, 'tr_prize');
    return instance;
};