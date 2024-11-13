"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const launchSchema = new mongoose_1.Schema({
    type: String,
    orgLaunche: String,
    to: String,
    intercepted: {
        type: Boolean,
        default: false
    },
    interceptedBy: String
});
exports.default = (0, mongoose_1.model)("Launch", launchSchema);
