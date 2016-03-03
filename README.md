# invar

[![TravisCI shield](https://img.shields.io/travis/pavlovml/invar.svg)](https://travis-ci.org/pavlovml/invar) [![npm shield](https://img.shields.io/npm/v/invar.svg)](https://www.npmjs.com/package/invar) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

Expressive runtime invariants for JavaScript. **The reign of bad errors is over!** 

## Installation

    $ npm install invar --save

## Usage

```javascript
import invar from 'invar'

// Specify runtime invariants.
invar(2 + 2 === 4, "I'm sorry Dave, I'm afraid I can't do that.")
invar.equal(2 + 2, 4, "Daisy, Daisy, give me your answer do.")
invar.fail("I'm afraid. I'm afraid, Dave. Dave, my mind is going.")

// More coming soon...
```

## Development

Invar uses [JavaScript Standard Style](https://github.com/feross/standard), [Babel](https://babeljs.io/) for ES6+ support, and [Jest](http://facebook.github.io/jest/) for testing.

    $ git clone git@github.com:pavlovml/invar.git
    $ make test

To run the tests on file changes:

    $ env WATCH=true make test

## License

[BSD 3-Clause](https://github.com/pavlovml/invar/blob/master/LICENSE)
