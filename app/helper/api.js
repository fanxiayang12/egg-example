module.exports = app => {
    return {
        success(msg, code, data) {
            return {
                success: true,
                msg: msg || 'ok',
                code: code || 200,
                data: data || null
            };
        },
        error(msg, code, data) {
            return {
                success: false,
                msg: msg || 'error',
                code: code || 500,
                data: data || null
            };
        },
        data(data) {
            return this.success('ok', 200, data);
        },
        result(success, msg, code, data) {
            return {
                success: success,
                msg: msg || 'ok',
                code: code || 200,
                data: data || null
            };
        }
    }
};