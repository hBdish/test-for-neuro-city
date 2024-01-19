import {EMAIL_REGEXP} from "@/common";

enum ValidateErrors {
  EMAIL_ERROR_REGEX = 'Неверно указан email',
  EMAIL_ERROR_LENGTH = 'Длинна email должна быть корректной',
  PASSWORD_ERROR_LENGTH = 'Длинна пароля должна быть корректной',

}

const validateRegexEmail = (email: string) => {
  return EMAIL_REGEXP.test(email);
};

const validateLength = (str: string) => {
  return str.length >= 3 && str.length <= 24
};


function validate(email: string, password: string): ValidateErrors | boolean {
  if (!validateRegexEmail(email)) return ValidateErrors.EMAIL_ERROR_REGEX

  if (!validateLength(email)) return ValidateErrors.EMAIL_ERROR_LENGTH

  if (!validateLength(password)) return ValidateErrors.PASSWORD_ERROR_LENGTH

  return true
}

export {validate}