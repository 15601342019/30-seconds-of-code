const expect = require('expect');
const unary = require('./unary.js');


  test('unary is a Function', () => {
  expect(unary).toBeInstanceOf(Function);
});
  test('Discards arguments after the first one', () => {
  expect(['6', '8', '10'].map(unary(parseInt)), [6, 8, 10]).toEqual()
});
  

