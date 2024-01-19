/**
 * Класс для обработки ошибок
 */

class ApiError extends Error {
  status
  errors

  constructor(status: number, message: string, errors: Error[] = []) {
    super(message)
    this.status = status
    this.errors = errors
  }

  static UnauthorizedError() {
    return new ApiError(401, 'Пользователь не авторизован')
  }

  static EmailValidationError() {
    return new ApiError(403, 'Неправильно указан email')
  }

  static PasswordValidationError() {
    return new ApiError(403, 'Неправильно указан пароль')
  }

  static BadRequest(message: string, errors: Error[] = []) {
    return new ApiError(400, message, errors)
  }
}

export {ApiError}
