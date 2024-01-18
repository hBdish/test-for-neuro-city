import {$api, AuthInfoRequest, AuthInfoResponse} from "@/common";

class AuthService {
  static registration(userReg: AuthInfoRequest) {
    return $api.post<AuthInfoResponse>('/registration', {
      ...userReg
    })
  }

  static login(userReg: AuthInfoRequest) {
    return $api.post<AuthInfoResponse>('/login', {
      ...userReg
    })
  }
}

export {AuthService}