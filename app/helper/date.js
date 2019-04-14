const moment = require('moment');

module.exports = app => {
    return {
        format(time) {
            return moment(new Date(time * 1000)).format('MM-DD-YYYY');
        }
    }
};