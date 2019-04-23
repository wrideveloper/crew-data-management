import { Router } from "express"
import { NomorSuratController } from "../controllers/NomorSuratController"

const router = Router()
const controller = new NomorSuratController()

router.get("/", controller.index)
router.get("/:_id", controller.show)
router.post("/", controller.store)
router.put("/:_id", controller.update)
router.delete("/:_id", controller.destroy)

export const NomorSuratRouter = router
