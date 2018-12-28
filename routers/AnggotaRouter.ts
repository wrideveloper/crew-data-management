import { Router } from "express"
import multer from "multer"
import { AnggotaController } from "../controllers/AnggotaController"
const upload = multer({ dest: "uploads/foto/" })

const router = Router()
const controller = new AnggotaController()

router.get("/", controller.index)
router.get("/:_id", controller.show)
router.post("/", controller.store)
router.put("/:_id", controller.update)
router.put("/:_id/foto", upload.single("foto"), controller.updateFoto)
router.delete("/:_id", controller.destroy)

export const AnggotaRouter = router
