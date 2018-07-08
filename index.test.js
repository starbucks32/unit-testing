const { sum, subtract } = require('./index')

test('Does sum function exist?', function(){
  expect(sum).toBeDefined();
});

test('Does sum function work as intended?', function(){
  expect(sum(1, 1)).toBe(2);
});

test('Does subtract function exist?', function(){
  expect(subtract).toBeDefined();
});

test('Does subtract function work as intended?', function(){
  expect(subtract(2, 1)).toBe(1);
});
