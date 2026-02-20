import User from 'App/Models/User'

export default class UserRepository {
  public async create(payload: any) {
    return await User.create(payload)
  }

  public async findByEmail(email: string) {
    return await User.query().where('email', email).first()
  }

  public async findById(id: string) {
    return await User.find(id)
  }

  public async getAll() {
    return await User.all()
  }
}
