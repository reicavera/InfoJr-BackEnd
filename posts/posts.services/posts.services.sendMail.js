"use strict";
exports.__esModule = true;
exports.sendMail = void 0;
var database_1 = require("../../database");
var mail_posts_1 = require("../../mail/mail.posts");
var sendMail = function (req) {
    var authorId = req.body.authorId;
    database_1.database.query('select follow.readerEmail,authors.authorName,readers.readerName from follow inner join authors,readers where authorId=?;', [authorId], function (error, result) {
        if (error) {
            return;
        }
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var data = result_1[_i];
            mail_posts_1.mailPosts(data);
        }
    });
};
exports.sendMail = sendMail;
