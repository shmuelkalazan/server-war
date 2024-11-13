"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.launch = void 0;
const launch_1 = require("../servises/launch");
const launch = async (req, res) => {
    try {
        const rr = await (0, launch_1.createNewLaunch)(req.body);
        res.status(201).json(rr);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
};
exports.launch = launch;
