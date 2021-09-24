"use strict";
exports.__esModule = true;
exports.selectAll = void 0;
var database_1 = require("../../database");
var cache_1 = require("../../cache");
var cacheKey = 'posts';
var selectAll = function (req, res) {
    if (cache_1.cache.has('posts')) {
        return res.status(200).send({
            mensagem: cache_1.cache.get(cacheKey)
        });
    }
    database_1.database.query('select * from posts;', function (error, result) {
        if (error) {
            return res.status(500).send({
                error: error,
                response: null
            });
        }
        cache_1.cache.set(cacheKey, result);
        res.status(200).send({
            mensagem: result
        });
    });
};
exports.selectAll = selectAll;
