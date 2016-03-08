jest.dontMock('../InvarError')
jest.dontMock('../index')
jest.dontMock('json-stable-stringify')
const invar = require('../index').default

describe('invar', () => {
  it('does nothing when the condition is truthy', () => {
    expect(() => invar(true, 'test')).not.toThrow()
  })

  it('throws an error when the condition is falsy', () => {
    try {
      invar(false, 'test')
      expect(false).toBeTruthy()
    } catch (ex) {
      expect(ex.name).toBe('Invariant Violation')
      expect(ex.message).toBe('test')
    }
  })
})

describe('invar.fail', () => {
  it('always throws an error', () => {
    try {
      invar(false, 'test')
      expect(false).toBeTruthy()
    } catch (ex) {
      expect(ex.name).toBe('Invariant Violation')
      expect(ex.message).toBe('test')
    }
  })
})

describe('invar.req', () => {
  it('throws a generic error when no argument name is provided', () => {
    function fn (daisy = invar.req()) {}
    try {
      fn()
      expect(false).toBeTruthy()
    } catch (ex) {
      expect(ex.name).toBe('Invariant Violation')
      expect(ex.message).toBe('Required argument not provided.')
    }
  })

  it('throws a specific error when an argument name is provided', () => {
    function fn (daisy = invar.req('daisy')) {}
    try {
      fn()
      expect(false).toBeTruthy()
    } catch (ex) {
      expect(ex.name).toBe('Invariant Violation')
      expect(ex.message).toBe("Required argument 'daisy' not provided.")
    }
  })
})

describe('invar.equal', () => {
  it('does nothing when the two values are equal', () => {
    expect(() => invar.equal('foo', 'foo', 'test')).not.toThrow()
  })

  it('throws an error when the two values are different', () => {
    try {
      invar.equal('foo', 'bar', 'Lorem ipsum.')
      expect(false).toBeTruthy()
    } catch (ex) {
      expect(ex.name).toBe('Invariant Violation')
      expect(ex.message).toBe('Lorem ipsum.\n    actual: "foo"\n  expected: "bar"')
      expect(ex.actual).toBe('foo')
      expect(ex.expected).toBe('bar')
    }
  })
})

describe('invar.notEqual', () => {
  it('does nothing when the two values are unequal', () => {
    expect(() => invar.notEqual('foo', 'bar', 'test')).not.toThrow()
  })

  it('throws an error when the two values are the same', () => {
    try {
      invar.notEqual('foo', 'foo', 'Lorem ipsum.')
      expect(false).toBeTruthy()
    } catch (ex) {
      expect(ex.name).toBe('Invariant Violation')
      expect(ex.message).toBe('Lorem ipsum.\n    actual: "foo"\n  expected: not "foo"')
      expect(ex.actual).toBe('foo')
      expect(ex.expected).toBe('foo')
    }
  })
})
