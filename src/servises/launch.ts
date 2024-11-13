import { compare, hash } from "bcrypt"
import  Jwt  from "jsonwebtoken";

import Launched, { Ilaunch } from "../models/Launched";




export const createNewLaunch = async (ilaunch:Ilaunch) => {
    try {
        const newLaunch =  
            {
                type:ilaunch.type,
                orgLaunche:ilaunch.orgLaunche,
                to:ilaunch.to,
                intercepted:ilaunch.intercepted,
                interceptedBy:ilaunch.interceptedBy
        }
        const dbUser = new Launched(newLaunch)
        await dbUser.save()
        return dbUser
    } catch (error) {
        console.log("we dont can to crate new launch " ,error) 
    }
}