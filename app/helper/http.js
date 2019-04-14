module.exports = app => {
    return {
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

            var data = await app.curl(url, {
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
                app.logger.error('%j', data.data);
            }
        },
        async post(url, params) {
            var data = await app.curl(url, {
                method: 'POST',
                contentType: 'json',
                data: params,
                dataType: 'json',
                timeout: 10000,
            });

            if (data.status == 200) {
                return data.data;
            } else {
                app.logger.error('%j', data.data);
            }
        },
    }
};