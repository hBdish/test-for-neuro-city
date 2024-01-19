interface AuthInfoRequest {
  email: string,
  password: string
}

interface AuthInfoResponse {
  accessToken: string,
  refreshToken: string,
  user: AuthInfoRequest
}

export type {AuthInfoRequest, AuthInfoResponse}