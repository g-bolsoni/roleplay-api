import test from 'japa'

test.group('Example Test Group', () => {
  test('should pass this example test', (assert) => {
    const sum = 1 + 1
    assert.equal(sum, 2)
  })
})
