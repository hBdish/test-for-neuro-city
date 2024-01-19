import express, {NextFunction} from "express";
import {ApiError} from "../errors/exceptions";
import {tokenService} from "../../services";
import {UserSchema} from "../../db/models/user-model";

export default function (req: express.Request, res: unknown, next: NextFunction) {
  try {
    const authorizationHeader = req.headers.authorization

    if (!authorizationHeader) {
      return next(ApiError.UnauthorizedError())
    }

    const accessToken = authorizationHeader.split(' ')[1]

    if (!accessToken) {
      return next(ApiError.UnauthorizedError())
    }

    const userData = tokenService.validateAccessToken(accessToken) as UserSchema
    if (!userData) {
      return next(ApiError.UnauthorizedError())
    }

    req.headers.user = JSON.stringify(userData)
    next()
  } catch (e) {
    return next(ApiError.UnauthorizedError())
  }
}