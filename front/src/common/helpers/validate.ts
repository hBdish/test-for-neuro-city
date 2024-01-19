import {EMAIL_REGEXP} from "@/common";

enum ValidateErrors {
  EMAIL_ERROR = 'Неверно указан email',
  PASSWORD_ERROR = 'Неверно указан пароль',
}

const validateRegexEmail = (email: string) => {
  return EMAIL_REGEXP.test(email);
};

const validateLength = (str: string) => {
  return str.length >= 3 && str.length <= 24
};


function validate(email: string, password: string): ValidateErrors | boolean {
  if (!validateRegexEmail(email) || !validateLength(email)) return ValidateErrors.EMAIL_ERROR

  if (!validateLength(password)) return ValidateErrors.PASSWORD_ERROR

  return true
}

export {validate}