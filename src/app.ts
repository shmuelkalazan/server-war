import express from"express"
import "dotenv/config"
import userController from "./controllers/user"
// import adminController from "./controllers/admin"
// import votesController from "./controllers/votes"
// import candidatesController from "./controllers/candidates"
// import { conectToMongo } from "./config/db"
import cors from "cors"
import http from 'http'
import {Server} from 'socket.io'
import { conectToMongo } from "./config/db"
// import { handleSocketIo } from "./sokets/io"

const port = process.env.PORT || 12233
const app = express()

const httpServer = http.createServer(app)
// export const io = new Server(httpServer ,{
//     cors: {
//         origin :'*',
//         methods :'*'
//     }
// })

// io.on('connection' ,handleSocketIo)

conectToMongo()

app.use(express.json())
app.use(cors())
app.use("/api/user" ,userController)
// app.use("/api/admin" ,adminController)
// app.use("/api/votes" ,votesController)
// app.use("/api/candidates" ,candidatesController)


httpServer.listen(port , ()=> {
    console.log("server run on port " +port)
})

