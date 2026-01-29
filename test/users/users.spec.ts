import test from 'japa'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Example Test Group', () => {
  test.only('should create a user', async (assert) => {
    const validUser = {
      username: 'John Doe',
      email: 'john.doe@example.com',
      password: 'securePassword123',
      avatar: 'https://example.com/avatar.jpg',
    }

    const { body } = await supertest(BASE_URL).post('/users').send(validUser).expect(201)

    assert.exists(body.id, 'Id should exist')
    assert.notExists(body.password, 'Password should not be returned')
    assert.equal(body.username, validUser.username)
    assert.equal(body.email, validUser.email)
    assert.equal(body.avatar, validUser.avatar)
  })
})
