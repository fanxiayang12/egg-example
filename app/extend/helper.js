const moment = require('moment');

module.exports = {
    format(time) {
        return moment(new Date(time * 1000)).format('MM-DD-YYYY');
    },
    foo(param) {
        // this 是 helper 对象，在其中可以调用其他 helper 方法
        // this.ctx => context 对象
        // this.app => application 对象
    },
};