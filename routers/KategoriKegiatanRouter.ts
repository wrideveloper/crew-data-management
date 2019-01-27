import { Router } from "express"
import { KategoriKegiatanController } from "../controllers/KategoriKegiatanController"

const router = Router()
const controller = new KategoriKegiatanController()

router.get("/", controller.index)
router.get("/:_id", controller.show)
router.post("/", controller.store)
router.put("/:_id", controller.update)
router.delete("/:_id", controller.destroy)

export const KategoriKegiatanRouter = router
