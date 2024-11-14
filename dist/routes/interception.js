"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interception = void 0;
const interception_1 = require("../servises/interception");
const interception = async (req, res) => {
    try {
        const rr = await (0, interception_1.interceptionLaunch)(req.body);
        res.status(200).json(rr);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
};
exports.interception = interception;
