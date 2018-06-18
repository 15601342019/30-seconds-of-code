const expect = require('expect');
const findLast = require('./findLast.js');


  test('findLast is a Function', () => {
  expect(findLast).toBeInstanceOf(Function);
});
  test('Finds last element for which the given function returns true', () => {
  expect(findLast([1, 2, 3, 4], n => n % 2 === 1), 3).toBe()
});
  

