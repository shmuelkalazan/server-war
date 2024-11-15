"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewLaunch = void 0;
const Launched_1 = __importDefault(require("../models/Launched"));
const interception_1 = require("./interception");
const createNewLaunch = async (ilaunch) => {
    try {
        const newLaunch = {
            type: ilaunch.type,
            orgLaunche: ilaunch.orgLaunche,
            to: ilaunch.to,
            intercepted: ilaunch.intercepted,
            interceptedBy: ilaunch.interceptedBy
        };
        const dbLaunch = await new Launched_1.default(newLaunch);
        await dbLaunch.save();
        (0, interception_1.decrementResourceAmount)(ilaunch.organizationId, ilaunch.type);
        return dbLaunch;
    }
    catch (error) {
        console.log("we dont can to crate new launch ", error);
    }
};
exports.createNewLaunch = createNewLaunch;
