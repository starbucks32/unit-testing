const sum = require('./index')

test('Does sum function exist?', function(){
  expect(sum).toBeDefined();
});

test('Does sum function work as intended?', function(){
  expect(sum(1, 1)).toBe(2);
});
