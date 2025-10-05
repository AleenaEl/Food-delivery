import express from 'express'
const userRouter = express()
import { loginUser, registerUser } from '../controllers/userController.js'


userRouter.post('/register', registerUser)
userRouter.post('/login',loginUser)



export default userRouter