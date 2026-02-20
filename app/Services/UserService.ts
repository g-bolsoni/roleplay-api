import Hash from '@ioc:Adonis/Core/Hash'
import { UserAlreadyExistsException } from 'App/Exceptions/Handler'
import UserRepository from 'App/Repositories/UserRepository'

export default class UserService {
  public async createUser(userData) {
    const userRepository = new UserRepository()
    const existing = await userRepository.findByEmail(userData.email)

    if (existing) {
      throw new UserAlreadyExistsException('User already exists')
    }

    const hashedPassword = await Hash.make(userData.password)
    return await userRepository.create({ ...userData, password: hashedPassword })
  }

  public async getUsers() {
    const userRepository = new UserRepository()
    return await userRepository.getAll()
  }
}
