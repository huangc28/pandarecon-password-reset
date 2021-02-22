#!/usr/bin/env node

const crypto = require("crypto");

// Accept first argument from the command line.
const [pCriteria] = process.argv.slice(2, 3)

if (!pCriteria) {
  console.error('please enter a password attempt to encrypt')

  process.exit(1)
}

const password = crypto
    .createHash('sha256')
    .update(pCriteria)
    .digest('hex');

console.log('your encrypted password', password)

