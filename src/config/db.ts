import { connect } from "mongoose";

export const conectToMongo = async ()=> {
    try {
        connect(process.env.DB_URI as string)
        console.log("connect To mongo")
        
    } catch (error) {
        console.log("can't conect to mongo " ,error)
    }
}