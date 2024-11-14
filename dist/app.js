"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const user_1 = __importDefault(require("./controllers/user"));
const launch_1 = __importDefault(require("./controllers/launch"));
// import votesController from "./controllers/votes"
const interception_1 = __importDefault(require("./controllers/interception"));
// import { conectToMongo } from "./config/db"
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const db_1 = require("./config/db");
const io_1 = require("./sockets/io");
// import { handleSocketIo } from "./sokets/io"
const port = process.env.PORT || 12233;
const app = (0, express_1.default)();
const httpServer = http_1.default.createServer(app);
exports.io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: '*',
        methods: '*'
    },
});
exports.io.on('connection', io_1.handleSocketIo);
(0, db_1.conectToMongo)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/user", user_1.default);
app.use("/api/interception", interception_1.default);
app.use("/api/launch", launch_1.default);
httpServer.listen(port, () => {
    console.log("server run on port " + port);
});
