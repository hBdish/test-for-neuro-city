interface UserDtoType {
  id: number
  email: string
}

export class UserDto {
  id: number
  email: string

  constructor(model: UserDtoType) {
    this.id = model.id
    this.email = model.email
  }
}

export type {UserDtoType}
