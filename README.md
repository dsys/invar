<p align="center"><img src="https://raw.githubusercontent.com/pavlovml/invar/master/resources/logo.png" alt="logo" width="220" /></p>

<p align="center"><em><strong>The reign of poor error messages is over!</strong></em><br />Expressive runtime invariants for JavaScript.</p>

<p align="center"><a href="https://travis-ci.org/pavlovml/invar"><img src="https://img.shields.io/travis/pavlovml/invar.svg" alt="TravisCI shield" /></a> <a href="https://www.npmjs.com/package/invar"><img src="https://img.shields.io/npm/v/invar.svg" alt="npm shield" /></a> <a href="http://standardjs.com"><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat" alt="JavaScript Standard Style" /></a></p>

## Installation

    $ npm install invar --save

## Usage

```javascript
import invar from 'invar'
```

### `invar(message)`

Check for truthiness.

#### Example

```javascript
invar(2 + 2 === 5, "I'm sorry Dave, I'm afraid I can't do that.")
```
 
#### Throws

    Invariant Violation: I'm sorry Dave, I'm afraid I can't do that.

### `invar.equal(actual, expected, message)`

Check for shallow equality.

#### Example

```javascript
invar.equal(2 + 2, 5, "Daisy, Daisy, give me your answer do.")
```

#### Throws

    Invariant Violation: Daisy, Daisy, give me your answer do.
      Actual: 4
      Expected: 5

### `invar.fail(message)`

Always fail.

#### Example

```javascript
invar.fail("I'm afraid. I'm afraid, Dave. Dave, my mind is going.")
```

#### Throws

    Invariant Violation: I'm afraid. I'm afraid, Dave. Dave, my mind is going.

## Development

Invar uses [JavaScript Standard Style](https://github.com/feross/standard), [Babel](https://babeljs.io/) for ES6+ support, and [Jest](http://facebook.github.io/jest/) for testing.

    $ git clone git@github.com:pavlovml/invar.git
    $ make test

To run the tests on file changes:

    $ env WATCH=true make test

## License

[BSD 3-Clause](https://github.com/pavlovml/invar/blob/master/LICENSE)
