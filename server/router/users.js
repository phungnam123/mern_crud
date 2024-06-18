import express from 'express'
const router = express.Router()
import usersController from '../controllers/usersController.js'

router.get('/', usersController.getAllUser)
router.get('/:id', usersController.getSingleUser)
router.post('/', usersController.createUser)
router.patch('/:id', usersController.updateUser)
router.delete('/:id', usersController.deleteUser)

export default router
