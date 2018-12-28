import { Router } from 'express'
import { JabatanController } from '../controllers/JabatanController'

const router = Router()
const controller = new JabatanController()

router.get('/', controller.index)
router.post('/', controller.store)
router.put('/:_id', controller.update)
router.delete('/:_id', controller.destroy)

export const JabatanRouter = router
