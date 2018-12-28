import { Router } from "express"
import { DivisiController } from "../controllers/DivisiController"

const router = Router()
const controller = new DivisiController()

router.get("/", controller.index)
router.post("/", controller.store)
router.put("/:_id", controller.update)
router.delete("/:_id", controller.destroy)

export const DivisiRouter = router
