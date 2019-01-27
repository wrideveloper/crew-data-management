import { Router } from "express"
import { KegiatanController } from "../controllers/KegiatanController"

const router = Router()
const controller = new KegiatanController()

router.get("/", controller.index)
router.get("/:_id", controller.show)
router.post("/", controller.store)
router.put("/:_id", controller.update)
router.delete("/:_id", controller.destroy)

export const KegiatanRouter = router
