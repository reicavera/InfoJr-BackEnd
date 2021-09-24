"use strict";
exports.__esModule = true;
exports.deleteById = void 0;
var database_1 = require("../../database");
var cache_1 = require("../../cache");
var cacheKey = 'posts';
var deleteById = function (req, res) {
    var id = req.params.id;
    database_1.database.query('delete from posts where id=?;', [id], function (error) {
        if (error) {
            return res.status(500).send({
                error: error,
                response: null
            });
        }
        cache_1.cache.del(cacheKey);
        res.status(204).send();
    });
};
exports.deleteById = deleteById;
