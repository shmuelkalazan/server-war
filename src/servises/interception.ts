import { compare, hash } from "bcrypt"
import  Jwt  from "jsonwebtoken";
import Launched, { Ilaunch } from "../models/Launched";
import { Iintercepted } from "../types/interception";
import user, { Iuser } from "../models/user";



export async function decrementResourceAmount(userId: string, resourceName: string): Promise<void> {
  try {
    const result = await user.findOneAndUpdate(
      { _id: userId, 'resources.name': resourceName }, 
      { $inc: { 'resources.$.amount': -1 } }, 
      { new: true } ,
    );

    if (!result) {
      console.log("User or resource not found.");
      return;
    }
    console.log("Updated resource:", result);
  } catch (error) {
    console.error("Error updating resource amount:", error);
  }
}


export const interceptionLaunch = async (intercepted:Iintercepted ) => {
    try {
        console.log(intercepted)
        const dbLanch = await Launched.findByIdAndUpdate(
            intercepted.launchId,{
                $set:{
                    intercepted:true,
                    interceptedBy:intercepted.interceptionBy
            }}
        )
        decrementResourceAmount(intercepted.organizationId,intercepted.type)
        return dbLanch
    } catch (error) {
        console.log("we dont can to intercepted the launch " ,error) 
    }
}