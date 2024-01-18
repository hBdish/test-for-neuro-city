import {$api, UserInfoResponse} from "@/common";

class UserService {
  static getAllUsers() {
    return $api.get<UserInfoResponse[]>('/users')
  }
}

export {UserService}