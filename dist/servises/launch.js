"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewLaunch = void 0;
const Launched_1 = __importDefault(require("../models/Launched"));
const createNewLaunch = async (ilaunch) => {
    try {
        const newLaunch = {
            type: ilaunch.type,
            orgLaunche: ilaunch.orgLaunche,
            to: ilaunch.to,
            intercepted: ilaunch.intercepted,
            interceptedBy: ilaunch.interceptedBy
        };
        const dbUser = new Launched_1.default(newLaunch);
        await dbUser.save();
        return dbUser;
    }
    catch (error) {
        console.log("we dont can to crate new launch ", error);
    }
};
exports.createNewLaunch = createNewLaunch;
