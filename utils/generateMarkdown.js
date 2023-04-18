//   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//   [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
//   [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

let licenseImg;
let licenseLink;
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      console.log('MIT');
      licenseImg = 'https://img.shields.io/badge/License-MIT-yellow.svg';
      break;
    case 'ISC': 
      console.log('ISC');
      licenseImg = 'https://img.shields.io/badge/License-ISC-blue.svg';
      break;
    case 'GPL v3':
      console.log('GPL v3');
      licenseImg = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
      break;
    default:
      console.log('No license');
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      console.log('MIT link');
      licenseLink = 'https://opensource.org/licenses/MIT';
      break;
    case 'ISC': 
      console.log('ISC link');
      licenseLink = 'https://opensource.org/licenses/ISC';
      break;
    case 'GPL v3':
      console.log('GPL v3 link');
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    default:
      console.log('No license');
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return  `# ${answers.projectName}

  ![${answers.projectLic} Badge](${licenseImg})

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
  
  This project uses the [${answers.projectLic}](${licenseLink}) license.

  ---
  
  ## Questions:

  Please feel free to get in contact if you have any questions about this project.

  - Github: ${answers.username}
  - Email: ${answers.email}`;
}

module.exports = {
  markDown: generateMarkdown,
  licenseBadge: renderLicenseBadge,
  licenseLinkFunc: renderLicenseLink
};
