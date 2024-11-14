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
            // console.log(launch)
            // switch(launch?.to) { 
            //     case 'Center': { 
            //         client.broadcast.emit('Center',launch)
            //        break; 
            //     } 
            //     case 'North': { 
            //         client.broadcast.emit('North',launch)
            //        break; 
            //     } 
            //     case 'South': { 
            //         client.broadcast.emit('South',launch)
            //         break; 
            //      }             
            //      case 'West Bank': { 
            //         // console.log('West Bank')
            //         client.broadcast.emit('West Bank',launch)
            //         break; 
            //      } 
            //     default: { 
            //        break; 
            //     } 
            //  } 
            const newLaunch = await (0, launch_1.createNewLaunch)(launch);
            console.log("entered new launch");
            client.broadcast.emit('launchedToIsrael', newLaunch);
        });
};
exports.handleSocketIo = handleSocketIo;
