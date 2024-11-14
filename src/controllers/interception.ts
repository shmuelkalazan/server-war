import { Router } from "express";
import { login, register } from "../routes/user";
import { launch } from "../routes/launch";
import { interception } from "../routes/interception";

const router = Router()

router.post("/" ,interception)


export default router