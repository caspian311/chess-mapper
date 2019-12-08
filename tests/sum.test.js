const { sum, huh } = require('sum');

test('first test', () => {
  expect(sum(1, 2)).toBe(3);
});

test('second test', () => {
  expect(huh()).toBe('bar');
});
