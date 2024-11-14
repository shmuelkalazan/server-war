"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const interception_1 = require("../routes/interception");
const router = (0, express_1.Router)();
router.post("/", interception_1.interception);
exports.default = router;
