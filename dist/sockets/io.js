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
            console.log(launch);
            switch (launch === null || launch === void 0 ? void 0 : launch.to) {
                case 'Center': {
                    console.log('Center');
                    break;
                }
                case 'North': {
                    console.log('north');
                    break;
                }
                case 'South': {
                    console.log('south');
                    //statements; 
                    break;
                }
                case 'West Bank': {
                    console.log('wb');
                    //statements; 
                    break;
                }
                default: {
                    //statements; 
                    break;
                }
            }
            // console.log(launch)
            // voteById(vote)
            const newLaunch = await (0, launch_1.createNewLaunch)(launch);
            console.log("entered new launch");
            // console.log(newLaunch)
            client.emit('launchedToIsrael', newLaunch);
        });
};
exports.handleSocketIo = handleSocketIo;
