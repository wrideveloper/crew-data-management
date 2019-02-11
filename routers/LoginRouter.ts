import { Router } from "express"
import { LoginController } from "../controllers/LoginController"

const router = Router()
const controller = new LoginController()

router.post("/", controller.login)

export const LoginRouter = router
