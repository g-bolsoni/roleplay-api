import { UserFactory } from 'Database/factories'
import test from 'japa'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Example Test Group', (group) => {
  test('should create a user', async (assert) => {
    const userInstance = await UserFactory.make()
    const userPayload = {
      username: userInstance.username,
      email: userInstance.email,
      password: userInstance.password,
      password_confirmation: userInstance.password,
      avatar: userInstance.avatar,
    }

    const { body } = await supertest(BASE_URL).post('/users').send(userPayload).expect(201)

    assert.exists(body.id, 'Id should exist')
    assert.notExists(body.password, 'Password should not be returned')
    assert.equal(body.username, userPayload.username)
    assert.equal(body.email, userPayload.email)
    assert.equal(body.avatar, userPayload.avatar)
  })

  test('should fail when email already exists', async () => {
    const user = {
      username: 'Jane Doe',
      password: 'securePassword123',
      password_confirmation: 'securePassword123',
    }

    const { email } = await UserFactory.create()

    await supertest(BASE_URL)
      .post('/users')
      .send({ ...user, email })
      .expect(409)
  })

  test('should fail when passwords do not match', async () => {
    const userInstance = await UserFactory.make()
    const userPayload = {
      username: userInstance.username,
      email: userInstance.email,
      password: userInstance.password,
      password_confirmation: 'differentPassword123',
      avatar: userInstance.avatar,
    }

    await supertest(BASE_URL).post('/users').send(userPayload).expect(422)
  })

  test('should fail when required fields are missing', async () => {
    await supertest(BASE_URL).post('/users').send({}).expect(422)
  })

  test('should fail with invalid email format', async () => {
    const userInstance = await UserFactory.make()
    const userPayload = {
      username: userInstance.username,
      email: 'invalid-email',
      password: userInstance.password,
      password_confirmation: userInstance.password,
      avatar: userInstance.avatar,
    }

    await supertest(BASE_URL).post('/users').send(userPayload).expect(422)
  })

  test('should fail with weak password', async () => {
    const userInstance = await UserFactory.make()
    const userPayload = {
      username: userInstance.username,
      email: userInstance.email,
      password: '123',
      password_confirmation: '123',
      avatar: userInstance.avatar,
    }

    await supertest(BASE_URL).post('/users').send(userPayload).expect(422)
  })

  test('should handle optional avatar field', async (assert) => {
    const userInstance = await UserFactory.make()
    const userPayload = {
      username: userInstance.username,
      email: userInstance.email,
      password: userInstance.password,
      password_confirmation: userInstance.password,
    }

    const { body } = await supertest(BASE_URL).post('/users').send(userPayload).expect(201)

    assert.exists(body.id, 'Id should exist')
    assert.equal(body.username, userPayload.username)
  })

  // Database transactions are handled globally in japaFile.ts
})
