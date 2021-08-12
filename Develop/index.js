// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub Username (Required)',
        validate: githubUsername => {
            if (githubUsername) {
                return true;
            } else {
                console.log('Please enter your Github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'repoName',
        message: 'Enter your Repository Name (Required)',
        validate: repoName => {
            if (repoName) {
                return true;
            } else {
                console.log('Please enter your Github Repository Name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubLink',
        message: 'Enter your GitHub profile link (Required)',
        validate: githubLink => {
            if (githubLink) {
                return true;
            } else {
                console.log('Please enter your Github profile link!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubPages',
        message: 'Enter your GitHub Pages link (Required)',
        validate: githubPagesLink => {
            if (githubPagesLink) {
                return true;
            } else {
                console.log('Please enter your Github Pages link!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to enter a project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide some information about your installation:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide some information your usage:'
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to enter some information about your "License" section?',
        default: true
    },
    {
        type: 'list',
        name: 'license',
        message: 'Provide some information your license:',
        choices: ['MIT', 'Apache 2.0', 'Mozilla Public License 2.0'],
        when: ({ confirmLicense }) => confirmLicense
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// Created a function to initialize app
function init() {
    inquirer.prompt(questions).then(responses => {
        writeToFile("README.md", generateMarkdown(responses));
    })
}

// Function call to initialize app
init();
