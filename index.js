const fs = require('fs');

async function promptUserInput() {
  const inquirer = (await import('inquirer')).default; // dynamic import

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
      message: (answers) => {
        switch (answers.shapeType) {
          case 'triangle':
            return 'Enter the shape color (color keyword or hexadecimal number) Default:';
          case 'circle':
            return 'Enter the shape color (color keyword or hexadecimal number) Default:';
          case 'square':
            return 'Enter the shape color (color keyword or hexadecimal number) Default:';
        }
      },
      default: (answers) => {
        switch (answers.shapeType) {
          case 'triangle':
            return 'blue';
          case 'circle':
            return 'green';
          case 'square':
            return 'red';
          default:
            return 'white';
        }
      },
    },
  ]);

  return userInput;
}

async function generateLogo() {
  const userInput = await promptUserInput();
  const { logoText, textColor, shapeType, shapeColor } = userInput;

  // imports for the shapes
  const { Triangle, Circle, Square } = require('./lib/shapes');

  let shape;
  switch (shapeType) {
    case 'triangle':
      shape = new Triangle();
      break;
    case 'circle':
      shape = new Circle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      console.error('Invalid shape type.');
      process.exit(1);
  }

  shape.setLogoText(logoText); // set logo text for the shape if provided
  shape.setTextColor(textColor); // set text color for the shape if provided
  shape.setShapeColor(shapeColor); //set shape color if provided

  const svgLogo = shape.render(); // save the generated SVG to the svgLogo variable

  // save to logo.svg in the examples folder
  fs.writeFile('./examples/logo.svg', svgLogo, (err) => {
    if (err) {
      console.error('Error saving SVG logo:', err);
    } else {
      console.log('Generated logo.svg');
    }
  });
  console.log(svgLogo); // send to console for testing
}

generateLogo().catch((error) => console.error(error));

module.exports = { generateLogo };