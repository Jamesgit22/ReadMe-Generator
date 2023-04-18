//   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//   [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
//   [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      console.log('MIT');
      return 'https://img.shields.io/badge/License-MIT-yellow.svg';
    case 'ISC': 
      console.log('ISC');
      return 'https://img.shields.io/badge/License-ISC-blue.svg';
    case 'GPL v3':
      console.log('GPL v3');
      return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
    default:
      console.log('No license');
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return  `# ${answers.projectName}

  ## Description:
        
  ${answers.projectDesc}
    
  ---
  
  ## Table of Contents:
    
  - [Instillation](#instillation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)
  
  ## Instillation:
  
  ${answers.projectIns}
  
  ## Usage:
  
  ${answers.projectUse}
  
  ## ScreenShots:
  
  ## Credits:
  
  ${answers.projectCred}
  
  
  ## License:
  
  This project uses the ${answers.projectLic} license.

  ---
  
  ## Questions:

  Please feel free to get in contact if you have any questions about this project.

  - Github: ${answers.username}
  - Email: ${answers.email}`;
}

module.exports = {
  markDown: generateMarkdown,
  licenseBadge: renderLicenseBadge
};
