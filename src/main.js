#!/usr/bin/env node

const sum = require('./sum').sum;
const huh = require('./sum').huh;

let helloWorld = 'Hello World!';

console.log(`${helloWorld} - my sum is ${sum(1, 2)}`);
console.log(`oi! - ${huh()}`);
