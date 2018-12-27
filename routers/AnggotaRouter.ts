import { Router } from 'express'
import { AnggotaController } from '../controllers/AnggotaController'

const router = Router()
const controller = new AnggotaController()

router.get('/', controller.index)
router.get('/:_id', controller.show)
router.post('/', controller.store)
router.put('/:_id', controller.update)
router.delete('/:_id', controller.destroy)

export const AnggotaRouter = router
