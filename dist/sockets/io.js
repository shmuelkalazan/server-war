"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSocketIo = void 0;
const launch_1 = require("../servises/launch");
// import { VoteDto } from "../types/vote";
// import { voteById } from "../servises/vote";
const handleSocketIo = async (client) => {
    console.log(`[socket io] New connection ${client.id}`);
    client.on('disconnect', () => {
    }),
        client.on('newLaunch', async (launch) => {
            const newLaunch = await (0, launch_1.createNewLaunch)(launch);
            console.log("entered new launch");
            client.broadcast.emit('launchedToIsrael', newLaunch);
        });
};
exports.handleSocketIo = handleSocketIo;
