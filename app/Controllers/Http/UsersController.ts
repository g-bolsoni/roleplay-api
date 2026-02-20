import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserService from 'App/Services/UserService'
import UserValidator from 'App/Validators/UserValidator'

export default class UsersController {
  public async createUser({ request, response }: HttpContextContract) {
    const userData = await request.validate(UserValidator)

    const service = new UserService()
    const createdUser = await service.createUser(userData)
    return response.created(createdUser)
  }

  public async getAllUsers({ response }: HttpContextContract) {
    const service = new UserService()
    const createdUser = await service.getUsers()
    return response.ok(createdUser)
  }
}
