import { Router } from "express"
import { AdminController } from "../controllers/AdminController"

const router = Router()
const controller = new AdminController()

router.get("/", controller.index)
router.get("/:_id", controller.show)
router.post("/", controller.store)
router.put("/:_id", controller.update)
router.delete("/:_id", controller.destroy)

export const AdminRouter = router
