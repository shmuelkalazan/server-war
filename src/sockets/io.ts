import { Socket } from "socket.io";
import { io } from "../app";
import { Ilaunch } from "../models/Launched";
import { createNewLaunch } from "../servises/launch";
// import { VoteDto } from "../types/vote";
// import { voteById } from "../servises/vote";

export const handleSocketIo = async(client:Socket)=>{
    console.log(`[socket io] New connection ${client.id}`)
    client.on('disconnect' ,() =>{

    }),
    client.on('newLaunch',async(launch:Ilaunch)=>{


        const newLaunch = await createNewLaunch(launch)
        console.log("entered new launch")
        client.broadcast.emit('launchedToIsrael',newLaunch)
    })
}
