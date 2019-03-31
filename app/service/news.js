const Service = require('egg').Service;

class NewsService extends Service {
    async list(page = 1) {
        this.logger.info('list');

        // read config
        const {
            pageSize
        } = this.config;
        const serverUrl = 'https://hacker-news.firebaseio.com/v0';

        return [{
            title: '百度一下',
            url: 'https://www.baidu.com',
            time: 1554010777
        }];

        // use build-in http client to GET hacker-news api
        const {
            data: idList
        } = await this.ctx.curl(`${serverUrl}/topstories.json`, {
            data: {
                orderBy: '"$key"',
                startAt: `"${pageSize * (page - 1)}"`,
                endAt: `"${pageSize * page - 1}"`,
            },
            dataType: 'json',
        });

        // parallel GET detail
        const newsList = await Promise.all(
            Object.keys(idList).map(key => {
                const url = `${serverUrl}/item/${idList[key]}.json`;
                return this.ctx.curl(url, {
                    dataType: 'json'
                });
            })
        );
        return newsList.map(res => res.data);
    }
}

module.exports = NewsService;