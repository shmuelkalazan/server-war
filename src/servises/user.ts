import { compare, hash } from "bcrypt"
import  Jwt  from "jsonwebtoken";
import user ,{ Iuser } from "../models/user";
import data from '../data/organizations.json'







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
        const infoIdf = data.find(org => 
            org.name
            .toLocaleLowerCase()
            .includes(iuser.organization) 
            && 
            org.name
            .toLocaleLowerCase()
            .includes(iuser.location) );

        const infoTerorist = data.find(org => {

            console.log(org.name.toLocaleLowerCase() ,iuser.organization),
            org.name
            .toLocaleLowerCase() ==
             iuser.organization} ) 
        
             console.log(infoTerorist ,infoIdf)
        const newUser =  
            {
            username:iuser.username,
            password:encPass,
            organization:iuser.organization,
            location:iuser.location,
            resources:infoIdf?.resources,
            budget:infoIdf?.budget
        }
        const dbUser = new user(newUser)
        // await dbUser.save()
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
