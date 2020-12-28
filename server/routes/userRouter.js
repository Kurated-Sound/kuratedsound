import express from 'express';
import {createUser, loginUser, deleteUser, validateToken } from '../controllers/user.js'
import authMiddleware from '../middleware/auth.js'

const router = express.Router();


router.post('/register', createUser)
router.post('/login', loginUser)
router.delete('/delete', authMiddleware, deleteUser)
router.post("/tokenIsValid", validateToken)


export default router