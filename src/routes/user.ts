import { json, Request, Response } from "express";
import { loginServis, registerServise } from "../servises/user";

export const login = async (req:Request ,res :Response) =>{
    try {
        const rr = await loginServis(req.body)
        if (typeof rr == "string"){
            res.status(400).json(rr)
        }
        else{
            res.status(200).json(rr)
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

export const register = async (req:Request ,res :Response) =>{
    try {
        console.log(req.body)
        const rr = await registerServise(req.body)
        if (typeof rr == "string"){
            res.status(400).json(rr)
        }
        else{
            res.status(200).json(rr)
        }     } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}
