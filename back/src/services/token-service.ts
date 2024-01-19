import jwt from 'jsonwebtoken'

import {ENV} from "../common";
import {UserDtoType} from "../common/dto";
import {TokenModel} from "../db";


class TokenService {
  generateTokens(payload: UserDtoType) {
    const accessToken = jwt.sign(payload, ENV.JWT_ACCESS_SECRET, {expiresIn: '1m'})

    // хотел организовать обновление токена, но тк в ТЗ небыло сказано - в итоге отказался от такой идеи
    const refreshToken = jwt.sign(payload, ENV.JWT_REFRESH_SECRET, {expiresIn: '30d'})

    return {
      accessToken,
      refreshToken,
    }
  }

  async saveToken(userId: number, refreshToken: string) {
    const tokenData = await TokenModel.findOne({
      where: {UserId: userId},
    })

    if (!!tokenData) {
      await TokenModel.update(
        {
          refreshToken,
        },
        {
          where: {
            UserId: userId,
          },
        },
      )

      return tokenData
    }

    const token = await TokenModel.create({
      UserId: userId,
      refreshToken,
    })

    return token
  }

  validateAccessToken(token: string) {
    try {
      const userData = jwt.verify(token, ENV.JWT_ACCESS_SECRET)
      return userData
    } catch (e) {
      return null
    }
  }
}

const tokenService = new TokenService()

export {tokenService}