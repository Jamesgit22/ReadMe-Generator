// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMod = require("./utils/generateMarkdown");
// const renderLicenseBadge = require("./utils/renderLicenseBadge");
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
  "What is your GitHub Username?",
  "What is your email address?"
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
      {
        type: "input",
        message: questions[6],
        name: "username",
      },
      {
        type: "input",
        message: questions[7],
        name: "email",
      }
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      generateMod.licenseBadge(answers.projectLic);
      generateMod.licenseLinkFunc(answers.projectLic);
      writeToFile(`README.md`, generateMod.markDown(answers));
      

      console.log(answers);
    })
    .catch((error) => console.log(error));

  
}

// Function call to initialize app
init();
