"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const launch_1 = require("../routes/launch");
const router = (0, express_1.Router)();
router.post("/", launch_1.launch);
exports.default = router;
