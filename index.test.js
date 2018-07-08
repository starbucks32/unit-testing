const { sum, subtract, multiply, divide } = require('./index')

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

test('Does multiply function exist?', function(){
  expect(multiply).toBeDefined();
});

test('Does multiply function work as intended?', function(){
  expect(multiply(5, 2)).toBe(10);
});

test('Does divide function exist?', function(){
  expect(divide).toBeDefined();
});

test('Does divide function work as intended?', function(){
  expect(divide(10, 5)).toBe(2);
});
