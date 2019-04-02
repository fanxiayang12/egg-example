const Service = require('egg').Service;

const xlsx = require('xlsx');
const _ = require('lodash');

class NewsService extends Service {
    async list(file,worksheetName = '心衰住院字段表') {
        this.logger.info('');

        var workbook = xlsx.readFile(file.filepath);
        var sheet = workbook.Sheets[worksheetName];

        var array = [];
        for (var key in sheet) {
            if (key.indexOf('D') != -1 && key != 'D1') {
                var val = sheet[key].v;

                var vals = [];
                if (val.indexOf('/') != -1) {
                    vals = val.split('/');
                } else if (val.indexOf('||') != -1) {
                    vals = val.split('||');
                } else if (val.indexOf('&&') != -1) {
                    vals = val.split('&&');
                } else {
                    vals = val.split('\n');
                }
                vals.forEach(v => {
                    if (!v) {
                        return;
                    }

                    let validate = true;
                    if (v.indexOf('、') != -1) {
                        validate = false;
                    } else if (v.indexOf('.') != -1) {
                        validate = false;
                    } else if (v.indexOf('，') != -1) {
                        validate = false;
                    }

                    let obj = v.split('-');
                    let table;
                    let filed;
                    if (obj.length > 1) {
                        table = _.join(_.take(obj, obj.length - 1), '-');
                        filed = _.last(obj);
                    } else {
                        table = obj[0];
                        filed = null;
                    }

                    array.push({
                        key: key,
                        table: table,
                        filed: filed,
                        validate: validate,
                        val: val
                    });
                });
            }
        }

        var workbookWrite = xlsx.utils.book_new();

        function append(data, dataBelongs) {
            let worksheetData = [
                [
                    '位置',
                    '来源-模块',
                    '来源-字段'
                ]
            ];
            data.forEach((a, i) => {
                worksheetData.push(_.values(a));
            });
            let worksheet = xlsx.utils.aoa_to_sheet(worksheetData);
            xlsx.utils.book_append_sheet(workbookWrite, worksheet, dataBelongs);
        }

        append(array, '结果');


        var uniqArray = _.uniqWith(array, (a, b) => {
            return a.table == b.table && a.filed == b.filed;
        });

        append(uniqArray, '去重结果');

        // xlsx.writeFile(workbookWrite, '/Users/alegria/Desktop/结果.xlsx');

        return {
            worksheetName,
            uniqArray,
            array
        }
    }
}

module.exports = NewsService;