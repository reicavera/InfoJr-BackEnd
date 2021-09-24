"use strict";
exports.__esModule = true;
exports.selectById = void 0;
var database_1 = require("../../database");
var selectById = function (req, res) {
    var id = req.params.id;
    database_1.database.query('select * from posts where id=?;', [id], function (error, result) {
        if (error) {
            return res.status(500).send({
                error: error,
                response: null
            });
        }
        if (!result[0]) {
            return res.status(404).send({
                mensagem: 'post não encontrado'
            });
        }
        res.status(200).send({
            mensagem: result
        });
    });
};
exports.selectById = selectById;
