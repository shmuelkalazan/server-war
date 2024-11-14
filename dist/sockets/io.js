"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSocketIo = void 0;
const launch_1 = require("../servises/launch");
// import { VoteDto } from "../types/vote";
// import { voteById } from "../servises/vote";
const handleSocketIo = (client) => {
    console.log(`[socket io] New connection ${client.id}`);
    client.on('disconnect', () => {
    }),
        client.on('newLaunch', (launch) => {
            switch (launch.to) {
                case 'Center': {
                    console.log('Center');
                    //statements; 
                    break;
                }
                case 'North': {
                    console.log('north');
                    //statements; 
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
            console.log(launch);
            // voteById(vote)
            (0, launch_1.createNewLaunch)(launch);
            console.log("entered new launch");
            client.emit('launchedToIsrael');
        });
};
exports.handleSocketIo = handleSocketIo;
