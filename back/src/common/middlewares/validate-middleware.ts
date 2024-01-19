import {NextFunction} from "express";
import {ApiError} from "../errors/exceptions";
import {LoginRequest} from "../../controllers/user/types/user-controller-types";

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;


const validateEmail = (email: string) => {
  return EMAIL_REGEXP.test(email);
};

export default function (req: LoginRequest, res: unknown, next: NextFunction) {
  try {
    const {email} = req.body

    if (!validateEmail(email)) {

      return next(ApiError.EmailValidationError())
    }

    next()
  } catch (e) {
    return next(ApiError.UnauthorizedError())
  }
}