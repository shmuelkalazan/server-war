import { compare, hash } from "bcrypt"
import  Jwt  from "jsonwebtoken";

import Launched, { Ilaunch } from "../models/Launched";
import { decrementResourceAmount } from "./interception";




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
        const dbLaunch = await new Launched(newLaunch)
        await dbLaunch.save()
        decrementResourceAmount(ilaunch.organizationId , ilaunch.type)
        return dbLaunch
    } catch (error) {
        console.log("we dont can to crate new launch " ,error) 
    }
}