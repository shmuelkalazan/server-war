import { json, Request, Response } from "express";
import { interceptionLaunch } from "../servises/interception";

export const interception = async (req:Request ,res :Response) =>{
    try {
        const rr = await interceptionLaunch(req.body)
        res.status(200).json(rr)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}