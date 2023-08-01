const { Triangle, Circle, Square } = require('./shapes');

test('Triangle renders correct SVG string', () => {
  const triangle = new Triangle();
  triangle.setShapeColor('blue'); // shape color
  triangle.setTextColor('white'); // text color
  triangle.setLogoText('DMT'); // logo text
  expect(triangle.render()).toEqual('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="75,150 225,150 150,25" fill="blue" /><text x="150" y="135" font-size="40" text-anchor="middle" fill="white">DMT</text></svg>');
});

test('Circle renders correct SVG string', () => {
  const circle = new Circle();
  circle.setShapeColor('green');
  circle.setTextColor('white');
  circle.setLogoText('DMT'); 
  expect(circle.render()).toEqual('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="green" /><text x="150" y="135" font-size="40" text-anchor="middle" fill="white">DMT</text></svg>');
});

test('Square renders correct SVG string', () => {
  const square = new Square();
  square.setShapeColor('red');
  square.setTextColor('white');
  square.setLogoText('DMT'); 
  expect(square.render()).toEqual('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="50" width="150" height="150" fill="red" /><text x="150" y="135" font-size="40" text-anchor="middle" fill="white">DMT</text></svg>');
});