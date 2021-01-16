import express from 'express';
import {signup, signin, deleteUser } from '../controllers/user.js'
import authMiddleware from '../middleware/auth.js'

const router = express.Router();


router.post('/signup', signup)
router.post('/signin', signin)
router.delete('/delete', authMiddleware, deleteUser)
// router.post("/tokenIsValid", validateToken)


export default router;