import bcrypt from 'bcrypt'

import {UserModel} from "../models";
import {UserDto} from "../dto";
import {tokenService} from "./token-service";
import {ApiError} from "../exceptions";


class UserService {
  async registration(email: string, password: string) {
    const candidate = await UserModel.findOne({
      where: {
        email,
      },
    })

    if (candidate) {
      throw ApiError.BadRequest(`Пользователь с таким email уже существует`)
    }

    const hashPassword = await bcrypt.hash(password, 3)

    const user = await UserModel.create({email, password: hashPassword})

    const userDto = new UserDto(user)
    const {accessToken, refreshToken} = tokenService.generateTokens({...userDto})

    return {
      accessToken,
      refreshToken,
      user: userDto
    }
  }

  async login(email: string, password: string) {
    const candidate = await UserModel.findOne({
      where: {
        email,
      },
    })

    if (!candidate) {
      throw ApiError.BadRequest(`Пользователь с таким email не существует`)
    }

    const isPassEquals = await bcrypt.compare(password, candidate.password)

    if (!isPassEquals) {
      throw ApiError.BadRequest(`Неверный пароль`)
    }

    const userDto = new UserDto(candidate)
    const tokens = tokenService.generateTokens({...userDto})

    await tokenService.saveToken(candidate.id, tokens.refreshToken)

    return {
      ...tokens,
      user: userDto,
    }
  }
}

const userService = new UserService()

export {userService}