"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
const mongoose_1 = require("mongoose");
const dbConnect = () => {
    // MONGO_URI has the database name as "db"
    (0, mongoose_1.connect)(process.env.MONGO_URI, {})
        .then(() => console.log("connect successfully"))
        .catch(error => console.log(error));
};
exports.dbConnect = dbConnect;
//# sourceMappingURL=database.config.js.map