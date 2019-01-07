import { Router } from "express"
import { MiniclassController } from "../controllers/MiniclassController"

const router = Router()
const controller = new MiniclassController()

router.get("/", controller.index)
router.post("/", controller.store)
router.put("/:_id", controller.update)
router.delete("/:_id", controller.destroy)

export const MiniclassRouter = router
