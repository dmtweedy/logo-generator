const { Triangle, Circle, Square } = require('./shapes');


test('Triangle renders correct SVG string', () => {
  const triangle = new Triangle();
  triangle.setColor("blue");
  expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');  
});

test('Circle renders correct SVG string', () => {
  const circle = new Circle();
  circle.setColor("green");
  const expectedSVG = '<circle cx="150" cy="100" r="80" fill="green" />';
  expect(circle.render()).toEqual(expectedSVG);
});

test('Square renders correct SVG string', () => {
  const square = new Square();
  square.setColor("red");

});