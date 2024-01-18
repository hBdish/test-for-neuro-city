import jwt from 'jsonwebtoken'
import {ENV} from "../common";
import {UserDtoType} from "../dto";
import {TokenModel} from "../models";

class TokenService {
  generateTokens(payload: UserDtoType) {
    const accessToken = jwt.sign(payload, ENV.JWT_ACCESS_SECRET, {expiresIn: '30m'})
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
}

const tokenService = new TokenService()

export {tokenService}