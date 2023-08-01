const { Triangle, Circle, Square } = require('./lib/shapes');
const fs = require('fs');

async function promptUserInput() {
  const inquirer = (await import('inquirer')).default; // Use dynamic import

  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'logoText',
      message: 'Enter the text for the logo (up to three characters):',
      validate: (input) => {
        if (input.length > 3) {
          return 'Please enter up to three characters only.';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (color keyword or hexadecimal number):',
      default: 'white',
    },
    {
      type: 'list',
      name: 'shapeType',
      message: 'Select a shape for the logo:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (color keyword or hexadecimal number):',
      default: 'green',
    },
  ]);

  return userInput;
}

function generateLogo(userInput) {
  const { logoText, textColor, shapeType, shapeColor } = userInput;

  let shape;
  switch (shapeType) {
    case 'circle':
      shape = new Circle();
      break;
    case 'triangle':
      shape = new Triangle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      console.error('Invalid shape type');
      return;
  }

  shape.setColor(shapeColor);

  const svgLogo = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">${logoText}</text>
    </svg>
  `;

  // write the SVG logo to the file inside the examples folder
  fs.writeFileSync('./examples/logo.svg', svgLogo);
}

module.exports = { generateLogo };


promptUserInput()
  .then(generateLogo)
  .then(() => console.log('Generated logo.svg'))
  .catch((error) => console.error(error));