"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.interceptionLaunch = void 0;
exports.decrementResourceAmount = decrementResourceAmount;
const Launched_1 = __importDefault(require("../models/Launched"));
const user_1 = __importDefault(require("../models/user"));
async function decrementResourceAmount(userId, resourceName) {
    try {
        const result = await user_1.default.findOneAndUpdate({ _id: userId, 'resources.name': resourceName }, { $inc: { 'resources.$.amount': -1 } }, { new: true });
        if (!result) {
            console.log("User or resource not found.");
            return;
        }
        console.log("Updated resource:", result);
    }
    catch (error) {
        console.error("Error updating resource amount:", error);
    }
}
const interceptionLaunch = async (intercepted) => {
    try {
        console.log(intercepted);
        const dbLanch = await Launched_1.default.findByIdAndUpdate(intercepted.launchId, {
            $set: {
                intercepted: true,
                interceptedBy: intercepted.interceptionBy
            }
        });
        decrementResourceAmount(intercepted.organizationId, intercepted.type);
        return dbLanch;
    }
    catch (error) {
        console.log("we dont can to intercepted the launch ", error);
    }
};
exports.interceptionLaunch = interceptionLaunch;
