import express from"express"
import "dotenv/config"
import userController from "./controllers/user"
import launchController from "./controllers/launch"
// import votesController from "./controllers/votes"
import interceptionController from "./controllers/interception"
// import { conectToMongo } from "./config/db"
import cors from "cors"
import http from 'http'
import {Server} from 'socket.io'
import { conectToMongo } from "./config/db"
import { launch } from "./routes/launch"
import { handleSocketIo } from "./sockets/io"
// import { handleSocketIo } from "./sokets/io"

const port = process.env.PORT || 12233
const app = express()

const httpServer = http.createServer(app)
export const io = new Server(httpServer ,{
    cors: {
        origin :'*',
        methods :'*'
    },
});

io.on('connection' ,handleSocketIo)

conectToMongo()

app.use(express.json())
app.use(cors())
app.use("/api/user" ,userController)
app.use("/api/interception" ,interceptionController)
app.use("/api/launch" ,launchController)


httpServer.listen(port , ()=> {
    console.log("server run on port " +port)
})

