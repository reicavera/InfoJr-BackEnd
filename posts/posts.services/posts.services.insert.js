"use strict";
exports.__esModule = true;
exports.insert = void 0;
var database_1 = require("../../database");
var cache_1 = require("../../cache");
var cacheKey = 'posts';
var insert = function (req, res) {
    var _a = req.body, title = _a.title, content = _a.content, authorId = _a.authorId;
    if (!(title && content && authorId)) {
        return res.status(400).send({
            mensagem: 'um ou mais campos faltando'
        });
    }
    database_1.database.query('insert into posts (title,content,authorId) values (?,?,?)', [title, content, authorId], function (error) {
        if (error) {
            return res.status(500).send({
                error: error,
                response: null
            });
        }
        cache_1.cache.del(cacheKey);
        res.status(201).send({
            mensagem: 'post cadastrado com sucesso'
        });
    });
};
exports.insert = insert;
