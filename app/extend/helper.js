const moment = require('moment');

module.exports = {
    format(time) {
        return moment(new Date(time * 1000)).format('MM-DD-YYYY');
    },
    api: {
        success: function (msg, code, data) {
            return {
                success: true,
                msg: msg || 'ok',
                code: code || 200,
                data: data || null
            };
        },
        error: function (msg, code, data) {
            return {
                success: false,
                msg: msg || 'error',
                code: code || 500,
                data: data || null
            };
        },
        data: function (data) {
            return this.success('ok', 200, data);
        },
        result: function (success, msg, code, data) {
            return {
                success: success,
                msg: msg || 'ok',
                code: code || 200,
                data: data || null
            };
        }
    },
    async get(url, params) {
        var params_str = "";
        if (params)
            for (var key in params) {
                if (params[key] || params[key] === 0) {
                    var value = urlencode(params[key]);
                    if (params_str) params_str += "&";
                    params_str += (key + "=" + value);
                }
            }
        if (params_str) url += ("?" + params_str);

        var data = await this.ctx.curl(url, {
            method: 'GET',
            contentType: 'json',
            data: {

            },
            dataType: 'json',
            timeout: 10000,
        });

        if (data.status == 200) {
            return data.data;
        } else {
            this.ctx.logger.error('%j', data.data);
        }
    },
    async post(url, params) {
        var data = await this.ctx.curl(url, {
            method: 'POST',
            contentType: 'json',
            data: params,
            dataType: 'json',
            timeout: 10000,
        });

        if (data.status == 200) {
            return data.data;
        } else {
            this.ctx.logger.error('%j', data.data);
        }
    },
};