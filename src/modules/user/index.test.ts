import { left } from 'fp-ts/Either'
import { authenticateUser } from '.'

describe('[func] authenticateUser', () => {
  it('should return error if password length is less than 6', () => {
    const result = authenticateUser('user', 'pass')
    expect(result).toEqual(left({ message: 'Password should have length greater than 6'}))
  })

  it('should return error if there is none capital letter', () => {
    const result = authenticateUser('user', 'password')
    expect(result).toEqual(left({ message: 'Password should have at least one capital letter'}))
  })
})