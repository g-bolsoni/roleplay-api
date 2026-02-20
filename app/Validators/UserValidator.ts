import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    username: schema.string({ trim: true }, [rules.minLength(2), rules.maxLength(50)]),
    email: schema.string({}, [rules.email()]),
    password: schema.string({}, [rules.minLength(6), rules.confirmed()]),
    avatar: schema.string.optional({ trim: true }, [rules.url()]),
  })

  public messages: CustomMessages = {
    'username.required': 'Username is required',
    'username.minLength': 'Username must be at least 2 characters long',
    'username.maxLength': 'Username cannot exceed 50 characters',
    'email.required': 'Email is required',
    'email.email': 'Provide a valid email address',
    'email.unique': 'Email already in use',
    'password.required': 'Password is required',
    'password.minLength': 'Password must be at least 6 characters long',
    'password.confirmed': 'Password confirmation does not match',
    'avatar.url': 'Avatar must be a valid URL',
  }
}
