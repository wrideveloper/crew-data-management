import { Router } from "express"
import { PresensiController } from "../controllers/PresensiController"

const router = Router()
const controller = new PresensiController()

router.get("/", controller.index)
router.post("/", controller.store)
router.put("/:_id", controller.update)
router.delete("/:_id", controller.destroy)

export const PresensiRouter = router
