module.exports = {
    json(data) {
        this.set("Content-Type", "application/json;charset=utf-8");
        this.body = JSON.stringify(data);
    },
};