import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/User'

export const UserFactory = Factory.define(User, ({ faker }) => {
  const userPassword = faker.internet.password()

  return {
    username: faker.name.findName(),
    email: faker.internet.email(),
    password: userPassword,
    avatar: faker.internet.url(),
  }
}).build()
