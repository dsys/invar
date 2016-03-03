import InvarError from './InvarError'
import _ from 'lodash'
import stringify from 'json-stable-stringify'

function makeInvarFnObj (obj) {
  const fn = obj.invar

  for (let k in obj) {
    if (k !== 'invar') {
      fn[k] = obj[k]
    }
  }

  return fn
}

function throwError (message, opts) {
  const stack =
    `Invariant Violation: ${message}\n` +
      (new Error()).stack
      .split('\n')
      .splice(3)
      .join('\n')

  throw new InvarError(
    message,
    _.defaults({ stack }, opts))
}

export default makeInvarFnObj({
  invar (cond, message, opts = {}) {
    if (!cond) {
      throwError(message, opts)
    }
  },

  fail (message, opts = {}) {
    throwError(message, opts)
  },

  equal (actual, expected, message, opts = {}) {
    if (!_.isEqual(actual, expected)) {
      throwError(
        `${message}\n  Actual: ${stringify(actual)}\n  Expected:   ${stringify(expected)}`,
        _.defaults({ actual, expected }, opts))
    }
  }
})
