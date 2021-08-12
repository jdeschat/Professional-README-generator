// TODO: Create a function that returns a license badge based on which license is passed in
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== undefined) {
    return `- [License](#license)`;
  } else { return "" };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== undefined) {
    return `## License
This application is rendered under ${license}`;
  } else { return "" };

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Badge](#badge)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Badge
  ${data.badgeLanguages}

  ## Contributors
  ${data.contributing}

  ## Tests
  ${data.tests}
  ![GitHub license](https://img.shields.io/badge/test-100%25-success)

  ## Questions
  ${data.questions}
  My Github username is ${data.githubUsername}, which can be accessed here ${data.githubLink}

  You can reach me at ${data.email}.

  Below are links to my demo video and the video location on my Github, respectfully:
  - [Link to Demo Video](https://youtu.be/)
  - [Video location in Github](https://github.com/jdeschat/potential-enigma/tree/main/assets)

`;
}

module.exports = generateMarkdown;
