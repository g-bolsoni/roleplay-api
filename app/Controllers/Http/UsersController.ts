import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserService from 'App/Services/UserService'
import UserValidator from 'App/Validators/UserValidator'

export default class UsersController {
  public async createUser({ request, response }: HttpContextContract) {
    const userData = await request.validate(UserValidator)

    try {
      const service = new UserService()
      const createdUser = await service.createUser(userData)
      return response.created(createdUser)
    } catch (error) {
      throw new Error('Validation failed')
    }
  }
}
