"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginServis = exports.registerServise = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../models/user"));
const organizations_json_1 = __importDefault(require("../data/organizations.json"));
const registerServise = async (iuser) => {
    try {
        if (!(iuser === null || iuser === void 0 ? void 0 : iuser.username) || !(iuser === null || iuser === void 0 ? void 0 : iuser.password)) {
            return "enter uesrname & password";
        }
        if (!iuser.organization) {
            return "enter organization";
        }
        if (iuser.organization == "idf" && !iuser.location) {
            return "enter location";
        }
        const encPass = await (0, bcrypt_1.hash)(iuser.password, 10);
        if (!encPass) {
            return "wrong password";
        }
        const infoIdf = organizations_json_1.default.find(org => org.name
            .toLocaleLowerCase()
            .includes(iuser.organization)
            &&
                org.name
                    .toLocaleLowerCase()
                    .includes(iuser.location));
        const infoTerorist = organizations_json_1.default.find(org => {
            console.log(org.name.toLocaleLowerCase(), iuser.organization),
                org.name
                    .toLocaleLowerCase() ==
                    iuser.organization;
        });
        console.log(infoTerorist, infoIdf);
        const newUser = {
            username: iuser.username,
            password: encPass,
            organization: iuser.organization,
            location: iuser.location,
            resources: infoIdf === null || infoIdf === void 0 ? void 0 : infoIdf.resources,
            budget: infoIdf === null || infoIdf === void 0 ? void 0 : infoIdf.budget
        };
        const dbUser = new user_1.default(newUser);
        // await dbUser.save()
        return dbUser;
    }
    catch (error) {
        console.log("we dont can to crate new user ", error);
    }
};
exports.registerServise = registerServise;
const loginServis = async (iuser) => {
    try {
        if (!iuser) {
            return "enter username";
        }
        const dbUser = await user_1.default.findOne({ username: iuser.username }).lean();
        if (!dbUser)
            return ("user not fuond");
        const match = await (0, bcrypt_1.compare)(iuser.password, dbUser.password);
        if (!match)
            return ("wrong password");
        const token = await jsonwebtoken_1.default.sign({
            user_id: dbUser._id,
            organization: dbUser.organization,
            location: dbUser.location,
            resources: dbUser.resources,
            budget: dbUser.budget
        }, process.env.JWT_SECRET, { expiresIn: "3h" });
        return { ...dbUser, token, password: "*****" };
    }
    catch (error) {
        console.log("we dont can to crate new user ", error);
    }
};
exports.loginServis = loginServis;
