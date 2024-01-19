import {Router} from "express";
import {userController} from "../controllers";
import authMiddleware from "../common/middlewares/auth-middleware";
import validateMiddleware from "../common/middlewares/validate-middleware";

const router = Router()

router.post('/registration', validateMiddleware, userController.registration)
router.post('/login', validateMiddleware, userController.login)
router.get('/users', authMiddleware, userController.getAllUsers)

export {router}