import { Ilaunch } from "../models/Launched"

export interface Iintercepted{
    type:string
    launchId:string
    interceptionBy:string
    organizationId:string
}