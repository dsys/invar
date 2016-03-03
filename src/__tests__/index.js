jest.dontMock('../InvarError')
jest.dontMock('../index')
jest.dontMock('json-stable-stringify')
const invariant = require('../index').default

describe('invariant', () => {
  it('does nothing when the condition is truthy', () => {
    expect(() => invariant(true, 'test')).not.toThrow()
  })

  it('throws an error when the condition is falsy', () => {
    try {
      invariant(false, 'test')
      expect(false).toBeTruthy()
    } catch (ex) {
      expect(ex.name).toBe('Invariant Violation')
      expect(ex.message).toBe('test')
    }
  })
})

describe('invariant.fail', () => {
  it('always throws an error', () => {
    try {
      invariant(false, 'test')
      expect(false).toBeTruthy()
    } catch (ex) {
      expect(ex.name).toBe('Invariant Violation')
      expect(ex.message).toBe('test')
    }
  })
})

describe('invariant.equal', () => {
  it('does nothing when the two values are equal', () => {
    expect(() => invariant.equal('foo', 'foo', 'test')).not.toThrow()
  })

  it('throws an error when the two values are different', () => {
    try {
      invariant.equal('foo', 'bar', 'Lorem ipsum.')
      expect(false).toBeTruthy()
    } catch (ex) {
      expect(ex.name).toBe('Invariant Violation')
      expect(ex.message).toBe('Lorem ipsum.\n  Actual: "foo"\n  Expected:   "bar"')
      expect(ex.actual).toBe('foo')
      expect(ex.expected).toBe('bar')
    }
  })
})
