export default class InvarError extends Error {
  constructor (message, opts = {}) {
    super(message)
    this.name = 'Invariant Violation'
    Object.assign(this, opts)
  }
}
