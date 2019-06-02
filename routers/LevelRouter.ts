import { Router } from "express"
import { LevelController } from "../controllers/LevelController"

const router = Router()
const controller = new LevelController()

router.get("/", controller.index)
router.get("/:_id", controller.show)
router.post("/", controller.store)
router.put("/:_id", controller.update)
router.delete("/:_id", controller.destroy)

export const LevelRouter = router
