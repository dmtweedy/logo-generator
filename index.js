const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');
const fs = require('fs');

function promptUserInput() {
  return inquirer.prompt([

  ]);
}

function generateLogo(userInput) {

}

promptUserInput()
  .then(generateLogo)
  .then(() => console.log('Generated logo.svg'))
  .catch((error) => console.error(error));