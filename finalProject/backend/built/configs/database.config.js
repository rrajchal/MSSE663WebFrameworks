"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
var mongoose_1 = require("mongoose");
var dbConnect = function () {
    // MONGO_URI has the database name as "db"
    (0, mongoose_1.connect)(process.env.MONGO_URI, {})
        .then(function () { return console.log("connect successfully"); })
        .catch(function (error) { return console.log(error); });
};
exports.dbConnect = dbConnect;
