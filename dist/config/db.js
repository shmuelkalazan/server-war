"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conectToMongo = void 0;
const mongoose_1 = require("mongoose");
const conectToMongo = async () => {
    try {
        (0, mongoose_1.connect)(process.env.DB_URI);
        console.log("connect To mongo");
    }
    catch (error) {
        console.log("can't conect to mongo ", error);
    }
};
exports.conectToMongo = conectToMongo;
