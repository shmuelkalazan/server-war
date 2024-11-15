import { compare, hash } from "bcrypt"
import  Jwt  from "jsonwebtoken";
import user ,{ Iuser } from "../models/user";
import data from '../data/organizations.json'


function getOrganizationByName(data:any[], name:string) {
    return data.find(org => org.name === name);
}


export const registerServise = async (iuser:Iuser) => {
    try {
        if (!iuser?.username || !iuser?.password){
            return "enter uesrname & password"
        }if (!iuser.organization){
            return "enter organization"
        }
        if (iuser.organization == "idf" && !iuser.location){
            return "enter location"
        }
        const encPass = await hash(iuser.password, 10);
        if (!encPass){
            return "wrong password"
        }

        const info =  getOrganizationByName(data,iuser.organization)
        console.log(info)
        
        const newUser =  
            {
            username:iuser.username,
            password:encPass,
            organization:iuser.organization,
            location:iuser.location,
            resources:info?.resources,
            budget:info?.budget
        }
        const dbUser = await new user(newUser)
        await dbUser.save()
        console.log(dbUser)
        return dbUser
    } catch (error) {
        console.log("we dont can to crate new user " ,error) 
    }
}

export const loginServis = async (iuser:Iuser) => {
    try {
        if (!iuser){
            return "enter username"
        }
        const dbUser  = await user.findOne({username:iuser.username}).lean();
        if (!dbUser) return("user not fuond")
            const match = await compare(iuser.password, dbUser.password);
        if (!match) return("wrong password");
        const token = await Jwt.sign({ 
            user_id:dbUser._id ,
            organization:dbUser.organization,
            location:dbUser.location,
            resources:dbUser.resources,
            budget:dbUser.budget
        },process.env.JWT_SECRET as string ,{expiresIn:"3h"})
        return {...dbUser ,token ,password:"*****"};
    } catch (error) {
        console.log("we dont can to crate new user " ,error) 
    }
}
