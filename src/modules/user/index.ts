import { Either, left, right } from 'fp-ts/Either'

export type User = {
  id: string
}

export type LoginError = {
  message: string
}

export const authenticateUser = (username: string, password: string): Either<LoginError, User> => {
  if (password.length <= 6) return left({ message: 'Password should have length greater than 6'})

  if(!(/[A-Z]/g.test(password))) return left({ message: 'Password should have at least one capital letter'})
  
  return right({ id: 'uuid' })
}