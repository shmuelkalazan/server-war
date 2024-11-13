"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const user_1 = __importDefault(require("./controllers/user"));
// import adminController from "./controllers/admin"
// import votesController from "./controllers/votes"
// import candidatesController from "./controllers/candidates"
// import { conectToMongo } from "./config/db"
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const db_1 = require("./config/db");
// import { handleSocketIo } from "./sokets/io"
const port = process.env.PORT || 12233;
const app = (0, express_1.default)();
const httpServer = http_1.default.createServer(app);
// export const io = new Server(httpServer ,{
//     cors: {
//         origin :'*',
//         methods :'*'
//     }
// })
// io.on('connection' ,handleSocketIo)
(0, db_1.conectToMongo)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/user", user_1.default);
// app.use("/api/admin" ,adminController)
// app.use("/api/votes" ,votesController)
// app.use("/api/candidates" ,candidatesController)
httpServer.listen(port, () => {
    console.log("server run on port " + port);
});
