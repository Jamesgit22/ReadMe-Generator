// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input

// q1 - What is the title of your project?
// q2 - Please enter a descriptiong of your project
// q3 - How do you install your project?
// q4 - Describe a use case for your project - type input
// q5 - Are there any screenshots of your project? list - choices: ['yes', 'no']
// q6 - Any credits to mention? (make a checkbox) choices: ['collaborators', 'tutorials', 'third-party assets']
// q7 - Is there a liscense for the project? list - choices: ['MIT', 'GPL', 'ISC']
const questions = [
  "What is the title of your project?",
  "Please enter a description of your project",
  "How do you install your project?",
  "Describe a use case for your project",
  "Are there any credits to mention?",
  "Is there a license for the project?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("Success");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "projectName",
      },
      {
        type: "input",
        message: questions[1],
        name: "projectDesc",
      },
      {
        type: "input",
        message: questions[2],
        name: "projectIns",
      },
      {
        type: "input",
        message: questions[3],
        name: "projectUse",
      },
      {
        type: "checkbox",
        message: questions[4],
        choices: ["collaborators ", "tutorials ", "third-party assets "],
        name: "projectCred",
      },
      {
        type: "list",
        message: questions[5],
        choices: ["MIT", "GPL", "ISC"],
        name: "projectLic",
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      writeToFile(`README.md`, 
    `# ${answers.projectName}

## Description:
      
${answers.projectDesc}
  
---

## Table of Contents:
  
- [Instillation](#instillation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Instillation:

${answers.projectIns}

## Usage:

${answers.projectUse}

## ScreenShots:

## Credits:

${answers.projectCred}


## License:

This project uses the ${answers.projectLic} license.`);
      

      console.log(answers);
    })
    .catch((error) => console.log(error));

  
}

// Function call to initialize app
init();
