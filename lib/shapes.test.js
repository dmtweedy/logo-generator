const { Triangle, Circle, Square } = require('./shapes');

test('Triangle renders correct SVG string', () => {
  const triangle = new Triangle();
  triangle.setColor('blue');
  triangle.setLogoText('DMT');
  expect(triangle.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="75,150 225,150 150,25" fill="blue" /><text x="150" y="135" font-size="40" text-anchor="middle" fill="blue">DMT</text></svg>`);
});

test('Circle renders correct SVG string', () => {
  const circle = new Circle();
  circle.setColor('green');
  circle.setLogoText('DMT');
  expect(circle.render()).toEqual('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="green" /><text x="150" y="135" font-size="40" text-anchor="middle" fill="green">DMT</text></svg>');
});

test('Square renders correct SVG string', () => {
  const square = new Square();
  square.setColor('red');
  square.setLogoText('DMT');
  expect(square.render()).toEqual('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="150" height="150" fill="red" /><text x="150" y="135" font-size="40" text-anchor="middle" fill="red">DMT</text></svg>');
});