const { Triangle, Circle, Square } = require('./shapes');

test('Triangle renders correct SVG string', () => {
  const triangle = new Triangle();
  triangle.setColor('blue');
  expect(triangle.render()).toEqual('<polygon points="75, 150 225, 150 150, 25" fill="blue" /><text x="150" y="135" font-size="60" text-anchor="middle" fill="white"></text>');
});

test('Circle renders correct SVG string', () => {
  const circle = new Circle();
  circle.setColor('green');
  expect(circle.render()).toEqual('<circle cx="150" cy="150" r="100" fill="green" /><text x="150" y="135" font-size="60" text-anchor="middle" fill="white"></text>');
});

test('Square renders correct SVG string', () => {
  const square = new Square();
  square.setColor('red');
  expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="red" /><text x="150" y="135" font-size="60" text-anchor="middle" fill="white"></text>');
});