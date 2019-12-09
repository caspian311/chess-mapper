const { sum, huh } = require('sum');

test('first test', () => {
  expect(sum(1, 2)).toBe(4);
});

test('something', () => {
  expect(1).toBe(1);
});

test('second test', () => {
  expect(huh()).toBe('bar');
});
