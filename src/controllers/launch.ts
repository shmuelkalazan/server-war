import { Router } from "express";
import { login, register } from "../routes/user";
import { launch } from "../routes/launch";

const router = Router()

router.post("/" ,launch)


export default router