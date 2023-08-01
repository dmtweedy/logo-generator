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

  }

  shape.setColor(shapeColor);

  fs.writeFileSync('logo.svg', svgLogo);


promptUserInput()
  .then(generateLogo)
  .then(() => console.log('Generated logo.svg'))
  .catch((error) => console.error(error));