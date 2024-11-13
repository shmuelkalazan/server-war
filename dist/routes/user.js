"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const user_1 = require("../servises/user");
const login = async (req, res) => {
    try {
        const rr = await (0, user_1.loginServis)(req.body);
        if (typeof rr == "string") {
            res.status(400).json(rr);
        }
        else {
            res.status(200).json(rr);
        }
    }
    catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
};
exports.login = login;
const register = async (req, res) => {
    try {
        console.log(req.body);
        const rr = await (0, user_1.registerServise)(req.body);
        if (typeof rr == "string") {
            res.status(400).json(rr);
        }
        else {
            res.status(200).json(rr);
        }
    }
    catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
};
exports.register = register;
