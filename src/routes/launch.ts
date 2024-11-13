import { json, Request, Response } from "express";
import { loginServis, registerServise } from "../servises/user";
import { createNewLaunch } from "../servises/launch";

export const launch = async (req:Request ,res :Response) =>{
    try {
        const rr = await createNewLaunch(req.body)
        res.status(201).json(rr)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}