"use strict";
exports.__esModule = true;
exports.updateById = void 0;
var database_1 = require("../../database");
var cache_1 = require("../../cache");
var cacheKey = 'posts';
var updateById = function (req, res) {
    var id = req.params.id;
    var _a = req.body, title = _a.title, content = _a.content, authorId = _a.authorId;
    if (!(title && content && authorId)) {
        return res.status(400).send({
            mensagem: 'um ou mais campos faltando'
        });
    }
    database_1.database.query('update posts set title=?,content=?,authorId=? where id=?', [title, content, authorId, id], function (error) {
        if (error) {
            return res.status(500).send({
                error: error,
                response: null
            });
        }
        cache_1.cache.del(cacheKey);
        res.status(200).send({
            mensagem: 'post atualizado'
        });
    });
};
exports.updateById = updateById;
