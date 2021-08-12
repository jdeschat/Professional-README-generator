// Created a function that returns a license badge based on which license is passed in

const inquirer = require("inquirer");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "Mozilla Public License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else { return "" };
}

// Created a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== undefined) {
    return `- [License](#license)`;
  } else { return "" };
}

// Created a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== undefined) {
    return ``;
  } else {
    return

  };

}

// Created a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}

  [![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  \`\`\`JavaScript

  npm install inquirer

  var inquirer = require('inquirer');
  inquirer
    .prompt([
      /* Pass your questions in here */
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
 \`\`\`
 
  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributors
  To contribute to ${data.repoName}, clone this repo locally and commit your code on a separate branch.

  Contributors:

<a href="https://github.com/${data.username}/${data.repoName}/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=${data.username}/${data.repoName}" />
</a>

Made with [contributors-img](https://contrib.rocks).

  ## Tests
  ![GitHub license](https://img.shields.io/badge/test-100%25-success)

  ## Questions
  My Github username is ${data.githubUsername}, which can be accessed here ${data.githubLink}.

  The Github page for this project can be accessed using the following link: ${data.githubPages}.

  You can reach me at ${data.email}.
  
  ![alt]https://github.com/jdeschat/Professional-README-generator/blob/main/assets/images/profile.jpg
  Below are links to my demo video and the video location on my Github, respectfully:
  - [Link to Demo Video](https://youtu.be/)
  - [Video location in Github](https://github.com/jdeschat/Professional-README-generator/tree/main/assets/video)
`;
}

module.exports = generateMarkdown;
