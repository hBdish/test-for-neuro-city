import express from "express";

import {LoginRequest, RegistrationRequest} from "./user-controller-types";
import {UserDtoType} from "../../dto";
import {ApiError} from "../../exceptions";
import {userService} from "../../services";
import {UserModel, UserSchema} from "../../models/user-model";

class UserController {
  async registration(
    req: RegistrationRequest,
    res: express.Response<{ user: UserDtoType; accessToken: string; refreshToken: string }>,
    next: (e: unknown) => void
  ) {
    try {
      const {password, email} = req.body
      console.log(req.body)

      if (!password || !email) {
        throw ApiError.BadRequest('Не введен email или пароль')
      }

      const userData = await userService.registration(email, password)
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
      return res.json(userData)
    } catch (e) {
      next(e)
    }
  }

  async login(
    req: LoginRequest,
    res: express.Response<{ user: UserDtoType; accessToken: string; refreshToken: string }>,
    next: (e: unknown) => void
  ) {
    try {
      const {password, email} = req.body
      const userData = await userService.login(email, password)

      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

      return res.json(userData)
    } catch (e) {
      next(e)
    }
  }

  async getAllUsers(req: express.Request, res: express.Response<UserSchema[]>, next: (e: unknown) => void) {
    try {
      const user = await UserModel.findAll()

      if (!user) {
        throw ApiError.BadRequest('Пользователи не найдены')
      }
      return res.json(user)
    } catch (e) {
      next(e)
    }
  }
}

const userController = new UserController()

export {userController}