import {Router} from "express";
import {userController} from "../controllers";

const router = Router()

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/users', userController.getAllUsers)

export {router}