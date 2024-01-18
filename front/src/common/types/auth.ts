interface AuthInfoRequest {
  email: string,
  password: string
}

interface AuthInfoResponse {
  accessToken: string,
  refreshToken: string,
  user: {
    email: string,
    password: string
  }
}

export type {AuthInfoRequest, AuthInfoResponse}