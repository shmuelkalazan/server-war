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
        console.log(launch)
        switch(launch?.to) { 
            case 'Center': { 
                console.log('Center')
               break; 
            } 
            case 'North': { 
                console.log('north')
               break; 
            } 
            case 'South': { 
                console.log('south')

                //statements; 
                break; 
             }             
             case 'West Bank': { 
                console.log('wb')

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
        const newLaunch = await createNewLaunch(launch)
        console.log("entered new launch")
        // console.log(newLaunch)
        client.emit('launchedToIsrael',newLaunch)
    })
}
